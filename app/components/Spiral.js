import React, { PropTypes } from 'react'

export default function Spiral ({ onUpdateNumber, intArr }) {
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
      <div className='spiralContainer'>
        <svg width='1000' height='500'>
          {intArr.map((elem, idx) =>
            <text
              key={idx}
              x={elem.x}
              y={elem.y}
              fontSize='12'
              fill='white'>
            {elem.display}
            </text>)}
        </svg>
      </div>
    </div>
  )
}

Spiral.propTypes = {
  onUpdateNumber: PropTypes.func.isRequired,
  intArr: PropTypes.array.isRequired
}
