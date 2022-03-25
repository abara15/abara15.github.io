import React, { useEffect, useState } from "react";
import Hamburger from 'hamburger-react';
import { FaGithub, FaTwitter, FaLinkedin, FaDev } from "react-icons/fa";
import { ScrollToTop } from "../../constants/";
import { SVGLogo } from "..";
import './Navbar.scss';

const Navbar = () => {
    // For hamburger menu
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setBurgerMenuOpen(!burgerMenuOpen);
    }


    //navbar scroll when active state
    const [activeNavbar, setActiveNavbar] = useState(false)

    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 200) {
            setActiveNavbar(true)
        } else {
            setActiveNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

    return (
        // <nav className="app__navbar">
        <nav className={activeNavbar ? "app__navbar app__navbar-bg-scroll" : "app__navbar .app__navbar-bg-normal"}>
            <div className="app__navbar-row">
                <div className="app__navbar-logo">
                    <button onClick={ScrollToTop}>
                        <SVGLogo />
                    </button>
                </div>
                <ul className="app__navbar-links">
                    {['about', 'skills', 'portfolio', 'contact'].map((item) => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                            <a href={`#${item}`}>
                                {item}
                                <div />
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="app__navbar-social">
                    <li className="app__flex p-text">
                        <a href="http://github.com/abara15" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li className="app__flex p-text">
                        <a href="https://au.linkedin.com/in/anthony-barakat" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
                <div className="app__navbar-mobile-icon">
                    <Hamburger onToggle={handleMenuClick} toggled={burgerMenuOpen} />
                </div>
            </div>
            {burgerMenuOpen
                ?
                <ul className="app__navbar-mobile-links">
                    {['about', 'skills', 'portfolio', 'contact'].map((item) => (
                        <li className="app__flex p-text app__navbar-mobile-link" key={`link-${item}`} onClick={handleMenuClick}>
                            <a href={`#${item}`}>
                                {item}
                                <div />
                            </a>
                        </li>
                    ))}
                    <li className="app__navbar-mobile-socials">
                        <a href="https://github.com/abara15" target="_blank" rel="noreferrer">
                            <div>
                                <FaGithub />
                            </div>
                        </a>
                        <a href="https://dev.to/abara15/" target="_blank" rel="noreferrer">
                            <div>
                                <FaDev />
                            </div>
                        </a>
                        <a href="https://au.linkedin.com/in/anthony-barakat" target="_blank" rel="noreferrer">
                            <div>
                                <FaLinkedin />
                            </div>
                        </a>
                        <a href="https://twitter.com/abara_15" target="_blank" rel="noreferrer">
                            <div>
                                <FaTwitter />
                            </div>
                        </a>
                    </li>
                </ul>
                :
                ""
            }
        </nav>
    );
}

export default Navbar;