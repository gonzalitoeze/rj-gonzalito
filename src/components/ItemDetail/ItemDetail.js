import { useState } from "react";
import Contador from "../Contador/Contador";
import Select from "../Select/Select";




const ItemDetail= ({item}) => {

    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(item.talles[0].value)
    const [color, setColor] = useState(item.colores[0].value)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            talle,
            cantidad,
            color
        }

        console.log(itemToCart)
    }

    return (
        <div className="container my-5">
            <img src={item.img} alt=''/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.categoria}</p>
            <h4>{item.precio}</h4>
            <hr/>
            <Select options={item.talles} onSelect={setTalle}/>
            <Select options={item.colores} onSelect={setColor}/>
            <hr/>

            <Contador 
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
            />

        </div>
    )
}
export default ItemDetail