export function getGroups (num) {
  let ans = []
  while (num > 0) {
    ans.push(num % 1000)
    num = Math.floor(num / 1000)
  }

  return ans
}

export function isInvalidInput (num) {
  const maxLength = 15
  const isTooLarge = Math.floor(num / 1).toString().length > maxLength
  const isNumeric = /^\d*\.?\d*$/.test(num)

  return (num < 0 || isTooLarge || !isNumeric)
}

export function remSubString (num) {
  const rem = Number((num % 1).toFixed(2).split('.').pop())

  return rem === 0 ? '' : ` and ${rem}/100 dollars`
}

/*
  Takes in a number and extracts the integer portion.
*/
export function wholeNum (num) {
  return Math.floor(num / 1)
}
