import { useGame } from '../../../hooks/useGame'
import './table.css'

export const Table = () => {
  const { users } = useGame()

  return (
    <table className='boxCol'>
      <thead>
        <tr>
          <th>Username</th>
          <th className='text-right'>Best score</th>
        </tr>
      </thead>
      <tbody className='boxCol'>
        {
            users.map(user => {
              const { score, userName, id } = user
              return (
                <tr key={id}>
                  <td>{userName}</td>
                  <td className='text-right'>{score}</td>
                </tr>
              )
            })
        }
      </tbody>

    </table>
  )
}
