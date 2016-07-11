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
  let arr = []
  for (let i = 0; i <= num; i++) {
    arr.push(i)
  }

  return arr
}
