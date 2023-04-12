import { useEffect, useState } from 'react'

import { useAudio } from './useAudio'

export type TimerProps = {
  timer: number
  startTimer: () => void
  pauseTimer: () => void
  stopTimer: () => void
  addSeconds: (seconds: number) => void
  addMinutes: (minutes: number) => void
  timerStatus: boolean
  targetTime: number
  setTimeToCount: (time: number) => void
  pausedStatus: boolean
  timerObj: { total: number; hours: number; minutes: number; seconds: number }
  setSeconds: (seconds: number) => void
  setMinutes: (minutes: number) => void
}

export function useTimer(initialstate: number = 0): TimerProps {
  const [timer, setTimer] = useState<number>(initialstate)
  const [timerStatus, setTimerStatus] = useState<boolean>(false)
  const [pausedStatus, setPausedStatus] = useState<boolean>(false)
  const [targetTime, setTargetTime] = useState<number>(0)
  const [timerObj, setTimerObj] = useState<{ total: number; hours: number; minutes: number; seconds: number }>({
    total: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const WARNING_SECS = 3
  const sound = useAudio('/audio/mixkit-slow-racing-countdown-1055.wav', { playbackRate: 1.5, volume: 0.7 })

  function formatTimer(time: number) {
    return {
      total: Math.floor(time),
      hours: Math.floor(time / 3600),
      minutes: Math.floor(time / 60),
      seconds: Math.floor(time % 60),
    }
  }

  function tick() {
    if (!timerStatus || timer <= 0) return
    const newTimer = (targetTime - Date.now()) / 1000
    formatTimer(newTimer)
    setTimer(newTimer)
  }

  function startTimer() {
    setTargetTime(Date.now() + timer * 1000)
    setTimerStatus(true)
    setPausedStatus(false)
    formatTimer(timer)
  }
  function pauseTimer() {
    setTimerStatus(false)
    setPausedStatus(true)
  }
  function stopTimer() {
    setTimerStatus(false)
    setPausedStatus(false)
    setTimer(0)
  }

  function setTimeToCount(time: number) {
    setTimer(time)
    formatTimer(time)
  }

  function addSeconds(seconds: number) {
    setTimer((prev) => prev + seconds * 1000)
  }

  function setSeconds(seconds: number) {
    setTimer((prev) => prev - (prev % 60) + seconds)
  }

  function addMinutes(minutes: number) {
    setTimer((prev) => prev + minutes * 60)
  }

  function setMinutes(minutes: number) {
    setTimer((prev) => minutes * 60 + (prev % 60))
  }

  function removeSeconds(seconds: number) {
    if (timer - seconds * 1000 <= 0) return
    setTimer((prev) => prev - seconds * 1000)
  }

  function removeMinutes(minutes: number) {
    if (timer - minutes * 1000 * 60 <= 0) return
    setTimer((prev) => prev - minutes * 1000 * 60)
  }

  useEffect(() => {
    if (!timerStatus) return
    if (timer <= 0) {
      stopTimer()
      return
    }
    if (timer <= WARNING_SECS + 1) {
      sound.playAudio()
    }
    const interval = setInterval(tick, 250)

    return function cleanUp() {
      clearInterval(interval)
    }
  })

  return {
    timer,
    startTimer,
    pauseTimer,
    stopTimer,
    addSeconds,
    addMinutes,
    timerStatus,
    targetTime,
    setTimeToCount,
    pausedStatus,
    timerObj,
    setSeconds,
    setMinutes,
  }
}
