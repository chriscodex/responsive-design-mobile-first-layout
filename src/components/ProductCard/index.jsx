import './styles.css';

function ProductCard({ image, title, description }) {
  return (
    <div className="card-container">
      <img src={image} alt="clock" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export { ProductCard };
