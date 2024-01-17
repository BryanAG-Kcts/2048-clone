export const cellsEmpty = (grid : number[][]) : boolean => {
  const isFull = grid.every(row => {
    return row.every(cell => cell !== 0)
  })

  return isFull
}
