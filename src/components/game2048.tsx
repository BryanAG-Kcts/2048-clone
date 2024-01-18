import { Link } from 'wouter'

import { Board } from './board/board'
import { Dinamical } from './dinamical/dinamical'
import { Header } from './header/header'
import { Modal } from './modal/modal'
import { StartText } from './modal/startText'

export const Game2048 = () => {
  return (
    <>
      <section className='boxCol fullyBox'>
        <Modal>
          <StartText />
        </Modal>
        <Dinamical />
        <Header />
        <Board />
        <Link className='text-center' href='/score'>Ver puntajes</Link>
      </section>
      <article id='como-jugar' className='boxCol'>
        <p className='game-explanation'>
          <strong>Como jugar:</strong>
          <span>Usa tus <strong>flechas de dirección</strong></span>
          para mover las celdas. Las celdas con igual número
          <strong>se fusionan</strong> cuando se tocan. Sigue así hasta llegar a
          <strong>2048!</strong><br />
        </p>
        <a href='#to2048'>Empieza a jugar→</a>
      </article>
    </>
  )
}
