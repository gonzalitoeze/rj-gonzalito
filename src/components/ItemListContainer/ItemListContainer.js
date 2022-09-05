import './ItemListContainer.scss'



import React, { useEffect } from "react";
import ItemList from "../ItemList/ItemList";

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
        nombre: 'Kingz - Gi - White',
        descripcion: 'Material RipStop for women',
        imagen: "./images/whitegirl.webp",
        precio: 100,
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
        nombre: 'Faixa Atama',
        descripcion: 'ATAMA Black belt made with high resistance material',
        imagen: "./images/faixapretaatama.jpg",
        precio: 15,
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
        nombre: 'VENUM Protector',
        descripcion: 'Bucal Protector for Martial Arts                                    ',
        imagen: "./images/bucalmma.webp",
        precio: 12,
        stock: 0
    },
]




export const ItemListContainer = () => {

    const getData = () => {
        const error = false;
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (!error) {
                    resolve(products)
                }else{
                    reject("Hubo un error")
                }
            }, 5000)
        }
        )
    }

    useEffect(() => {
        getData()
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className='itemlistcontainer'>
            <div className="container">
                <div className="row">
                    {
                        products.map((product) => (
                            <div className="col-md-4">
                            <ItemList key={product.id} nombre={product.nombre} descripcion={product.descripcion} imagen={product.imagen} precio={product.precio} stock={product.stock}/>
                            </div>
                        ))
                    }
                </div>
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