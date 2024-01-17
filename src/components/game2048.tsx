import { Board } from './board/board'
import { Dinamical } from './dinamical/dinamical'
import { Header } from './header/header'
import { Modal } from './modal/modal'
import { StartText } from './modal/startText'

export const Game2048 = () => {
  return (
    <>
      <Modal>
        <StartText />
      </Modal>
      <Dinamical />
      <Header />
      <Board />
    </>
  )
}
