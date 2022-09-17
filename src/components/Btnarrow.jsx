import React from 'react'

const Btnarrow = ({getRandomAll,randomColor}) => {
    return (
        <button
            style={{ backgroundColor: randomColor }}
            onClick={getRandomAll}
        >&#62;</button>
    )

}

export default Btnarrow