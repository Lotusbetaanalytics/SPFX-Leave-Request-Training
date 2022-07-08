import * as React from 'react'
import Header from '../containers/Header'
import Navigation from '../containers/Navigation'

const Leave = () => {
    return (
        <div className='mainContainer'>
            <Navigation />
            <div className='contentsRight'>
                <Header title="Leave Request" />
            </div>
        </div>
    )
}

export default Leave