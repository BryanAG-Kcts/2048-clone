import { useGame } from '../../hooks/useGame'
import { Box } from './box'
import './boardGame.css'
import './colors.css'
import { GameOver } from '../gameOver/gameOver'
import { useEffect, useRef } from 'react'

export const Board = () => {
  const { gridBoard } = useGame()
  const { moveUp, moveDown, moveLeft, moveRight } = useGame()

  const moves = useRef({
    ArrowUp: () => moveUp(),
    ArrowLeft: () => moveLeft(),
    ArrowRight: () => moveRight(),
    ArrowDown: () => moveDown()
  })

  const gameBoard = useRef<HTMLDivElement>(null)

  type movesType = keyof typeof moves.current

  useEffect(() => {
    let startX = 0
    let startY = 0

    window.addEventListener('keydown', e => {
      const { key } = e

      if (key in moves.current) {
        e.preventDefault()
        moves.current[key as movesType]()
      }
    })

    gameBoard.current?.addEventListener('touchstart', e => {
      const { touches } = e
      e.preventDefault()
      startX = touches[0].clientX
      startY = touches[0].clientY
    }, { passive: false })

    gameBoard.current?.addEventListener('touchmove', e => {
      const { touches } = e
      const endX = touches[0].clientX
      const endY = touches[0].clientY

      const diffX = endX - startX
      const diffY = endY - startY

      const greatMove = Math.abs(diffX) > Math.abs(diffY)
      const isMoveRight = diffX > 0
      const isMoveDown = diffY > 0

      if (greatMove) {
        if (isMoveRight) {
          moves.current.ArrowRight()
          return
        }

        moves.current.ArrowLeft()
        return
      }

      if (isMoveDown) {
        moves.current.ArrowDown()
        return
      }

      moves.current.ArrowUp()
    }, { passive: false })
  }, [])

  return (
    <section ref={gameBoard} className='boardGame'>
      {
        gridBoard.map(row => row.map((col, index) => <Box key={index}>{col}</Box>))
      }
      <GameOver />
    </section>
  )
}
