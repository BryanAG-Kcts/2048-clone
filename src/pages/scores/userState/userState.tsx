import { useGame } from '../../../hooks/useGame'
import { userStates } from '../../../scripts/usersConstants'

export const UserState = () => {
  const { userState } = useGame()
  const paragraph = userStates[userState]

  return (
    <p className='text-center'>{paragraph}</p>
  )
}
