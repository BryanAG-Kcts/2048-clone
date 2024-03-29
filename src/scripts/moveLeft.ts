import { filterZeroesRow } from './filterZeroes'

interface returnMove {
  state : boolean
  score : number
  row : number[]
}

export const moveLeft = (row : number[]) : returnMove => {
  let rowFilter = filterZeroesRow(row)
  let score = 0

  for (let i = 0; i < rowFilter.length - 1; i++) {
    if (rowFilter[i] === rowFilter[i + 1]) {
      rowFilter[i] = rowFilter[i] * 2
      score += rowFilter[i]
      rowFilter[i + 1] = 0
    }
  }

  rowFilter = filterZeroesRow(rowFilter)

  const diff = row.length - rowFilter.length
  const zeroes = Array(diff).fill(0)
  rowFilter = rowFilter.concat(zeroes)
  const almostMove = rowFilter.join('') !== row.join('')
  return {
    row: rowFilter,
    state: almostMove,
    score
  }
}
