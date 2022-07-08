import * as React from 'react'
import { Link } from 'react-router-dom'
import { AiFillAppstore, AiFillCalendar, AiOutlineLogout } from "react-icons/ai"
import { BsBarChartFill } from "react-icons/bs"
import { sp } from '@pnp/sp'
const Navigation = () => {


    const [name, setName] = React.useState("")
    const [photo, setPhoto] = React.useState("")

    React.useEffect(() => {
        sp.profiles.myProperties.get().then((response) => {
            setName(response.DisplayName)
            setPhoto(response.PictureUrl)
        });
    }, [])
    return (
        <div className='navigation'>

            {/* Profile */}
            <div className='profile'>
                <div className='dp'>
                    <img src={photo} alt={name} />
                </div>
                <div className='name'>{name}</div>
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