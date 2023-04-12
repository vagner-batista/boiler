'use client'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'

import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import SvgTimer from '@/components/SvgTimer'
import Timer, { Timer2 } from '@/components/Timer/Timer'
import { useTimer2 } from '@/components/Timer/useTimer'
import config from '@/lib/env-config'

const Home = () => {
  const [color, updateColor] = useState('#f00990')
  const [sketchColor, setSketchColor] = useState<any>({ rgb: { r: 'ff', g: '43', b: 'ff', a: '1' } })
  const [open, setOpen] = useState(false)
  const [seconds, setSeconds] = useState<number>(0)
  const [timeValue, setTimeValue] = useState<number>(20)

  const { timer, start } = useTimer2(30)

  return (
    <>
      <SessionProvider>
        <PageHeader />
        <div>
          <SvgTimer />
        </div>
        <div className=" bg-white">Abc </div>
        <div id="main" className="col-auto bg-slate-100 w-3/5 container ">
          <Header />

          <Timer seconds={98} />
          <h1 className="font-hero text-7xl">AI Cooking robot</h1>
          <h2 className="font-thintitle text-green-700 text-xl">Cooking experiences from a non experienced bot</h2>
          <div></div>
          <div className="container">
            <h1>Heading 1</h1>
            <p>
              Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum
              lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem
              Ipsum lorem Ipsum loremIpsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem{' '}
            </p>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>

          <div className="flex snap-center m-auto">
            <div className="flex flex-10"></div>
          </div>

          <p>Rodando na porta {config.port}</p>
        </div>
        <div className="col-3 bg-emerald-300 h-full container flex-grow min-h-full"> Abc </div>
      </SessionProvider>
    </>
  )
}

export default Home
