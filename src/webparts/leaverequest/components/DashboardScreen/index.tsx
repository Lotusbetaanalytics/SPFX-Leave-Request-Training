import * as  React from 'react'
import Navigation from '../containers/Navigation'
import Header from '../containers/Header'
import Card from '../containers/Card'
import { AiFillBug, AiFillAndroid, AiFillAmazonSquare } from 'react-icons/ai'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Notification from '../containers/Notification'


const DashboardScreen = () => {
    const [value, onChange] = React.useState(new Date());
    return (
        <div className='mainContainer'>
            <Navigation />
            <div className='contentsRight'>
                <Header title="Dashboard" />
                <div className='contents'>
                    <div className='cardFlex'>
                        <Card Icon={AiFillBug} type="Absent Leave" days="10" remaining={2} color="lightRed" background="red" />
                        <Card Icon={AiFillAndroid} type="Annual Leave" days="15" remaining={12} color="lightGreen" background="green" />
                        <Card Icon={AiFillAmazonSquare} type="Maternal Leave" days="10" remaining={2} color="lightBlue" background="blue" />
                        <Card Icon={AiFillBug} type="Absent Leave" days="10" remaining={2} color="lightRed" background="red" />
                        <Card Icon={AiFillBug} type="Absent Leave" days="10" remaining={2} color="lightRed" background="red" />

                    </div>
                    <div className='calendar'>
                        <Calendar onChange={onChange} value={value} />

                        <div className='notifications'>
                            <h3>Notification</h3>

                            <Notification Icon={AiFillBug} text="Your annual leave has been approved" />
                            <Notification Icon={AiFillAndroid} text="Your Maternal leave has been approved" />
                            <Notification Icon={AiFillAmazonSquare} text="Your sick leave has been approved" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardScreen