import './styles.css';
import { PlanCard } from '../PlanCard';

function PlanCardRecomendado({ title, price, description }) {
  return (
    <article className="plan-card-recomendado__container">
      <p className="plan-card-recomendado__suggest">Recomendado</p>
      <PlanCard title={title} price={price} description={description} />
    </article>
  );
}

export { PlanCardRecomendado };
