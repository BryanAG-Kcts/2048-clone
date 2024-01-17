import { useGame } from '../../hooks/useGame'
import { Box } from './box'
import './boardGame.css'
import './colors.css'
import { GameOver } from '../gameOver/gameOver'

export const Board = () => {
  const { gridBoard } = useGame()

  return (
    <section className='boardGame'>
      {
        gridBoard.map(row => row.map((col, index) => <Box key={index}>{col}</Box>))
      }
      <GameOver />
    </section>
  )
}
