import './Header.scss';
import foto from '../../bannerimg.jpeg';


export const Header = () => {

    return (
        <div className='header'>
            <h4>Welcome to</h4>
            <h1>UKE BJJ</h1>
            <h4>The gentle art</h4>
            <section>
              <img src={foto} class='banner' alt=''/>
            </section>
        </div>
    );
}
