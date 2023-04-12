import './styles.css'

import { ChangeEvent, useState } from 'react'

const ColorPicker = ({ color, onChange }: { color: string; onChange: (e: ChangeEvent) => void }) => {
  return (
    <>
      <div className="p-0 m-4 absolute shadow-md">
        <input className={'colorer '} type="color" value={color} onChange={onChange} />
        <p className="caption relative m-3">Cor</p>
        <p className="caption-small relative m-3">{color}</p>
      </div>
    </>
  )
}

export default ColorPicker
