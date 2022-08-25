import Stock from "./Stock"


export const StockContainer = () => {

    const stocks = [
        {
            nombre: 'Kingz - Gi - White',
            descripcion: 'Material RipStop',
            img: "../images/kingzwhite.webp",
            precio: 100,
            cantidad: 1
        },
        {
            nombre: 'Kingz - Gi - White',
            descripcion: 'Ultra Light',
            img: "../images/kingzwhite2.webp",
            precio: 90,
            cantidad: 1
        }
    ]

    return (
        <div>
            <Stock producto={ stocks[0] }/>
            <Stock producto={ stocks[1] }/>
        </div>
    )
}
