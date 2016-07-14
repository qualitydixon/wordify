import React, { Component } from 'react'
import Home from '../components/Home'
import { formatInput, convertToWords } from '../utils/helpers'

export default class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: null
    }
  }
  handleUpdateNumber (e) {
    const input = e.target.value
    if (input === '') {
      this.setState({
        num: null
      })
    } else {
      this.setState({
        num: formatInput(input)
      })
    }
  }
  render () {
    return (
      <Home
        onUpdateNumber={(e) => this.handleUpdateNumber(e)}
        numberAsString={convertToWords(this.state.num)}
      />
    )
  }
}
