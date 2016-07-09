import React, { Component } from 'react'
import Home from '../components/Home'
import { getGroups } from '../config/helpers'
import { convert, order, maxEntry } from '../config/constants'

export default class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: null
    }
  }
  handleUpdateNumber (e) {
    console.log(e.target.value)
    this.setState({
      num: Number(e.target.value)
    })
  }
  convertToString (num) {
    console.log(num)
    if (num === 0) { return 'zero' }
    if (num < 0 || num > maxEntry) { return 'not a valid entry' }
    const rem = (num % 1).toFixed(2).split('.').pop()
    let ans = ` and ${rem}/100 dollars`
    let intNum = Math.floor(num / 1)
    getGroups(intNum).forEach((elem, idx, arr) => {
      let subString = ''
      if (elem > 99) {
        const hundreds = Math.floor(elem / 100)
        subString += convert[hundreds] + ' hundred '
        elem = elem % 100
      }
      if (elem > 0) {
        const tens = Math.floor(elem / 10) * 10
        const ones = elem % 10
        if (elem > 20) {
          subString += convert[Math.floor(elem / 10) * 10]
          if (ones > 0) {
            subString += '-' + convert[ones]
          }
        } else {
          subString += ' ' + convert[elem]
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
        numberAsString={this.convertToString(this.state.num)}
        num={this.state.num}
      />
    )
  }
}
