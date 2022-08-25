import './Header.scss';


export const Header = ({nombre="Profesor"}) => {

    return (
        
        <div className='header'>
            <div className='Saludo'>
                <h3>Welcome {nombre} to</h3>
            </div>
            <h1>UKE BJJ</h1>
            <h4>The gentle art</h4>
        </div>
    );
}
