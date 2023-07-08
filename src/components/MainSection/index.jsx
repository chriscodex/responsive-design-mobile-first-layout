import './styles.css';
import { Products } from '../Products';
import { Plans } from '../Plans';

function MainSection() {
  return (
    <main className="bg-off-white">
      <section className="main-exchange-container">
        <div className="main-exchange-container__backgroundImg"></div>
        <div className="main-exchange-container__title text-warm-black">
          <h2>Visibilizamos todas las tasas de cambio.</h2>
          <p className="text-warm-grey">
            Traemos toda la información de las tasas de cambio y las monedas más
            importantes del mundo
          </p>
        </div>
        <section className="main-exchange-container__tables">
          <div className="tableContainer">
            <h3>Monedas</h3>
            <section className="tableContainer__table">
              <div>
                <h4>Bitcoin</h4>
              </div>
              <div>
                <h5>
                  $1.96<span></span>
                </h5>
              </div>
              <div>
                <h4>Ethereum</h4>
              </div>
              <div>
                <h5>
                  $0.07<span></span>
                </h5>
              </div>
              <div>
                <h4>Ripple</h4>
              </div>
              <div>
                <h5>
                  $2.15<span></span>
                </h5>
              </div>
              <div>
                <h4>Stellar</h4>
              </div>
              <div>
                <h5>
                  $4.96<span></span>
                </h5>
              </div>
            </section>
            <div className="tableContainer__updateDate">
              <p>
                <span>Actualizado: </span>07 Julio 5:13
              </p>
            </div>
          </div>
        </section>
      </section>
      <Products />
      <Plans />
    </main>
  );
}

export { MainSection };
