import { useEffect, useRef } from 'react'
import { useGame } from '../../hooks/useGame'
export const Dinamical = () => {
  const { moveUp, moveDown, moveLeft, moveRight } = useGame()

  const moves = useRef({
    ArrowUp: () => moveUp(),
    ArrowLeft: () => moveLeft(),
    ArrowRight: () => moveRight(),
    ArrowDown: () => moveDown()
  })

  type movesType = keyof typeof moves.current

  useEffect(() => {
    window.addEventListener('keydown', e => {
      const { key } = e

      if (key in moves.current) {
        e.preventDefault()
        moves.current[key as movesType]()
      }
    })
  }, [])

  return (
    <></>
  )
}
