import './styles.css';
import { ProductCard } from '../ProductCard';
import clockImg from '../../assets/icons/clock.svg';
import eye from '../../assets/icons/eye.svg';
import dollar from '../../assets/icons/dollar-sign.svg';
import checkCircle from '../../assets/icons/check-circle.svg';

function Products() {

  return (
    <section className="products-container">
      <div className="products-container__title">
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
      </div>
      <div className="products-container__cards-container">
      </div>
      <div className='products-container__base'></div>
    </section>
  );
}

export { Products };
