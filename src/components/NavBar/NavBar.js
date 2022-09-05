import './NavBar.scss'; 
import  icono  from './icono.webp';
import CartWidget from '../CartWidget/CartWidget';

 export const NavBar = () => {
    return (
        <div className='NavBar'>
            <a href='/'><img src={icono} class="logo" alt="" /></a>
            <div className='Nav'>
                <li><a href='Men'>Men's</a></li>
                <li><a href='Women'>Women's</a></li>
                <li><a href='Accesories'>Accesories</a></li>
                <li><a href='Contact'>Contact</a></li>
                <li><CartWidget/></li>
            </div>
        </div>
    )
}