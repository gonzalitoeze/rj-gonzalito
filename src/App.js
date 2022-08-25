
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import foto from './images/bannerimg.jpeg';
import { Contador } from './components/Contador/Contador';
import Stock from './components/Stock/Stock';
import { StockContainer } from './components/Stock/StockContainer'; 



function App() {
  return (
    <div>
      <NavBar/>

      <Header/>

      <section>
        <img src={foto} class='banner' alt=''/>
      </section>

      <StockContainer/>

      <Contador/>

      <Footer/>
    </div>
  );
}

export default App;
