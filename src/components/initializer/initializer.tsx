import { useEffect } from 'react'
import { useGame } from '../../hooks/useGame'

export const Initializer = () => {
  const { getUsers } = useGame()

  useEffect(() => {
    getUsers()
  }, [getUsers])
  return (
    <></>
  )
}
