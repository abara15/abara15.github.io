import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { projects } from "../../content";
import './Work.scss';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Work = () => {
    const works = projects;
    const [filterWork, setFilterWork] = useState(projects);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);
    
        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
        
            if (item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.chips.includes(item)));
                // setFilterWork(works.filter((work) => work.category === item));
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text">Some of my recent <span style={{ color: "#6b17ff" }}>projects</span></h2>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__work-filter"
            >
                {['All', 'Web', 'Python', 'iOS', 'Other'].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </div>
                ))}
            </motion.div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__work-item app__flex"
                    key={index}
                >
                    <div className="app__work-img app__flex">
                        <img src={work.imgUrl} alt={work.name} />
                    </div>

                    <div className="app__work-content app__flex">
                        <div className="app__work-content-top">
                            <h4 className="bold-text">{work.name}</h4>
                            <div className="links">
                                <a href={work.repository} target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>
                                {work.link
                                    ?
                                    <a href={work.link} target="_blank" rel="noreferrer">
                                        <FaExternalLinkAlt />
                                    </a>
                                    :
                                    ""
                                }
                            </div>
                        </div>
                        <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
                        <div className="chips">
                            {work.chips.map((chip) => (
                                <div className="chip" key={chip}>{chip}</div>
                            ))}
                        </div>

                        <div className="app__work-tag app__flex">
                            <p className="p-text">{work.category}</p>
                        </div>
                    </div>
                </motion.div>
                ))}
            </motion.div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Work, 'app__work'),
    'portfolio'
);