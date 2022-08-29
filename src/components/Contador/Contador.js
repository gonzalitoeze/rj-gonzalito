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
        <div className="container mb-2 text-start">
            <button onClick={handleRestar} className="btn btn-outline-secondary rounded-1">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary rounded-1">+</button>
        </div>
    )
}