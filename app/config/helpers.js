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

/* --------------------------- */
/*       Spiral Helpers        */
/* --------------------------- */

export function generateInts (num) {
  const delta = 30
  let arr = [{
    display: 0,
    x: 500,
    y: 250
  }]
  let maxX = 1
  let maxY = 1
  let currX = 1
  let currY = 0
  let dirX = 1
  let dirY = 0
  let isVert = false
  for (let i = 1; i <= num; i++) {
    arr.push({
      display: i,
      x: arr[i - 1].x + (delta * dirX),
      y: arr[i - 1].y + (delta * dirY)
    })
    if (!isVert) {
      currX++
      if (currX > maxX) {
        isVert = true
        currX = 0
        currY++
        maxX += 1
        dirX = 0
        dirY = maxY % 2 === 0 ? -1 : 1
      }
    } else {
      currY++
      if (currY > maxY) {
        isVert = false
        currY = 0
        currX++
        maxY += 1
        dirX = maxX % 2 === 0 ? -1 : 1
        dirY = 0
      }
    }
    console.log('x', arr[i].x)
  }

  return arr
}
