import Item from '../Item/Item'



const ItemList = ( {productos = []} ) => {
    return (
        <div className='container my-5'>
            <h2 className='text white'>Hola</h2>
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>

    )
}
export default ItemList










/* import React from 'react';
import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import ItemCount from '../ItemCount/ItemCount';


 const ItemList = (props) => {

    const {nombre, descripcion, imagen, precio, stock} = props;

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

export default ItemList */