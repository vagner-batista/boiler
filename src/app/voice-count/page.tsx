'use client'

import { error } from 'console'
import { useEffect, useRef, useState } from 'react'

const VoiceCount = () => {
  return (
    <div>
      <h1>Voice Counter</h1>
    </div>
  )
}

export function useCounter() {}

export type RecorderStateType = {
  recordingMinutes: number
  recordingSeconds: number
  initRecording: boolean
  mediaStream: MediaStream | null
  mediaRecorder: any
  audio: any
}
export async function startRecording(setRecordingState: any) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    setRecordingState((prev: RecorderStateType) => {
      return {
        ...prev,
        initRecorder: true,
        MediaStream: stream,
      }
    })
  } catch (error) {
    // Adjust this error handling
    console.log(error)
  }
}

export function useMic() {
  const [recorderState, setRecorderState] = useState<RecorderStateType>({
    mediaRecorder: null,
    audio: null,
    initRecording: false,
    mediaStream: null,
    recordingMinutes: 0,
    recordingSeconds: 0,
  })

  useEffect(() => {
    if (recorderState.mediaStream)
      setRecorderState((prev: RecorderStateType) => {
        if (prev.mediaStream === null) return prev
        return {
          ...prev,
          mediaRecorder: new MediaRecorder(prev.mediaStream),
        }
      })
  }, [recorderState.mediaStream])

  useEffect(() => {
    const recorder = recorderState.mediaRecorder
    let chunks: any[] = []
    if (recorder && recorder.state === 'inactive') {
      recorder.start()

      recorder.ondataavailable = (e: any) => {
        chunks.push(e.data)
      }

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/ogg; codecs:opus' })
        chunks = []
        setRecorderState((prev: RecorderStateType) => {
          if (prev.mediaRecorder) {
            return {
              ...prev,
              audio: window.URL.createObjectURL(blob),
            }
          } else {
            return prev
          }
        })
      }
    }

    return function cleanUp() {
      if (recorder) recorder.stream.getAudioTracks().forEach((track: any) => track.stop())
    }
  }, [recorderState.mediaRecorder])
}

export default VoiceCount
