
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Button } from 'react-bootstrap';



function App() {
  return (
    <div>
      <NavBar/>

      <Header/>
      <Button>Click</Button>
    </div>
  );
}

export default App;
