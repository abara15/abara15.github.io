import React from "react";
import './NavigationDots.scss';

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {['about', 'skills', 'portfolio', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={ active === item ? { backgroundColor: "#6b17ff" } : {} }
                > </a>
            ))}
        </div>
    );
}

export default NavigationDots;