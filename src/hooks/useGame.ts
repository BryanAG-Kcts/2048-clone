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
    const { gridBoard } = get()
  },
  moveDown: () => {
    const { gridBoard } = get()
  },
  moveLeft: () => {
    const { gridBoard } = get()

    gridBoard.forEach((row, index) => {
      const newRow = moveLeft(row)
      gridBoard[index] = newRow
    })

    set({ gridBoard })
  },
  moveRight: () => {
    const { gridBoard } = get()
  },

  generateRandomNumber () {
    const { gridBoard, generateRandomNumber } = get()
    const max = gridBoard.length
    const randomNumber = randomNumberGenerator()

    const positionX = randomPositionGenerator(max)
    const positionY = randomPositionGenerator(max)

    if (gridBoard[positionX][positionY]) {
      generateRandomNumber()
    }

    gridBoard[positionX][positionY] = randomNumber
    set({ gridBoard })
  }

}))
