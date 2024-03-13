export const userLink = 'https://github.com/BryanAG-Kcts/2048-clone.git/users'
export const minScore = 1300

export const userStates = {
  none: '',
  toLow: `El puntaje que tienes es demasiado bajo para rankearlo, lo lamentamos si te sientes orgulloso de él (min : ${minScore})`,
  notBetter: 'El puntaje que tienes no es mayor a tu mejor puntaje'
}


export type userStateType = keyof typeof userStates
