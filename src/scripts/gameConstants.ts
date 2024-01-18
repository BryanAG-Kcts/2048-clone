export const possibleValuesGenerated = {
  two: 2,
  four: 4
}

export const initialStateBoard = () => new Array(4).fill(0).map(() => new Array(4).fill(0))

export const randomNumberGenerator = () => Math.random() > 0.2 ? possibleValuesGenerated.two : possibleValuesGenerated.four

export const randomPositionGenerator = (max : number) => Math.floor(Math.random() * max)

export const startGame = () => {
  const gridLocalStorage = localStorage.getItem('gridBoard')

  if (gridLocalStorage) return JSON.parse(gridLocalStorage)

  const grid = initialStateBoard()
  const max = grid.length

  const firstPositionX = randomPositionGenerator(max)
  const firstPositionY = randomPositionGenerator(max)

  let secondPositionX = randomPositionGenerator(max)
  let secondPositionY = randomPositionGenerator(max)

  const firstValue = randomNumberGenerator()
  const secondValue = randomNumberGenerator()

  if (firstPositionX === secondPositionX && firstPositionY === secondPositionY) {
    secondPositionX === 0 ? secondPositionX++ : secondPositionX--
    secondPositionY === 0 ? secondPositionY++ : secondPositionY--
  }

  grid[firstPositionX][firstPositionY] = firstValue
  grid[secondPositionX][secondPositionY] = secondValue

  return grid
}

export const getScoreStorage = () => {
  const score = Number(localStorage.getItem('score'))
  return score
}

export const getBestScoreStorage = () => {
  const bestScore = Number(localStorage.getItem('bestScore'))
  return bestScore
}

export const getScoreUploadedStorage = () => {
  const scoreUploaded = Number(localStorage.getItem('scoreUploaded'))
  return scoreUploaded
}
