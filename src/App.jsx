import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainSection } from './components/MainSection';
import { Products } from './components/Products';

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <Products />
      <Footer />
    </>
  );
}

export default App;
