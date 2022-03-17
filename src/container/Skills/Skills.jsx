import React from "react";
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from "../../wrapper";
import { skills, experiences } from "../../content";
import './Skills.scss';

const Skills = () => {
    return (
        <>
            <h2 className="head-text">My <span style={{ color: "#6b17ff" }}>skills</span> & <span style={{ color: "#6b17ff" }}>experience</span></h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.tag}
                        >
                            <div className="app__flex">
                                <img src={skill.icon} alt={skill.tag} />
                            </div>
                            <p className="p-text">{skill.tag}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.title}
                        >
                            <div className="app__skills-exp-icon">
                                {experience.icon}
                            </div>
                            <motion.div className="app__skills-exp-works">
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="app__skills-exp-work"
                                    data-tip
                                    data-for={experience.title}
                                    key={experience.title}
                                >
                                    <p className="app__skills-exp-year-bold-text">{experience.year}</p>
                                    <h4 className="bold-text">{experience.title}</h4>
                                    <p className="p-text">{experience.institution}</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills'
);