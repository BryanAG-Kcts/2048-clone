import { getBestScoreStorage, getScoreStorage, getScoreUploadedStorage, randomNumberGenerator, randomPositionGenerator, startGame } from '../scripts/gameConstants'
import { create } from 'zustand'
import { IUseGame, user } from './IUseGame'
import { moveLeft } from '../scripts/moveLeft'
import { cellsEmpty } from '../scripts/cellsEmpty'
import { cellsAround } from '../scripts/cellsAround'
import { fetchDataJson } from '../scripts/fetchDataJson'
import { minScore, userLink } from '../scripts/usersConstants'
import { postDataFetch } from '../scripts/postDataFetch'

export const useGame = create<IUseGame>((set, get) => ({
  gridBoard: startGame(),
  score: getScoreStorage(),
  bestScore: getBestScoreStorage(),
  gameState: true,
  scoreUploaded: getScoreUploadedStorage(),
  users: [],
  firstStartGame: true,
  userState: 'none',
  setFirstStartGame () {
    set({ firstStartGame: false })
  },
  restartGame: () => {
    localStorage.removeItem('gridBoard')
    const grid = startGame()
    set({ gridBoard: grid, score: 0, gameState: true })
  },
  moveUp: () => {
    const { gridBoard, generateRandomNumber, isGameOver, setScore, setBestScore, saveToLocalStorage } = get()
    const boardLength = gridBoard.length
    let almostMove = false
    let newScore = 0

    for (let y = 0; y < boardLength; y++) {
      const col = []

      for (let x = 0; x < boardLength; x++) {
        col.push(gridBoard[x][y])
      }

      const { row, state, score } = moveLeft(col)
      newScore += score
      for (let x = 0; x < boardLength; x++) {
        gridBoard[x][y] = row[x]
      }

      almostMove ||= state
    }

    set({ gridBoard })
    setScore(newScore)
    setBestScore()
    if (almostMove) generateRandomNumber()
    isGameOver()
    saveToLocalStorage()
  },
  moveDown: () => {
    const { gridBoard, generateRandomNumber, isGameOver, setBestScore, setScore, saveToLocalStorage } = get()
    const boardLength = gridBoard.length
    let almostMove = false
    let newScore = 0

    for (let y = 0; y < boardLength; y++) {
      const col = []

      for (let x = 0; x < boardLength; x++) {
        col.push(gridBoard[x][y])
      }

      const { row, state, score } = moveLeft(col.reverse())
      newScore += score
      row.reverse()
      for (let x = 0; x < boardLength; x++) {
        gridBoard[x][y] = row[x]
      }

      almostMove ||= state
    }

    set({ gridBoard })
    setScore(newScore)
    setBestScore()
    if (almostMove) generateRandomNumber()
    isGameOver()
    saveToLocalStorage()
  },
  moveLeft: () => {
    const { gridBoard, generateRandomNumber, isGameOver, setBestScore, setScore, saveToLocalStorage } = get()
    let almostMove = false
    let newScore = 0

    gridBoard.forEach((row, index) => {
      const { row: newRow, state, score } = moveLeft(row)
      newScore += score
      gridBoard[index] = newRow
      almostMove ||= state
    })

    set({ gridBoard })
    setScore(newScore)
    setBestScore()
    if (almostMove) generateRandomNumber()
    isGameOver()
    saveToLocalStorage()
  },
  moveRight: () => {
    const { gridBoard, generateRandomNumber, isGameOver, setScore, setBestScore, saveToLocalStorage } = get()
    let almostMove = false
    let newScore = 0

    gridBoard.forEach((row, index) => {
      const { row: newRow, state, score } = moveLeft(row.reverse())
      newScore += score
      gridBoard[index] = newRow.reverse()
      almostMove ||= state
    })

    set({ gridBoard })
    setScore(newScore)
    setBestScore()
    if (almostMove) generateRandomNumber()
    isGameOver()
    saveToLocalStorage()
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
  },
  isGameOver () {
    const { gridBoard } = get()
    const isAllFully = cellsEmpty(gridBoard)

    if (isAllFully) {
      const isOneMoveLeft = cellsAround(gridBoard)
      if (!isOneMoveLeft) set({ gameState: false })
    }
  },
  setScore: (scoretoPlus) => {
    const { score } = get()
    const newScore = score + scoretoPlus
    set({ score: newScore })
  },
  setBestScore () {
    const { score, bestScore } = get()
    if (score > bestScore) set({ bestScore: score })
  },
  async getUsers () {
    const users = await fetchDataJson(userLink)
    set({ users })
  },
  async addUser (userName) {
    const { getUsers, bestScore, scoreUploaded } = get()

    if (bestScore < minScore) {
      set({ userState: 'toLow' })
      return
    }

    if (scoreUploaded === bestScore) {
      set({ userState: 'notBetter' })
      return
    }

    const user : user = {
      score: bestScore,
      userName
    }

    const result = await postDataFetch(userLink, user)

    if (result.serverStatus === 2) {
      getUsers()
      set({ scoreUploaded: bestScore })
      set({ userState: 'none' })
    }
  },
  saveToLocalStorage () {
    const { bestScore, scoreUploaded, gridBoard, score } = get()

    localStorage.setItem('bestScore', bestScore.toString())
    localStorage.setItem('scoreUploaded', scoreUploaded.toString())
    localStorage.setItem('gridBoard', JSON.stringify(gridBoard))
    localStorage.setItem('score', score.toString())
  }

}))
