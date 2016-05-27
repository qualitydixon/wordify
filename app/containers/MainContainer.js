import React, { PropTypes, Component } from 'react'
require('../stylesheets/main.less')

export default class MainContainer extends Component {
  render () {
    return (
      <div className='main'>
        <h2>{'This is your MainContainer. It is set as your parent route. It will always be active.'}</h2>
        {this.props.children}
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.any
}
