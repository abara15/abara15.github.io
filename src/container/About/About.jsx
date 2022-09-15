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
                        <p className="content-text">Hi, my name is Anthony! I am a Development Operations Engineer based in Sydney, AU. I study Software Engineering @ the <a href="https://www.unsw.edu.au/" target="_blank" rel="noreferrer">University of New South Wales</a>, and work as a Development Operations Engineer @ <a href="https://www.erm.com/" target="_blank" rel="noreferrer">Environmental Resources Management (ERM)</a>.</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="content-text">I work in Azure DevOps developing CI/CD processes, and supporting and building pipelines and release pipelines for all the components related to infrastructure. Additionally, I assist in the maintenance and operation of company infrastructure and resources hosted on Microsoft Azure.</p>
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