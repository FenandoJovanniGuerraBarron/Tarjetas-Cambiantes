import React from 'react'
import Btnarrow from "./Btnarrow"


const Quotebox = ({ randomQuote,randomColor,getRandomAll}) => {
const color={color : randomColor}

    return (

        <article style={color} className="card">
            <p className='card__quote'>{randomQuote.quote}</p>
            <h1 className='card__author'>{randomQuote.author}</h1>
            <Btnarrow
            getRandomAll={getRandomAll}
            randomColor={randomColor}
            />
        </article>

    )
}

export default Quotebox

