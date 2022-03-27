import React from "react";
import { motion } from 'framer-motion';
import { BsDownload } from "react-icons/bs";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images, resumePDF } from "../../constants";
import './About.scss';

const About = () => {
    return (
        <>
            <h2 className="head-text">A little bit <span style={{ color: "#6b17ff" }}>about me</span></h2>
            <div className="app__about-container">
                <motion.div className="app__about-image">
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__flex"
                    >
                        <img src={images.avatar} alt="Avatar" />
                    </motion.div>
                </motion.div>
                <motion.div className="app__about-info">
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="content-text">Hi, my name is Anthony! I am 21yo and am a Software Engineer based in Sydney, AU. I study Software Engineering @ the <a href="https://www.unsw.edu.au/" target="_blank" rel="noreferrer">University of New South Wales</a>, and work as a Software Engineer @ <a href="https://www.erm.com/" target="_blank" rel="noreferrer">ERM Australia</a>.</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="content-text">At my job, I mainly work in infrastructure development and a bit of app development. However, I'm really interested in Front-End Development and web-based development. I'm also interested in cyber security and the blockchain.</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="content-text">Outside of the world of coding, I'm interested in sports, food, reading, history, movies, and music!</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__about-info-btn"
                    >
                        <a href={resumePDF} target="_blank" rel="noreferrer" className="p-text">
                            <div>
                                <BsDownload />
                            </div>
                            <span>CV</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about'
);