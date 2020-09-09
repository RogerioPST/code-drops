export function toRoman (n: number): string {
  if (n <= 0 || n > 3999) {
    throw new RangeError('Number out of range for Roman numerals.')
  }
  const numStr = n.toString()
  return numStr
    .split('')
    .map((digit, index) => {
      console.log('numStr', numStr)
      console.log('numStr.length - index - 1', numStr.length - index - 1)
      console.log('digit', digit)
      return getRomanNumeral(numStr.length - index - 1, parseInt(digit))
    }
    )
    .join('')
}

function getRomanNumeral (indiceOndeDigitoEsta: number, digit: number): string {
  if (digit === 0) {
    return ''
  }
  const placeSymbols = ['I', 'X', 'C', 'M', '']
  const placeHalfSymbols = ['V', 'L', 'D', '']
  const symbol = placeSymbols[indiceOndeDigitoEsta]
  const halfSymbol = placeHalfSymbols[indiceOndeDigitoEsta]
  const nextSymbol = placeSymbols[indiceOndeDigitoEsta + 1]
  switch (true) {
    case digit <= 3:
      return symbol.repeat(digit)
    case digit === 4:
      return symbol + halfSymbol
    case digit <= 8:
      return halfSymbol + symbol.repeat(digit - 5)
    case digit === 9:
      return symbol + nextSymbol
  }
}
