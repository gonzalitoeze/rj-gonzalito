import { Contador } from "../Contador/Contador";




const Item = ({producto}) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={producto.imagen} alt=""/>
                <h4>{producto.nombre}</h4>
                <p>{producto.descripcion}</p>
                <h5>${producto.precio}</h5>
                <p>Cantidad: {producto.cantidad} <Contador/></p>
                <small>Stock disponible:{producto.stock}</small>
                <a href="#!" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    )
}
 export default Item