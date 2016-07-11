import React, { Component } from 'react'
import Home from '../components/Home'
import { getGroups, isInvalidInput, remSubString, wholeNum, formatInput, capFirstChar } from '../config/helpers'
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
        num: formatInput(input)
      })
    }
  }
  convertToWords (num) {
    if (num === null) { return 'Enter a number' }
    if (isInvalidInput(num)) { return 'Not a valid entry' }
    let ans = remSubString(num)
    if (num < 1) { return 'Zero' + ans }
    getGroups(wholeNum(num)).forEach((group, idx, arr) => {
      let subString = ''
      const hundreds = Math.floor(group / 100)
      const tens = Math.floor(((group % 100) / 10)) * 10
      const ones = group % 10
      subString += hundreds > 0 ? convert[hundreds] + ' hundred ' : ''
      if (tens >= 20) {
        subString += convert[tens]
        subString += ones === 0 ? '' : '-' + convert[ones]
      } else {
        subString += tens + ones === 0 ? '' : ' ' + convert[tens + ones]
      }
      subString += subString !== '' ? order[idx] : ''
      ans = subString + ans
    })

    return capFirstChar(ans)
  }
  render () {
    return (
      <div>
        <Home
          onUpdateNumber={(e) => this.handleUpdateNumber(e)}
          numberAsString={this.convertToWords(this.state.num)}
        />
      </div>
    )
  }
}
