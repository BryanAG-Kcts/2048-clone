export const userLink = 'https://2048-clone.up.railway.app/users'

export const userStates = {
  none: '',
  toLow: 'El puntaje que tienes es demasiado bajo para rankearlo, lo lamentamos si te sientes orgulloso con él',
  notBetter: 'El puntaje que tienes no es mayor a tu mejor puntaje'
}

export const minScore = 1300

export type userStateType = keyof typeof userStates
