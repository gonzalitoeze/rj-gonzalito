/* import { Contador } from "../Contador/Contador";
 */


import React from 'react';
import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import ItemCount from '../ItemCount/ItemCount';


 const Item  = ( {productos} ) => {

    const {nombre, descripcion, imagen, precio, stock} = productos;

    const addToCart = (count) => {
        console.log (count, nombre, precio, "has been added")
    }

    return (
        <>
        
            <Card
                className="my-2"
                style={{
                    width: '100%'
                }}
            >
                <img src={imagen} alt="" />
                <CardBody>
                    <CardTitle tag="h5">
                        {nombre}
                    </CardTitle>
                    <CardText>
                        {descripcion}
                    </CardText>
                    <CardText>
                        ${precio}
                    </CardText>
                    <ItemCount stock={stock} addToCart={addToCart}/>
                </CardBody>
                <CardFooter>
                    Stock: {stock}
                </CardFooter>
            </Card>
        </>
    )
}

export default Item

/* const Item = ({producto}) => {
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
 export default Item */