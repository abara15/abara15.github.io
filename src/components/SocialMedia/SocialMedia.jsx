import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './SocialMedia.scss';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://github.com/abara15" target="_blank" rel="noreferrer">
                <div>
                    <FaGithub />
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
        </div>
    );
}

export default SocialMedia;