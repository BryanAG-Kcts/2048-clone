import { randomNumberGenerator, randomPositionGenerator, startGame } from '../scripts/gameConstants'
import { create } from 'zustand'
import { IUseGame } from './IUseGame'
import { moveLeft } from '../scripts/moveLeft'

export const useGame = create<IUseGame>((set, get) => ({
  gridBoard: startGame(),
  score: 0,
  bestScore: 0,

  restartGame: () => {
    const grid = startGame()
    set({ gridBoard: grid, score: 0 })
  },
  moveUp: () => {
    const { gridBoard, generateRandomNumber } = get()
    const boardLength = gridBoard.length
    let almostMove = false

    for (let y = 0; y < boardLength; y++) {
      const col = []

      for (let x = 0; x < boardLength; x++) {
        col.push(gridBoard[x][y])
      }

      const { row, state } = moveLeft(col)
      for (let x = 0; x < boardLength; x++) {
        gridBoard[x][y] = row[x]
      }

      almostMove ||= state
    }

    set({ gridBoard })
    if (almostMove) generateRandomNumber()
  },
  moveDown: () => {
    const { gridBoard, generateRandomNumber } = get()
    const boardLength = gridBoard.length
    let almostMove = false

    for (let y = 0; y < boardLength; y++) {
      const col = []

      for (let x = 0; x < boardLength; x++) {
        col.push(gridBoard[x][y])
      }

      const { row, state } = moveLeft(col.reverse())
      row.reverse()
      for (let x = 0; x < boardLength; x++) {
        gridBoard[x][y] = row[x]
      }

      almostMove ||= state
    }

    set({ gridBoard })
    if (almostMove) generateRandomNumber()
  },
  moveLeft: () => {
    const { gridBoard, generateRandomNumber } = get()
    let almostMove = false

    gridBoard.forEach((row, index) => {
      const { row: newRow, state } = moveLeft(row)
      gridBoard[index] = newRow
      almostMove ||= state
    })

    set({ gridBoard })
    if (almostMove) generateRandomNumber()
  },
  moveRight: () => {
    const { gridBoard, generateRandomNumber } = get()
    let almostMove = false

    gridBoard.forEach((row, index) => {
      const { row: newRow, state } = moveLeft(row.reverse())
      gridBoard[index] = newRow.reverse()
      almostMove ||= state
    })

    set({ gridBoard })
    if (almostMove) generateRandomNumber()
  },
  generateRandomNumber () {
    const { gridBoard } = get()
    const max = gridBoard.length
    const randomNumber = randomNumberGenerator()

    while (true) {
      const positionX = randomPositionGenerator(max)
      const positionY = randomPositionGenerator(max)

      if (gridBoard[positionX][positionY] === 0) {
        gridBoard[positionX][positionY] = randomNumber
        break
      }
    }

    set({ gridBoard })
  }

}))
