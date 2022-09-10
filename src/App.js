
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* import { Men } from './components/Men/Men';
import { Accesories } from './components/Accesories/Accesories'; */
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

        {/* <Route path='/man' element={<Men/>}/>
        <Route path='/woman' element={<Contact/>}/>
        <Route path='/accesories' element={<Accesories/>}/> */}
        <Route path='/Contact' element={<Contact/>}/>
        {/* <Route path='*' element={ <Navigate to="/"/>} /> */}
      </Routes> 
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
