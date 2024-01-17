export const StartText = () => {
  const closeModal = () => {
    const dialog = document.querySelector('#modal')
    dialog?.remove()
  }

  return (
    <article className='boxCol modalStart'>
      <h2>2048</h2>
      <p>
        Este juego es una recreación del maravilloso juego de <a href='http://gabrielecirulli.com' target='_blank' rel='noreferrer'>Gabriele Cirulli.</a> <strong>2048</strong> por lo que no recibo ningun crédito y no intento pasar esta propiedad como mia.
      </p>

      <button onClick={closeModal}>
        Entendido!
      </button>
    </article>
  )
}
