import { useState } from 'react'

import useTimer, { useTimer2 } from './useTimer'

const Timer = ({ seconds }: { seconds: number }) => {
  const { start, stop, clear, pause, countDown } = useTimer(seconds)

  return (
    <>
      <div className="border-double border-slate-500 border-2 rounded-md p-5  items-center flex flex-col">
        <h3 className="snap-center">Timer</h3>
        <div className="flex flex-row">
          <div className="flex flex-col text-center bg-yellow-500 text-white p-2 rounded-md m-2 shadow-md">
            <span className="font-poppins text-3xl">{countDown.days}</span>
            <span className="font-poppins-thin text-sm">dias</span>
          </div>
          <div className="align-middle h-full text-center rounded-md ">
            <br />
            <span>:</span>
          </div>
          <div className="flex flex-col text-center bg-yellow-500 text-white p-2 rounded-md m-2 shadow-md">
            <span className="font-poppins text-3xl">{countDown.hours}</span>
            <span className="font-poppins-thin text-sm">horas</span>
          </div>
          <div className="align-middle h-full text-center rounded-md ">
            <br />
            <span>:</span>
          </div>
          <div className="flex flex-col text-center bg-yellow-500 text-white p-2 rounded-md m-2 shadow-md">
            <span className="font-poppins text-3xl">{countDown.mins}</span>
            <span className="font-poppins-thin text-sm">min</span>
          </div>
          <div className="align-middle h-full text-center rounded-md ">
            <br />
            <span>:</span>
          </div>
          <div className="flex flex-col text-center bg-yellow-500 text-white p-2 rounded-md m-2 shadow-md">
            <span className="font-poppins text-3xl">{countDown.secs}</span>
            <span className="font-poppins-thin text-sm">seg</span>
          </div>
        </div>
        <div className="flex flex-row ">
          <button className="bg-green-600 font-poppins text-sm text-white m-1 p-2" onClick={() => start()}>
            Iniciar
          </button>
          <button className="bg-green-600 font-poppins text-sm text-white m-1 p-2" onClick={() => pause()}>
            Pausar
          </button>
          <button className="bg-green-600 font-poppins text-sm text-white m-1 p-2" onClick={() => stop()}>
            Parar
          </button>
          <button className="bg-green-600 font-poppins text-sm text-white m-1 p-2" onClick={() => clear()}>
            Limpar
          </button>
        </div>
      </div>
    </>
  )
}

export default Timer

export const Timer2 = () => {
  const { timer, start } = useTimer2(0)
  const [inputValue, setInput] = useState<number>(20)
  const getMinutes = (timer: number) => {
    return Math.floor(timer / 60)
      .toFixed(0)
      .padStart(2, '0')
  }
  const getSeconds = (timer: number) => {
    return (timer % 60).toFixed(0).padStart(2, '0')
  }

  return (
    <>
      <div>Timer</div>
      <div>
        <span>{getMinutes(timer)}</span>
        <span>Minutos</span>
      </div>
      <div>
        <span>{getSeconds(timer)}</span>
        <span>Segundos</span>
      </div>

      <div id="_buttons">
        <input value={inputValue} onChange={(e) => setInput(parseInt(e.target.value))} type="number" />
        <button onClick={(e) => start(inputValue)}>Iniciar</button>
      </div>
    </>
  )
}
