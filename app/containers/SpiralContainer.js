import React, { Component } from 'react'
import Spiral from '../components/Spiral'
import { generateInts } from '../config/helpers'

export default class SpiralContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 0,
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
  getX (int) {
    let mult = this.state.maxSteps % 2 === 0 ? -1 : 1
    const ans = this.state.currX + (10 * mult)
    return ans
  }
  render () {
    return (
      <Spiral
        onUpdateNumber={e => this.handleUpdateNumber(e)}
        intArr={this.state.intArr}
      />
    )
  }
}
