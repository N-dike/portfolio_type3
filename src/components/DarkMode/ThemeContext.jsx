import React, { createContext, useState } from 'react';

const ThemeColors = {
    background: "#fff4ed",
    textColour: "#330024",
    textAlternate: "#0F154D",
    navbarBackground: "#7884F0"
};

const ThemeColorContext = createContext({
    color: ThemeColors.background,
    changeColor: (color) => {},
});

export default function ThemeColorWrapper(props) {
    const [color, setColor] = useState(ThemeColors.background);

    function changeColor(color) {
        setColor(color)
    }
    return (
        <ThemeColorContext.Provider
        value = {{color: color, changeColor: changeColor}}>
            {props.children}
        </ThemeColorContext.Provider>
    )
}