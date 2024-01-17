import { filterZeroesRow } from './filterZeroes'

interface returnMove {
  state : boolean
  row : number[]
}

export const moveLeft = (row : number[]) : returnMove => {
  let rowFilter = filterZeroesRow(row)

  for (let i = 0; i < rowFilter.length - 1; i++) {
    if (rowFilter[i] === rowFilter[i + 1]) {
      rowFilter[i] = rowFilter[i] * 2
      rowFilter[i + 1] = 0
    }
  }

  rowFilter = filterZeroesRow(rowFilter)

  const diff = row.length - rowFilter.length
  const almostMove = diff !== 0
  const zeroes = Array(diff).fill(0)
  rowFilter = rowFilter.concat(zeroes)
  return {
    row: rowFilter,
    state: almostMove
  }
}
