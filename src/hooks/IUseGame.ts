import { userStateType } from '../scripts/usersConstants'

export type gridBoardType = number[][]

export interface user {
    userName : string,
    score: number,
    id?: number
}

export interface IUseGame {
    gridBoard : gridBoardType,
    score: number,
    bestScore: number,
    gameState: boolean,
    scoreUploaded : number,
    userState : userStateType
    firstStartGame: boolean,
    setFirstStartGame: () => void,

    restartGame: () => void,
    moveUp: () => void,
    moveDown: () => void,
    moveLeft: () => void,
    moveRight: () => void,
    generateRandomNumber: () => void,
    isGameOver: () => void,
    setScore: (scoretoPlus: number) => void,
    setBestScore: () => void,

    users : user[],
    getUsers : () => void,
    addUser : (userName : string) => void,

    saveToLocalStorage : () => void,
}
