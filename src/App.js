
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import foto from './bannerimg.jpeg';
import { StockContainer } from './components/Stock/StockContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar/>

      <Header/>

      <section>
        <img src={foto} class='banner' alt=''/>
      </section>

      <StockContainer/>

      <ItemListContainer/>

      <Footer/>
    </div>
  );
}

export default App;
