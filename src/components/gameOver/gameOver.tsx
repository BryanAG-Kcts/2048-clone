import { useEffect, useRef } from 'react'
import { useGame } from '../../hooks/useGame'
import './gameOver.css'
export const GameOver = () => {
  const { restartGame, gameState } = useGame()

  const isGameOver = !gameState ? 'gameOver' : 'playing'
  const gameOverModal = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gameOverModal.current?.addEventListener('touchstart', e => {
      e.stopPropagation()
    })
  }, [])

  return (
    <div ref={gameOverModal} className={isGameOver}>
      <h2>Perdiste!</h2>
      <button onClick={restartGame}>Reiniciar</button>
    </div>
  )
}
