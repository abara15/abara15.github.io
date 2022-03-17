import React from "react";
// import { AppWrap } from "../../wrapper";
import TypeAnimation from 'react-type-animation';
import './Header.scss';

const Header = () => {
    return (
        <div className="app__container app__header-section">
            <div className="header-animation">
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        'Developer...', 1500,
                        'Coder...', 1500,
                        'Engineer...', 1500,
                    ]}
                    wrapper="h1"
                    repeat={Infinity}
                />
            </div>
            <div className="header-scroll-btn">
                <a href="#about"><span></span></a>
            </div>
        </div>
    );
}

export default Header;