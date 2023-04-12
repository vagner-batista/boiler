import { useState } from 'react'

const { SketchPicker } = require('react-color')

const ColorPicker = ({ color, change }: { color: any; change: any }) => {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState<any>({ clientX: 0, clientY: 0 })
  const close = () => {
    setOpen(false)
  }

  const doOpen = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY })
    setOpen(true)
  }

  return (
    <>
      <p>SketchPicker</p>
      {open && (
        <div className="z-2 absolute p-10 bg-cyan-600">
          <div className="fixed top-0 bottom-0 left-0 right-0" onClick={() => close()}>
            <SketchPicker
              color={color}
              onChange={(color: any, event: any) => change(color)}
              className="fixed z-3"
              style={{ top: position.y, left: position.x, position: 'absolute' }}
            />
          </div>
        </div>
      )}
      <div
        className="w-20 h-20"
        style={{ backgroundColor: color.rgb?.r ? `rgba(${Object.values(color.rgb)})` : '#f23456' }}
        onClick={(event: any) => doOpen(event)}
      />
      <p style={{ color: color.rgb?.r ? `rgba(${Object.values(color.rgb)})` : '#f12345' }}>
        {color.rgb?.r ? `rgba(${Object.values(color.rgb)})` : '#f12345'}
      </p>
    </>
  )
}

export default ColorPicker
