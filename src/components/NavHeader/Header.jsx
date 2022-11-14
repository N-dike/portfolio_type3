import './Header.css'
import React from 'react'
import Typed from 'react-typed'
import Letters from '../Animated/Letters/Letters'

const Header = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  const nameArray = [' ', 'J', 'e', 'r', 'e', 'm', 'i', 'a', 'h']
  const titleArray = [ ' ', 'f', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  return (
    <header className= "header-container">
        <div className="header">
          <h1 className="greetings">
            <Typed strings={['HELLO AND WELCOME, ', 'TO MY PERSONAL WEBSPACE.']} 
            typeSpeed={50} 
            backDelay={2000} 
            fadeOut={true} 
            onComplete={(self)=> self.cursor.remove()}
            />
          </h1>
            <span className={letterClass}>I</span> 
            <span className={`${letterClass} _12`}> 'm</span>
            <Letters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <span className={`${letterClass} _12`}>,</span>
            <br />
            <span className={letterClass}>a</span>
            <Letters letterClass={letterClass}
            strArray={titleArray}
            idx={22} />
            <span className={letterClass}>
            and this is my web portfolio.
            </span>
        </div>
        <div className="image-div">
              <img src="/image/profile.png" alt="" className="profile" />
            </div>
      </header>
  )
}

export default Header