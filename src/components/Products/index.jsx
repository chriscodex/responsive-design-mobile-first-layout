import './styles.css';
import { ProductCard } from '../ProductCard';
import clockImg from '../../assets/icons/clock.svg';
import eye from '../../assets/icons/eye.svg';
import dollar from '../../assets/icons/dollar-sign.svg';
import checkCircle from '../../assets/icons/check-circle.svg';

function Products() {
  const cardContent = [
    {
      title: 'Tiempo real',
      description:
        'Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.',
      image: clockImg,
    },
    {
      title: 'No hay tasas escondidas',
      description:
        'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.',
      image: eye,
    },
    {
      title: 'Compara monedas',
      description:
        'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.',
      image: dollar,
    },
    {
      title: 'Información confiable',
      description:
        'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.',
      image: checkCircle,
    },
  ];

  return (
    <section className="products-container">
      <div className="products-container__title">
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
      </div>
      <div className="products-container__cards-container">
        {cardContent.map((card, index) => (
          <ProductCard
            key={index}
            image={cardContent[index].image}
            title={cardContent[index].title}
            description={cardContent[index].description}
          />
        ))}
      </div>
      <div className="products-container__base"></div>
      <div className='products-container__baseImg'>
        <h2>Conócelo hoy.</h2>
      </div>
    </section>
  );
}

export { Products };
