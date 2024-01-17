export type gridBoardType = number[][]

export interface IUseGame {
    gridBoard : gridBoardType,
    score: number,
    bestScore: number,
    restartGame: () => void,
    moveUp: () => void,
    moveDown: () => void,
    moveLeft: () => void,
    moveRight: () => void,
    generateRandomNumber: () => void,
    isGameOver: () => void,
}
