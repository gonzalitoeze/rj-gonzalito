import { Contador } from "../Contador/Contador";





const Stock = ( {producto} ) => {

    const {nombre, descripcion, imagen, precio, cantidad} = producto

    return (
        <div className="card">
            <div className="card-body">
                <h4>Nombre: {nombre}</h4>
                <p>Descripcion: {descripcion}</p>
                <p>Imagen: {imagen}</p>
                <p>Precio: {precio}</p>
                <p>Cantidad: {cantidad} <Contador/></p>
            </div>
        </div>
    )
}

export default Stock 