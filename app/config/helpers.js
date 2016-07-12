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

export function generateArray (num) {
  let index = 1
  let curr = 0
  let dir = 1
  let isX = true
  let arr = [[0, 0]]
  for (let i = 1; i <= num; i++) {
    arr[i] = isX ? [(arr[i - 1][0] + 1 * dir), arr[i - 1][1]] : [arr[i - 1][0], (arr[i - 1][1] + 1 * dir)]
    if (curr + 1 < index) {
      curr++
    } else {
      if (!isX) {
        index++
        curr = 0
        isX = true
        dir *= -1
      } else {
        curr = 0
        isX = false
      }
    }
  }
  console.log(arr)
  return arr.map((elem, idx) => {
    return [500 + (elem[0] * 30), 250 + (elem[1] * 30)]
  })
}
