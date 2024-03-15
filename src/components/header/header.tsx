import { useGame } from '../../hooks/useGame'
import './header.css'

export const Header = () => {
  const { score, bestScore, restartGame } = useGame()

  return (
    <header className='boxCol'>
      <div className='presentationHeader'>
        <h1>2048</h1>

        <div className='boxRow scoreTable'>
          <span>
            <h2>PUNTAJE</h2>
            <p>{score}</p>
          </span>

          <span>
            <h2>MEJOR PUNTAJE</h2>
            <p>{bestScore}</p>
          </span>
        </div>
      </div>

      <div className='boxRow gameOptions'>
        <p>
          Junta cuadros, llega a<strong> 2048!</strong>
          <br />
          <a
            href='#como-jugar'
            className=''
          >
            Como jugar →
          </a>
        </p>

        <button onClick={restartGame}>NUEVO JUEGO</button>
      </div>
    </header>
  )
}
