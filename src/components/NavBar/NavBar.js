
import './NavBar.scss'; 
import  icono  from './icono.webp';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <div className='NavBar'>
            <Link to='/'><img src={icono} className="logo" alt="" /></Link>
            <div className='Nav'>
                <li><Link to='/productos/man'>Men's</Link></li>
                <li><Link to='/productos/woman'>Women's</Link></li>
                <li><Link to='/productos/nogi'>Gi/NoGi</Link></li>
                <li><Link to='/productos/accesories'>Accesories</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><CartWidget/></li>
            </div>
        </div>
    )
}