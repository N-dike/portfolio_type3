import React, {useState} from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const MobileNavbar = () => {
    const [clicked, setClicked] = useState(false);
    console.log(clicked);
    if(clicked === true) {
        document.body.style.overflow = "hidden";
    }else {
        document.body.style.overflow = "";
    }
    return (
        <div className="navbar">
            <div className="sidebar">
                <ul className="navbar-nav">
                    <Link duration={500} offset={-200} to="/" smooth={true} style={{textDecoration: "none"}}>
                        <li className="navbar-link">HOME</li>
                    </Link>
                    <Link duration={500} offset={-70} to="/about" smooth={true} style={{textDecoration: "none"}}>
                        <li className="navbar-link">ABOUT</li>
                    </Link>
                    <Link duration={500} offset={-70} to="/portfolio" smooth={true} style={{textDecoration: "none"}}>
                        <li className="navbar-link">PROJECTS</li>
                    </Link>
                    <Link duration={500} offset={-70} to="/contacts" smooth={true} style={{textDecoration: "none"}}>
                        <li className="navbar-link">CONTACT ME</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavbar