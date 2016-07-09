import React, { PropTypes, Component } from 'react'
require('../stylesheets/main.less')

export default class MainContainer extends Component {
  render () {
    return (
      <div className='main'>
        {this.props.children}
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.any
}
