import * as React from 'react'
import { sp } from "@pnp/sp"


const Header = ({ title }) => {

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")


    React.useEffect(() => {
        sp.profiles.myProperties.get().then((response) => {
            setName(response.DisplayName)
            setEmail(response.Email)
        });
    }, [])





    return (
        <div className='header'>
            <div className='title'>
                {title}
            </div>
            <div className='profile'>
                <div className='dp'></div>
                <div className='name'>
                    <h4>{name}</h4>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default Header