import { Link } from 'wouter'
import { useGame } from '../../../hooks/useGame'
import './header.css'

export const Header = () => {
  const { bestScore } = useGame()

  return (
    <header className='scoreHeader'>
      <h1><Link href='/'>2048</Link></h1>

      <div className='scoreTable boxRow'>
        <span>
          <h2>MEJOR PUNTAJE</h2>
          <p>{bestScore}</p>
        </span>

        <span>
          <h2>USUARIO</h2>
          <input id='userScore' type='text' maxLength={10} placeholder='tu nombre' />
        </span>
      </div>
    </header>
  )
}
