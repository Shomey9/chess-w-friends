import './Tile.css'
import React from 'react'

function Tile({ sum, key }) {

    let color
    if (sum % 2 === 0) {

        color = "black-tile"

    } else {

        color = "white-tile"

    }

    console.log("key: :", key)

    return(
        
        <div className={color} />

    )

}

export default Tile
