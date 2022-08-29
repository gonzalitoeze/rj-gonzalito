import React from 'react'
import { Button } from 'reactstrap'

const ItemCount = () => {
    return (
        <div>
            <p>Amount:</p>
            <Button> - </Button>
            <span style={{marginLeft: "5%", marginRight: "5%"}}>0</span>
            <Button> + </Button>
            <Button style={{width: "100%" , marginTop: "10%"}}> Add to cart </Button>
        </div>
    )
}

export default ItemCount