'use client'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { useAudio } from '@/lib/hooks/useAudio'
import { useTimer } from '@/lib/hooks/useTimer'

const Timer = () => {
  const {
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
  } = useTimer(0)

  const { playAudio, stopAudio, audio, status } = useAudio('/audio/mixkit-slow-racing-countdown-1055.wav')
  return (
    <>
      <div className="snap-center flex items-center justify-center align-middle pt-16 h-screen">
        <div className="items-center snap-center justify-center w-64 align-middle text-center object-center h-full grow">
          <h1>Timer</h1>
          <h2>
            {Math.floor(timer / 60)
              .toString()
              .padStart(2, '0')}
            :
            {Math.floor(timer % 60)
              .toString()
              .padStart(2, '0')}
          </h2>
          <div className="flex flex-row w-64 items-center px-auto mx-auto my-2 gap-2">
            <input
              type="number"
              className="border border-3 border-slate-500 p-1 rounded w-1/2 [appearance:none]"
              value={Math.floor(timer / 60)}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                e.target.value !== '' ? setMinutes(parseInt(e.target.value)) : setMinutes(0)
              }
              disabled={timerStatus}
            />
            <input
              type="number"
              className="border border-3 border-slate-500 p-1 rounded w-1/2 [appearance:number]"
              value={Math.floor(timer % 60)}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                e.target.value !== '' ? setSeconds(parseInt(e.target.value)) : setSeconds(0)
              }
              disabled={timerStatus}
            />
          </div>
          <div className="flex flex-row w-64 p-auto m-auto gap-2">
            <button
              className="bg-second p-1 my-2 text-white disabled:bg-slate-400 flex-grow rounded w-1/2"
              onClick={() => startTimer()}
              disabled={timerStatus}
            >
              {!timerStatus && pausedStatus ? 'Resume' : 'Start'}
            </button>
            <button
              className="bg-second p-1 my-2 text-white disabled:bg-slate-400 flex-grow rounded w-1/2"
              onClick={() => pauseTimer()}
              disabled={!timerStatus}
            >
              Pause
            </button>
          </div>

          <div className="flex flex-row w-64 p-auto m-auto">
            <button
              className="bg-second p-1 my-2 text-white disabled:bg-slate-400 flex-grow rounded"
              onClick={() => stopTimer()}
              disabled={!timerStatus && !pausedStatus}
            >
              Stop
            </button>
          </div>

          <div className="flex flex-row w-64 p-auto mx-auto ">
            <button
              className="bg-second p-1 my-2 text-white disabled:bg-slate-400 flex-grow rounded"
              onClick={() => {
                status === false ? playAudio() : stopAudio()
              }}
              disabled={false}
            >
              {status === false ? 'Play' : 'Pause'}
            </button>
          </div>
          <br />
          <div className="flex flex-col gap-2">
            <p>Time: {timer}</p>
            <p>Running: {timerStatus ? 'true' : 'false'}</p>
            <p>Target Time: {new Date(targetTime).toLocaleTimeString('pt-BR')}</p>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white w-full bottom-0 absolute font-poppins-thin text-sm p-2">Footer</div>
    </>
  )
}

export default Timer
