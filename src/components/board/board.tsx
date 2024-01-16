import { useGame } from '../../hooks/useGame'
import { Box } from './box'
import './boardGame.css'

export const Board = () => {
  const { gridBoard } = useGame()

  return (
    <section className='boardGame'>
      {
        gridBoard.map(row => row.map((col, index) => <Box key={index}>{col}</Box>))
      }
    </section>
  )
}
