import React from 'react'
import { ThemeColors } from '/ThemeColorContext'


function ThemeToggler(props) {
    // const [changeTheme, setChangeTheme] = React.useState(false);
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     setChangeTheme(!changeTheme)
    // }
    return (
        <div className="bgSwticher">
            <button
            className={props.bgColor === ThemeColors.background ? "active" : ""}
            onClick={() => {
                props.handleTheme(ThemeColors.background)
            }}>
                S
            </button>
        </div>
    )
}

export default ThemeToggler;