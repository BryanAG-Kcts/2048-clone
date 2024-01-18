import { Link } from 'wouter'
import './page404.css'

export const Page404 = () => {
  return (
    <section className='boxCol fullyBox page404'>
      <h1>404</h1>
      <p>Page not found</p>
      <p>La página que estás buscando no existe!!</p>
      <Link href='/'>Regresar a jugar</Link>
    </section>
  )
}
