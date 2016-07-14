import { convert, order, maxLength } from './constants'
/*
  Splits the given number into groups of three and pushes each group to an array.
*/
function getGroups (num) {
  let ans = []
  while (num > 0) {
    ans.push(num % 1000)
    num = Math.floor(num / 1000)
  }

  return ans
}

function isInvalidInput (num) {
  const isTooLarge = Math.floor(num / 1).toString().length > maxLength
  const isNumeric = /^\d*\.?\d*$/.test(num)

  return (num < 0 || isTooLarge || !isNumeric)
}

function remSubString (num) {
  const rem = Number((num % 1).toFixed(2).split('.').pop())

  return rem === 0 ? ' dollars' : ` and ${rem}/100 dollars`
}

/*
  Takes in a number and extracts the integer portion.
*/
function wholeNum (num) {
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

function capFirstChar (str) {
  str = str.trim()

  return str.charAt(0).toUpperCase() + str.slice(1)
}

/* --------------------------- */
/*       Spiral Helpers        */
/* --------------------------- */

export function generateArray (num) {
  const delta = 30
  let arr = [{
    x: 500,
    y: 250
  }]
  let maxX = 1
  let maxY = 1
  let currX = 1
  let currY = 0
  let dirX = 1
  let dirY = 0
  for (let i = 1; i <= num; i++) {
    arr.push({
      x: arr[i - 1].x + (delta * dirX),
      y: arr[i - 1].y + (delta * dirY)
    })
    if (dirY === 0) {
      currX++
      if (currX > maxX) {
        currX = 0
        currY++
        maxX += 1
        dirX = 0
        dirY = maxY % 2 === 0 ? -1 : 1
      }
    } else {
      currY++
      if (currY > maxY) {
        currY = 0
        currX++
        maxY += 1
        dirX = maxX % 2 === 0 ? -1 : 1
        dirY = 0
      }
    }
  }

  return arr
}

export function convertToWords (num) {
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
