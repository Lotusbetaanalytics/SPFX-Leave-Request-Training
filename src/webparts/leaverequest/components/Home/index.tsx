import * as  React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div className='container'>
            <h3>Welcome to the </h3>
            <h1>Leave Request Portal</h1>
            <div className='btnContainer'>
                <Link className='btn' to={`/dashboard`}>Proceed</Link>
            </div>

        </div>
    )
}

export default HomeScreen