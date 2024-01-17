export const cellsAround = (grid : number[][]) => {
  const boardLength = grid.length

  for (let x = 0; x < boardLength; x++) {
    for (let y = 0; y < boardLength; y++) {
      const cell = grid[x][y]
      const cellLeft = grid[x][y - 1]
      const cellRight = grid[x][y + 1]
      const cellTop = grid[x - 1] && grid[x - 1][y]
      const cellBottom = grid[x + 1] && grid[x + 1][y]

      const cellAround = [cellLeft, cellRight, cellTop, cellBottom]

      for (const cellHand of cellAround) {
        if (cell === cellHand) return true
      }
    }
  }

  return false
}
