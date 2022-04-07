import React from 'react';
import './Chessboard.css';

import Tile from '../tile/Tile.js'

function Chessboard() {

    const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
    const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]
    let board = [];
    for (let j = verticalAxis.length-1; j >= 0; j--) {
        
        for (let i = 0; i < horizontalAxis.length; i++) {

            console.log("j: ", j)
            let k = i + j 
            board.push(

                <Tile sum={k} key={board.length} />

            )

            // if (k % 2 === 0) {

            //     board.push(
                    
            //         <Tile />

            //     )

            // } else {

            //     board.push(

            //         <Tile />

            //     )

            // }

        }

    }

    return(

        <div id="chessboard"> 

            {board}

        </div>

    )

}

export default Chessboard