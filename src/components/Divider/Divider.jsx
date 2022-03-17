import React from "react";
import { motion } from 'framer-motion';
import './Divider.scss';

const Divider = () => {
    return (
        <motion.div className="section-divider-main">
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="divider"
            />
        </motion.div>
    );
}

export default Divider;