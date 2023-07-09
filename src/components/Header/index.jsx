import './styles.css';
import logo from '../../assets/img/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className='header__title-container'>
        <h1 className='text-just-white'>La próxima revolución en el intercambio de criptomonedas.</h1>
        <p className='text-soft-orange'>
          Batabit te ayuda a navegar entre los diferentes precios y tendencias.
        </p>
        <a href="#plans-section" className='header__button bg-off-white text-black'>
          Conoce Nuestros Planes <span></span>
        </a>
      </div>
    </header>
  );
}

export { Header };
