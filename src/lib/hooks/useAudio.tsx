import { useEffect, useRef, useState } from 'react'

export const useAudio = (src: string, options?: { volume: number; playbackRate: number }) => {
  const { volume, playbackRate } = options || { volume: 1, playbackRate: 1 }
  const audio = useRef(typeof Audio !== 'undefined' ? new Audio(src) : undefined)
  const [status, setStatus] = useState<boolean>(false)

  function playAudio() {
    if (typeof audio.current === 'undefined') return
    setStatus(true)
    audio.current.play()
  }

  function stopAudio() {
    if (typeof audio.current === 'undefined') return
    setStatus(false)
    audio.current.pause()
  }

  useEffect(() => {})

  useEffect(() => {
    if (typeof audio.current === 'undefined') return
    setStatus(!audio.current.paused)
  }, [audio.current?.paused])

  useEffect(() => {
    if (typeof audio.current === 'undefined') return
    audio.current.volume = volume
  }, [volume])

  useEffect(() => {
    if (typeof audio.current === 'undefined') return
    audio.current.playbackRate = playbackRate
  }, [playbackRate])

  return { playAudio, stopAudio, audio: audio.current, status }
}
