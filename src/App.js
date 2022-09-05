
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
/* import { StockContainer } from './components/Stock/StockContainer'; */
/* import { ItemDetail } from './components/ItemDetail/ItemDetail' */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Men } from './components/Men/Men';
import { Accesories } from './components/Accesories/Accesories';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>

      <Routes>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Contact/>}/>
        <Route path='/Accesories' element={<Accesories/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      
      {/* <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
      </Routes> */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
