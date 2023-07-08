import './styles.css';

function PlanCard({ title, price, description }) {
  return (
    <div className="plan-card-container">
      <div className='plan-card-container__payment'>
        <h3>{title}</h3>
        <div className='plan-card-container__payment-price'>
          <p>$</p><span>{price}</span>
        </div>
      </div>
      <p className='plan-card-container__description'>{description}</p>
      <button className='plan-card-container__button'>
        Escoger este <span></span>
      </button>
    </div>
  );
}

export { PlanCard };
