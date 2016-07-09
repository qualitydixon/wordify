import React, { PropTypes } from 'react'

export default function Home ({ onUpdateNumber, numberAsString, num }) {
  return (
    <div>
      <form
        className='itemForm'
        onSubmit={e => {
          e.preventDefault()
        }}>
        <input
          className='input'
          placeholder='Ex: 123456.78'
          type='text'
          onChange={onUpdateNumber}
        />
      </form>
      <div className='result'>
        {num === null
          ? 'Enter a number'
          : numberAsString}
      </div>
    </div>
  )
}

Home.propTypes = {
  onUpdateNumber: PropTypes.func.isRequired,
  numberAsString: PropTypes.string.isRequired,
  num: PropTypes.number
}
