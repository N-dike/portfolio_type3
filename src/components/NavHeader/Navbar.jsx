import './Header.css'
import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

  const  clickLogo = (e) => {
    e.preventDefault()
    alert("logoClicked")
    //TODO: 
  }
  return (
    <nav className = "container">
        <div className= "navbar">
            <ul className="navbar-nav">
              <Link duration={500} offset={-200} to="/" smooth={true} style={{textDecoration: "none"}}>
                <li className="navbar-link">HOME</li>
              </Link>
              <Link duration={500} offset={-70} to="/about" smooth={true} style={{textDecoration: "none"}}>
                <li className="navbar-link">ABOUT</li>
              </Link>
              <Link>
                <li className="navbar-link">PROJECTS</li>
              </Link>
              <Link duration={500} offset={-70} to="/contacts" smooth={true} style={{textDecoration: "none"}}>
                <li className="navbar-link">CONTACT ME</li>
              </Link>
            </ul>
        </div>
        <div className="logo">
          <img src="image/N.png" alt="" className="img" onClick={clickLogo} />
        </div>
    </nav>
  )
}

export default Navbar