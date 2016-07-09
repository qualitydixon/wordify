import React, { Component } from 'react'
import Home from '../components/Home'
import { getGroups, isInvalidInput, remSubString, wholeNum } from '../config/helpers'
import { convert, order } from '../config/constants'

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
        num: Number(input)
      })
    }
  }
  convertToWords (num) {
    if (isInvalidInput(num)) { return 'Not a valid entry.' }
    let ans = remSubString(num)
    if (num < 1) { return 'zero' + ans }
    getGroups(wholeNum(num)).forEach((group, idx, arr) => {
      let subString = ''
      if (group > 99) {
        const hundreds = Math.floor(group / 100)
        subString += convert[hundreds] + ' hundred '
        group = group % 100
      }
      if (group > 0) {
        const ones = group % 10
        if (group > 20) {
          subString += convert[Math.floor(group / 10) * 10]
          subString += ones === 0 ? '' : '-' + convert[ones]
        } else {
          subString += ' ' + convert[group]
        }
      }
      if (subString !== '') {
        subString += order[idx]
      }
      ans = subString + ans
    })

    return ans
  }
  render () {
    return (
      <Home
        onUpdateNumber={(e) => this.handleUpdateNumber(e)}
        numberAsString={this.convertToWords(this.state.num)}
        num={this.state.num}
      />
    )
  }
}
