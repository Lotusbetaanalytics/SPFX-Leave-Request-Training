import * as  React from 'react'
import Navigation from '../containers/Navigation'
import Header from '../containers/Header'
import Card from '../containers/Card'
import { AiFillBug, AiFillAndroid, AiFillAmazonSquare } from 'react-icons/ai'

const DashboardScreen = () => {
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
                    <div className='calendar'></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardScreen