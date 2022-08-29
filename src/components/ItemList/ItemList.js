import React from 'react';
import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import ItemCount from '../ItemCount/ItemCount';


 const ItemList = (props) => {

    const {nombre, descripcion, imagen, precio, stock} = props;
    return (
        <>
        
            <Card
                className="my-2"
                style={{
                    width: '18rem'
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
                    <ItemCount stock={stock}/>
                </CardBody>
                <CardFooter>
                    Stock: {stock}
                </CardFooter>
            </Card>
        </>
    )
}

export default ItemList