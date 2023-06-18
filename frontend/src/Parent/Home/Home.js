import React from 'react'
import './Home.css'
import TopInfo from './../../components/TopInfo/Top'
import Stats from './../../components/Stats/Stats'
import Courses from './../../components/Courses/Courses'

const Home = () => {
    return (
        <>
            <div className="home">
                <TopInfo />
                <Stats />
                <Courses />
            </div>
        </>
    )
}

export default Home
