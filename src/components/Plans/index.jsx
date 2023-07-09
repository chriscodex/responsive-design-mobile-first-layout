import './styles.css';
import { PlanCardRecomendado } from './PlanCardRecomendado';
import { PlanCard } from './PlanCard';

function Plans() {
  const planContent = [
    {
      title: 'Pago Mensual',
      price: '19',
      description: 'Plan Básico.',
    },
    {
      title: 'Pago Anual',
      price: '99',
      description: '* Ahorras $129 comparado al plan mensual.',
    },
    {
      title: 'De por vida',
      price: '199',
      description: 'Plan Ilimitado.',
    },
  ];

  return (
    <section id='plans-section' className="plans-container">
      <div className="plans-container__title">
        <h2>Escoge el plan que mejor se ajuste a ti.</h2>
        <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
      </div>
      <section className="plans-container__slide">
        <div className='plans-container__plan-card'>
          <PlanCard
            title={planContent[0].title}
            price={planContent[0].price}
            description={planContent[0].description}
          />
        </div>
        <PlanCardRecomendado
          title={planContent[1].title}
          price={planContent[1].price}
          description={planContent[1].description}
        />
        <div className='plans-container__plan-card'>
          <PlanCard
            title={planContent[2].title}
            price={planContent[2].price}
            description={planContent[2].description}
          />
        </div>
      </section>
    </section>
  );
}

export { Plans };
