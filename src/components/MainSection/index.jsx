import './styles.css'

function MainSection() {
  return (
    <main className='bg-off-white'>
      <section className='main-exchange-container'>
        <div className='main-exchange-container__backgroundImg'></div>
        <div className='main-exchange-container__title text-warm-black'>
          <h2>Visibilizamos todas las tasas de cambio.</h2>
          <p className='text-warm-grey'>Traemos toda la información de las tasas de cambio y las monedas más importantes del mundo</p>
        </div>
        <section className='main-exchange-container__tables'>
          <div>

          </div>
        </section>
      </section>
      <section><p>s2</p></section>
      <section><p>s3</p></section>
      <section><p>s4</p></section>
    </main>
  )
}

export { MainSection }