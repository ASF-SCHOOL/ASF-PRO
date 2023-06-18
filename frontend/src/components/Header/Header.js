import React from 'react'
import './Header.css'
import ASF from './../../Images/ASF2.png'
import { RiSearch2Fill } from 'react-icons/ri'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom"
const Header = () => {

    const user = {
        color: "black",
        fontSize: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "50px",
        padding: ".4rem",
    }
    return (
        <>
            <header className='H-Navigation'>
                <div className="nav">
                    <nav className='setnav'>
                        <ul className='headerNav-ul1'>
                            <li>
                                <Link to='/login' className='set'><span>About</span></Link>
                            </li>
                            <li>
                                <Link to='/login' className='set'><span>Consultation</span></Link>
                            </li>
                            <li>
                                <Link to='/login' className='set'><span>FAQ</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="menu">
                    <Link to='/'>
                        <div className="Logo">
                            <img src={ASF} alt="ASF" />
                        </div>
                    </Link>
                </div>

                <nav className="headerNav">
                    <ul className='headerNav-ul'>
                        <li>
                            <Link to='/login' className='Contactlink'><span>Courses</span></Link>
                        </li>
                        <li>
                            <Link to='/register' className='linkTo'>Sign In</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
