import React, { Component } from 'react'
import Home from '../components/Home'
import { getGroups, isInvalidInput, remSubString, wholeNum, formatNum, capFirstChar } from '../config/helpers'
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
        num: formatNum(input)
      })
    }
  }
  convertToWords (num) {
    if (isInvalidInput(num)) { return 'Not a valid entry.' }
    let ans = remSubString(num)
    if (num < 1) { return 'Zero' + ans }
    getGroups(wholeNum(num)).forEach((group, idx, arr) => {
      let subString = ''
      const hundreds = Math.floor(group / 100)
      const tens = group % 100
      const ones = tens % 10
      subString += hundreds > 0 ? convert[hundreds] + ' hundred ' : ''
      if (tens > 0) {
        if (tens > 20) {
          subString += convert[Math.floor(tens / 10) * 10]
          subString += ones === 0 ? '' : '-' + convert[ones]
        } else {
          subString += ' ' + convert[tens]
        }
      }
      subString += subString !== '' ? order[idx] : ''
      ans = subString + ans
    })

    return capFirstChar(ans)
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
