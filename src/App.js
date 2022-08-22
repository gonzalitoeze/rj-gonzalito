
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';
import { Button } from 'react-bootstrap';
import { Footer } from './components/Footer/Footer';




function App() {
  return (
    <div>
      <NavBar/>

      <Header/>
      <Button>Click</Button>
      <Footer/>
    </div>
  );
}

export default App;
