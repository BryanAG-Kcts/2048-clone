import { useGame } from '../../../hooks/useGame'

export const PostUser = () => {
  const { addUser } = useGame()

  const uploadScore = () => {
    const userInput = document.getElementById('userScore') as HTMLInputElement
    const userName = userInput?.value.trim()

    if (!userName) return
    addUser(userName)
  }

  return (
    <button onClick={uploadScore}>Sube tu record</button>
  )
}
