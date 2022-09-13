import { useState } from "react"




const Contador = () => {

    let [max, counter, setCounter, handleAgregar] = useState(0)

    const handleSumar = () => {
        if (counter < max) {
            setCounter (counter + 1)
        }
    }

    const handleRestar = () => {
        if (counter > 1){
            setCounter(counter - 1)
        }
    }

    return (
        <div className="container mb-2 text-start">
            <button onClick={handleRestar} className="btn btn-outline-secondary rounded-1">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary rounded-1">+</button>
            <button onClick={handleAgregar} className="btn btn-success my-2">Add to cart</button>
        </div>
    )
}
export default Contador 