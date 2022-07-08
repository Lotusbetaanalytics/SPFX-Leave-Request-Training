import * as React from 'react'

const Header = ({ title }) => {
    return (
        <div className='header'>
            <div className='title'>
                {title}
            </div>
            <div className='profile'>
                <div className='dp'></div>
                <div className='name'>
                    <h4>John Doe</h4>
                    <p>hohn@yahoo.com</p>
                </div>
            </div>
        </div>
    )
}

export default Header