import { Board } from './board/board'
import { Dinamical } from './dinamical/dinamical'
import { Header } from './header/header'

export const Game2048 = () => {
  return (
    <>
      <Dinamical />
      <Header />
      <Board />
    </>
  )
}
