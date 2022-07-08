import * as React from 'react'
import { Link } from 'react-router-dom'
import { AiFillAppstore, AiFillCalendar, AiOutlineLogout } from "react-icons/ai"
import { BsBarChartFill } from "react-icons/bs"
const Navigation = () => {
    return (
        <div className='navigation'>

            {/* Profile */}
            <div className='profile'>
                <div className='dp'></div>
                <div className='name'>John Doe</div>
            </div>
            {/* End of Profile */}

            <div className='links'>
                <ul>
                    <li><Link to="/dashboard"><AiFillAppstore />Dashboard</Link></li>
                    <li><Link to="/leave"><AiFillCalendar />Leave</Link></li>
                    <li><Link to="/logs">< BsBarChartFill />Logs</Link></li>
                    <li><Link to="/"><AiOutlineLogout />Logout</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Navigation