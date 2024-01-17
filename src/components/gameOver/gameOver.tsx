import { useGame } from '../../hooks/useGame'
import './gameOver.css'
export const GameOver = () => {
  const { restartGame, gameState } = useGame()

  const isGameOver = !gameState ? 'gameOver' : 'playing'

  return (
    <div className={isGameOver}>
      <h2>Perdiste!</h2>
      <button onClick={restartGame}>Reiniciar</button>
    </div>
  )
}
