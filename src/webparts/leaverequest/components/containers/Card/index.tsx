import * as React from 'react'

const Card = ({ Icon, type, days, remaining, color, background }) => {
    return (
        <div className='card'>
            <div className='cardTop'>
                <div className={`icon ${color}`}>
                    <Icon />
                </div>
                <div className='text'>
                    <p>{type}</p>
                    <h3>{days}</h3>
                </div>
            </div>
            <div className={`cardBottom ${background}`}>{remaining} Days Left</div>
        </div>
    )
}

export default Card