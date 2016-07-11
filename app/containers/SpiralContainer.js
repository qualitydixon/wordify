import React, { Component } from 'react'
import Spiral from '../components/Spiral'
import { generateInts } from '../config/helpers'

export default class SpiralContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: null,
      intArr: []
    }
  }
  handleUpdateNumber (e) {
    const input = e.target.value
    this.setState({
      num: input,
      intArr: generateInts(Number(input))
    })
  }
  render () {
    return (
      <Spiral
        onUpdateNumber={(e) => this.handleUpdateNumber(e)}
        num={this.state.num}
        intArr={this.state.intArr}
      />
    )
  }
}
