// Code Keypad Component Here
import React from 'react'

export default function Keypad() {
  return (
    <div className='keypad'>
        <input type='password' onChange={() => console.log('Entering password...')}/>
    </div>
  )
}
