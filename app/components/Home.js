import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function Home ({ onUpdateNumber, numberAsString }) {
  return (
    <div className='home'>
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
        {numberAsString}
      </div>
      <Link to='/spiral' className='link'>
        <button className='btn btn-info'>
         {'Bonus: Spiral'}
        </button>
      </Link>
    </div>
  )
}

Home.propTypes = {
  onUpdateNumber: PropTypes.func.isRequired,
  numberAsString: PropTypes.string.isRequired
}
