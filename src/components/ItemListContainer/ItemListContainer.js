import './ItemListContainer.scss'
import { useEffect, useState } from "react"
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()
    console.log(categoriaId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if (!categoriaId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.categoria === categoriaId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoriaId])

    /* const getData = () => {
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
    } */

    /* useEffect(() => {
        getData()
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }, []) */

    return (
        <div className='itemlistcontainer'>
            <div className="container">
                <div className="row">
                    {
                        loading 
                        ? <h2>Cargando...</h2>
                        : <ItemList productos={productos}/>
                        /* productos.map((productos) => (
                            <div className="col-md-3">
                            <ItemList key={productos.id} nombre={productos.nombre} descripcion={productos.descripcion} imagen={productos.imagen} precio={productos.precio} stock={productos.stock}/>
                            </div>
                        )) */
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer