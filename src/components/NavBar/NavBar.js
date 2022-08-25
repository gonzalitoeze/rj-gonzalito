import './NavBar.scss'; 

import  icono  from './icono.webp';


 export const NavBar = () => {
    return (
        <div className='NavBar'>
            <img src={icono} class="logo" alt="" />
            <div className='Nav'>
                <li><a href='men.js'>Men's</a></li>
                <li><a href='women.js'>Women's</a></li>
                <li><a href='accesories.js'>Accesories</a></li>
                <li><a href='contact.js'>Contact</a></li>
            </div>
        </div>
    )
}