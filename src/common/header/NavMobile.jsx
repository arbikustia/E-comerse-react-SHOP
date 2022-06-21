import "./Header.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'
import { AiOutlineHome } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineStorefront, MdOutlineSettings } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useState } from "react"
import classNames from "classnames"


const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleClick = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
        console.log("active")
    }

    return (
        <div>
            <button className="toggle-btn bg-transparent" onClick={toggleClick} ><GiHamburgerMenu /></button>
            <div className={classNames('mobile-nav-wraper',{'mobile-nav-wraper-active' : isOpen })} >
                <div className="header-nav-mobile" >
                    <div className="nav-brand-mobile">SHOP</div>
                    <button className="btn-nav-close" onClick={toggleClick}><RiCloseLine/></button>
                </div>
                <ul className="mobile-nav">
                    <li className="nav-link-mobile">
                        <Link className=" text-dark text-decoration-none" to='/user'><BiUserCircle /> Profile</Link>
                    </li>
                    <li className="nav-link-mobile">
                        <Link className=" text-dark text-decoration-none" to='/'><AiOutlineHome /> Home</Link>
                    </li>
                    <li className="nav-link-mobile">
                        <Link className="text-dark text-decoration-none" to='/user'><IoMdNotificationsOutline /> Notification</Link>
                    </li>
                    <li className="nav-link-mobile">
                        <Link className="text-dark text-decoration-none" to='/pages'><MdOutlineStorefront /> My Store</Link>
                    </li>
                    <li className="nav-link-mobile">
                        <Link className="text-dark text-decoration-none" to='/vendor'><MdOutlineSettings /> Setting</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default NavMobile;