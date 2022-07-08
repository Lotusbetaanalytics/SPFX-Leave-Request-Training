import * as React from 'react'

const Notification = ({ Icon, text }) => {
    return (
        <div className='notification'>
            <div className='icon'>
                <Icon />
            </div>
            <div className='text'>
                {text}
            </div>
            <div className='indicator'></div>
        </div>
    )
}

export default Notification