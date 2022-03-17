import React from "react";
import { motion } from 'framer-motion';
import { BsDownload } from "react-icons/bs";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import './About.scss';

const About = () => {
    const saveFile = () => {
        alert("Coming Soon!");
    }

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
                        <p className="content-text">Hi, my name is Anthony! I am 21yo and am a Software Engineer based in Sydney, AU. I'm currently studying Software Engineering @ the University of New South Wales, and I work as a Software Engineer @ ERM Australia.</p>
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
                        <p className="content-text">Outside of the world of coding, I'm interested in sports, food, reading, history, film, and music!</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__about-info-btn"
                    >
                        <button type="button" onClick={saveFile} className="p-text">
                            <div>
                                <BsDownload />
                            </div>
                            <span>CV</span>
                        </button>
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