import { useState } from "react"




export const Contador = () => {

    let [counter, setCounter] = useState(0)

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
    }

    return (
        <div className="container my-5">
            <h2>Contador</h2>
            <hr/>

            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
        </div>
    )
}