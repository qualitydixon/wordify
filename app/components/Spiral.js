import React, { PropTypes } from 'react'

export default function Spiral ({ onUpdateNumber, num, intArr }) {
  return (
    <div>
      <form
        className='itemForm'
        onSubmit={e => {
          e.preventDefault()
        }}>
        <input
          className='input'
          placeholder='Ex: 75'
          type='text'
          onChange={onUpdateNumber}
        />
      </form>
      <div className='result'>
        {'Spiral!'}
      </div>
      <div className='spiralContainer'>
        <svg width='1000' height='500' stroke='blue' strokeWidth='2'>
          {intArr.map((int, idx) =>
            <text key={idx} x={10 * idx} y='150' fontFamily='Verdana' fontSize='15'>
            {int}
            </text>)}
        </svg>
      </div>
    </div>
  )
}

Spiral.propTypes = {
  onUpdateNumber: PropTypes.func.isRequired,
  num: PropTypes.string.isRequired
}
