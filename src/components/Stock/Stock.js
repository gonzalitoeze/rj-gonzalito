const Stock = ( {producto} ) => {

    const {nombre, descripcion, imagen, precio, cantidad} = producto

    return (
        <div>
            <h4>Nombre: {nombre}</h4>
            <p>descripcion: {descripcion}</p>
            <p>imagen: {imagen}</p>
            <p>precio: {precio}</p>
            <p>cantidad: {cantidad}</p>
        </div>
    )
}

export default Stock 