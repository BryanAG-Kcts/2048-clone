export type gridBoardType = number[][]

export interface IUseGame {
    gridBoard : gridBoardType,
    score: number,
    bestScore: number,
    gameState: boolean,
    restartGame: () => void,
    moveUp: () => void,
    moveDown: () => void,
    moveLeft: () => void,
    moveRight: () => void,
    generateRandomNumber: () => void,
    isGameOver: () => void,
    setScore: (scoretoPlus: number) => void,
    setBestScore: () => void,
}
