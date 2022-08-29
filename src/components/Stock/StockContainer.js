import Stock from "./Stock"
import './StockContainer.scss'

export const StockContainer = () => {

    const stocks = [
        {
            nombre: 'Kingz - Gi - White',
            descripcion: 'Material RipStop',
            imagen: '../../images/kingzwhite2.webp',
            precio: 100,
            cantidad: ""
        },
        {
            nombre: 'Kingz - Gi - White',
            descripcion: 'Ultra Light',
            img: '../../images/kingzwhite2.webp',
            precio: 90,
            cantidad: ""
        },
        {
            nombre: 'Kingz - Gi - White',
            descripcion: 'Ultra Light',
            img: "../../images/kingzwhite2.webp",
            precio: 90,
            cantidad: ""
        }
    ]

    return (

        <div className="StockContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Stock producto={ stocks[0] }/>
                    </div>
                    <div className="col-md-4">
                        <Stock producto={ stocks[1] }/>
                    </div>
                    <div className="col-md-4">
                        <Stock producto={ stocks[2] }/>
                    </div>
                </div>
            </div>
        </div>

    )
}
