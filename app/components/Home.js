import React, { PropTypes } from 'react'

export default function Home (props) {
  return (
    <div>
      <form
        className='itemForm'
        onSubmit={e => {
          e.preventDefault()
        }}>
        <input
          className='form-control'
          placeholder='Ex: 123456.78'
          type='text'
          onChange={props.onUpdateNumber}
        />
      </form>
      <div className='result'>
        {props.num === null
          ? 'Enter a number'
          : props.numberAsString}
      </div>
    </div>
  )
}

Home.propTypes = {
  onUpdateNumber: PropTypes.func.isRequired,
  numberAsString: PropTypes.string.isRequired,
  num: PropTypes.number
}
