import './styles.css';
import logoFooter from '../../assets/img/logo-footer.svg'

function Footer() {
  return (
    <footer className="footer-container">
      <div className='footer-container__social-media'>
        <a href="#">LinkedIn</a>
        <a href="#">Crunchbase</a>
        <a href="#">Hackernews</a>
      </div>
      <div className='footer-container__logo'>
        <img loading='lazy' src={logoFooter} alt="batatabit-logo" />
      </div>
    </footer>
  );
}

export { Footer };
