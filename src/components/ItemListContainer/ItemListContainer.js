



import React from "react";
import ItemList from "../ItemList/ItemList";





export const ItemListContainer = () => {

    const products = [
        {
            id: 1,
            nombre: 'Kingz - Gi - White',
            descripcion: 'Material RipStop',
            imagen: "./img/kingzwhite.webp",
            precio: 100,
            stock: 10
        },
        {
            id: 2,
            nombre: 'Kingz - Gi - Black',
            descripcion: 'Material RipStop',
            imagen: "./img/kingzblack.webp",
            precio: 150,
            stock: 8
        },
        {
            id: 3,
            nombre: 'Kingz - Gi - Blue',
            descripcion: 'Material RipStop',
            imagen: "./img/kingzblue.webp",
            precio: 120,
            stock: 10
        },
        {
            id: 4,
            nombre: 'Kingz - Gi - Green',
            descripcion: 'Made with high resistance Ultra Light Weight Material 4.0',
            imagen: "./img/kingzgreen.webp",
            precio: 199,
            stock: 4
        },
        {
            id: 5,
            nombre: 'Kingz - Gi - Gray',
            descripcion: 'Made with high resistance Ultra Light Weight Material 4.0',
            imagen: "./img/kingzgrey.jpg",
            precio: 199,
            stock: 3
        },
        {
            id: 6,
            nombre: 'Kingz - Gi - White2',
            descripcion: 'Material RipStop',
            imagen: "./img/kingzwhite.webp",
            precio: 170,
            stock: 0
        },
    ]


    return (
        <div className="container">
        <div className="row">
            {
                products.map(product => (
                    <div className="col-md-4">
                    <ItemList key={product.id} nombre={product.nombre} descripcion={product.descripcion} imagen={product.imagen} precio={product.precio} stock={product.stock}/>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default ItemListContainer





/* import { useEffect } from "react"
import { useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos ()
        .then( (res) => {
            setProductos(res)
        })
        .catch( (error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("fin del proceso")
        })
    }, [])
    
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

 */