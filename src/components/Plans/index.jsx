import './styles.css';
import { PlanCardRecomendado } from './PlanCardRecomendado';

function Plans() {
  const planContent = [
    {
      title: 'Pago Anual',
      price: '99',
      description: '* Ahorras $129 comparado al plan mensual.',
    },
  ];

  return (
    <section className="plans-container">
      <div className='plans-container__title'>
        <h2>Escoge el plan que mejor se ajuste a ti.</h2>
        <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
      </div>
      <section className="plans-container__slice">
        <PlanCardRecomendado
          title={planContent[0].title}
          price={planContent[0].price}
          description={planContent[0].description}
        />
      </section>
    </section>
  );
}

export { Plans };
