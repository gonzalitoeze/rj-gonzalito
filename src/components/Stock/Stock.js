const Stock = ( {producto} ) => {

    const {nombre, descripcion, imagen, precio, cantidad} = producto

    return (
        <div>
            <h4>Nombre: {nombre}</h4>
            <p>Descripcion: {descripcion}</p>
            <p>Imagen: {imagen}</p>
            <p>Precio: {precio}</p>
            <p>Cantidad: {cantidad}</p>
        </div>
    )
}

export default Stock 