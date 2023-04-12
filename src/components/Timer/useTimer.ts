import { useEffect, useState } from 'react'

const useTimer = (seconds: number) => {
  const [id, setId] = useState<any>(null)
  const [status, setStatus] = useState('OFF')
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  })

  const start = () => {
    if (status === 'ON' || id !== null) throw new Error('Outro timer já em andamento')
    if (!seconds) throw new Error('Tempo inválido')
    let timer = seconds
    try {
      let timer = seconds
      const thisId = setInterval(() => {
        const hours = parseInt((timer / 3600).toString(), 10)
        const mins = parseInt((timer / 60).toString(), 10)
        const secs = parseInt((timer % 60).toString(), 10)

        setCountDown({ days: 0, hours, mins, secs })
        if (--timer < 0) clear()
      }, 1000)

      setId(thisId)
      setStatus('ON')
      return { ok: true }
    } catch (err) {
      return { ok: false }
    }
  }

  const pause = () => {}

  const stop = () => {}

  const clear = () => {
    if (id === null || status === 'OFF') return
    clearInterval(id)
    setStatus('OFF')
    setId(null)
    setCountDown({ days: 0, hours: 0, mins: 0, secs: 0 })
    return { ok: true }
  }

  return { countDown, start, stop, clear, pause }
}

export default useTimer

export const useTimer2 = (seconds: number) => {
  const TIME_IN_MILISECONDS = seconds * 1000
  const INTERVAL_IN_MILISECONDS = 100

  const [time, setTime] = useState<number>(TIME_IN_MILISECONDS)
  const [referenceTime, setReferenceTime] = useState<number>(Date.now())

  const start = (seconds: number) => {
    setTime(seconds * 1000)
    setReferenceTime(Date.now())
  }

  useEffect(() => {
    const countdownTimeUntilZero = () => {
      setTime((prevTime) => {
        if (prevTime <= 0) return 0

        const now = Date.now()
        const interval = now - referenceTime
        setReferenceTime(now)
        return prevTime - interval
      })
    }

    const timeout = setTimeout(countdownTimeUntilZero, INTERVAL_IN_MILISECONDS)

    return () => clearTimeout(timeout)
  }, [time, referenceTime])

  return { timer: time / 1000, start }
}
