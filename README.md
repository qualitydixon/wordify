# Wordify

Convert any number into sentence form.

[DEMO](http://qualitydixon.github.io/wordify/)

## Installation

Fork and clone this repo, run `npm install`, then `npm run start`. Then go to `http://localhost:8080/` in your favorite browser.

## Problem Statement

------------
-Exercise 1-
------------
Write some code that will accept an amount and convert it to the
appropriate string representation.
 
Example:
Convert 2523.04
to "Two thousand five hundred twenty-three and 04/100 dollars"

## Solution

Below I've pulled out the code relevant to the problem solution so you can get to the heart of the logic and see how I approached this exercise.

`convertToWords` from `HomeContainer.js`

```
convertToWords (num) {
  if (isInvalidInput(num)) { return 'Not a valid entry.' }
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
```

`helpers.js`

```
import { maxLength } from './constants'

/*
  Splits the given number into groups of three and pushes each group to an array.
*/
export function getGroups (num) {
  let ans = []
  while (num > 0) {
    ans.push(num % 1000)
    num = Math.floor(num / 1000)
  }

  return ans
}

export function isInvalidInput (num) {
  const isTooLarge = Math.floor(num / 1).toString().length > maxLength
  const isNumeric = /^\d*\.?\d*$/.test(num)

  return (num < 0 || isTooLarge || !isNumeric)
}

export function remSubString (num) {
  const rem = Number((num % 1).toFixed(2).split('.').pop())

  return rem === 0 ? ' dollars' : ` and ${rem}/100 dollars`
}

/*
  Takes in a number and extracts the integer portion.
*/
export function wholeNum (num) {
  return Math.floor(num / 1)
}

/*
  Removes commas and spaces from input.
*/
export function formatInput (str) {
  if (str !== '') {
    str = str.replace(/,| /g, '')
  }

  return Number(str)
}

export function capFirstChar (str) {
  str = str.trim()

  return str.charAt(0).toUpperCase() + str.slice(1)
}
```

`constants.js`

```
export const convert = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}

export const order = {
  0: '',
  1: ' thousand ',
  2: ' million ',
  3: ' billion ',
  4: ' trillion '
}

export const maxLength = 15
```
