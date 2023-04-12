'use client'
import { useCallback, useEffect, useState } from 'react'
import { setTokenSourceMapRange } from 'typescript'

const SvgTimer = () => {
  const { countDown, start, progress, status, appendMinutes, appendSeconds, pause } = useSvgTimer()
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  function addPad(time: number) {
    return time.toString().padStart(2, '0')
  }

  function formatTimeLeft(time: number) {
    const minutes = addPad(Math.floor(time / 60))
    const seconds = addPad(time % 60)
    return `${minutes}:${seconds}`
  }

  function getSeconds() {
    return !Number.isNaN(seconds) ? seconds.toString().padStart(2, '0') : 0
  }
  return (
    <>
      <div className="flex flex-grow-0 items-center">
        <div className="h-56 w-56 max-w-56 align-middle snap-center items-center relative">
          <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="fill-none stroke-none">
              <circle className=" stroke-slate-200 " cx="50" cy="50" r="45" strokeWidth={7} />
              <path
                className={`transform rotate-90 origin-center stroke-blue-600 ${
                  progress === 666666666666666 ? 'transition-all delay-700 ease-linear' : ''
                }`}
                style={{
                  transition: progress < 0.98 ? 'stroke-dashoffset 1s linear' : '',
                }}
                strokeDashoffset={`${(1 - progress) * 283}`}
                strokeDasharray={'283 283'}
                strokeLinecap="round"
                d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
                strokeWidth={7}
              />
            </g>
          </svg>
          <span className="absolute w-56 h-56 top-0 flex items-center justify-center font-roboto-black text-cron">
            {status === 'ON' ? (
              <>
                {Math.floor(countDown / 60)
                  .toString()
                  .padStart(2, '0')}
              </>
            ) : (
              <input
                className="w-14"
                value={!Number.isNaN(minutes) ? minutes.toString().padStart(2, '0') : 0}
                onChange={(e) => {
                  setMinutes((prev) => {
                    const mins = parseInt(e.target.value)
                    appendMinutes(mins >= 0 ? mins : 0)
                    return parseInt(e.target.value)
                  })
                }}
              />
            )}
            <span>:</span>
            {status === 'ON' ? (
              <>
                {Math.floor(countDown % 60)
                  .toString()
                  .padStart(2, '0')}
              </>
            ) : (
              <input
                value={getSeconds()}
                onChange={(e) => {
                  setSeconds((prev) => {
                    const sec = parseInt(e.target.value)
                    appendSeconds(sec >= 0 ? sec : 0)
                    return parseInt(e.target.value)
                  })
                }}
                className="w-14"
              />
            )}
          </span>
        </div>
      </div>
      <div>
        {status === 'OFF' ? (
          <button
            className="bg-orange-400"
            onClick={() => {
              start()
            }}
          >
            Iniciar
          </button>
        ) : (
          <button
            className="bg-red-500 text-white"
            onClick={() => {
              setSeconds(Math.floor(countDown % 60))
              setMinutes(Math.floor(countDown / 60))
              pause()
            }}
          >
            Pausa
          </button>
        )}
      </div>
    </>
  )
}

export default SvgTimer

export const useSvgTimer = () => {
  const [seconds, setSeconds] = useState<number>(0)
  const [status, setStatus] = useState('OFF')
  const [countDown, setCountDown] = useState(0)
  const [timeLimit, setTimeLimit] = useState(0)

  const progress = countDown >= 0 ? countDown / seconds : 1

  function appendMinutes(minutes: number) {
    setSeconds((prev) => (seconds % 60) + minutes * 60)
  }

  function appendSeconds(_seconds: number) {
    setSeconds((prev) => seconds - (seconds % 60) + _seconds)
  }

  function start() {
    setTimeLimit(Date.now() + seconds * 1000)
    setCountDown(seconds)
    setStatus('ON')
  }

  function resume() {
    setTimeLimit(Date.now() + countDown)
    setStatus('ON')
  }

  function clear() {}

  function pause() {
    setStatus('OFF')
  }

  function stop() {
    setStatus('OFF')
    setSeconds(0)
    setCountDown(0)
    setTimeLimit(0)
  }

  useEffect(() => {
    if (countDown <= 0) setStatus('OFF')
    if (status === 'ON') {
      setTimeout(() => {
        if (status === 'ON' && countDown - 1 >= 0) {
          setCountDown((prev) => (timeLimit - Date.now()) / 1000)
        } else {
          setStatus('OFF')
        }
      }, 500)
    }

    return () => {}
  }, [status, countDown, timeLimit])

  return { countDown, start, stop, clear, pause, progress, status, appendMinutes, appendSeconds }
}
