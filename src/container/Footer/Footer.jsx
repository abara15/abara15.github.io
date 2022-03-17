import React, { useState } from "react";
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { name, email, message } = formData;

    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        validateForm(name, value);
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        if (validateSubmission()) {
            // No errors, so continue with submission
            setLoading(true);

            const serviceId = 'service_0wayixo';
            const templateId = 'template_d5syorc';
            const userId = 'dqX0-_aRmPiDGQrVF';
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then((response) => {
                    console.log(response);
                    setTimeout(function(){
                        setLoading(false);
                        setIsFormSubmitted(true);
                    }, 1500);
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                    setIsFormSubmitted(false);
                    setErrorName(false);
                    setErrorEmail(false);
                    setErrorMessage(false);
                    setFormData({ name: '', email: '', message: '' });
                    alert("Please contact me directly if there is an issue with the contact form!");
                });
            
        }

        // Otherwise form is invalid - actions taken in validateSubmission()
    }

    const validateForm = (inputName, inputValue) => {
        switch (inputName) {
            case "name":
                // Set error if the input value is null or empty
                if (inputValue == null || inputValue === "") setErrorName(true);
                else setErrorName(false);
                break;

            case "email":
                // Set error if the input value does not match an email format
                let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!inputValue.match(regexEmail)) setErrorEmail(true);
                else setErrorEmail(false);
                break;

            case "message":
                // Set error if the input value is null or empty
                if (inputValue == null || inputValue === "") setErrorMessage(true);
                else setErrorMessage(false);
                break;

            default:
                break;
        }
    }

    const validateSubmission = () => {
        if (errorName === true || errorEmail === true || errorMessage === true) {
            // Won't submit form and will raise an alert if there is an outstanding error
            alert("Please enter valid data in all fields.");
            setErrorName(false);
            setErrorEmail(false);
            setErrorMessage(false);
            setFormData({ name: '', email: '', message: '' });
            // Return false so form doesn't submit
            return false;
        }

        if (name === '' || email === '' || message === '') {
            alert("Please fill out all fields.");
            setErrorName(false);
            setErrorEmail(false);
            setErrorMessage(false);
            setFormData({ name: '', email: '', message: '' });
            // Return false so form doesn't submit
            return false;
        }
        // Return true because form is valid, so submission can go ahead
        return true;
    }

    return (
        <>
            <h2 className="head-text">Get in <span style={{ color: "#6b17ff" }}>touch</span> & let's <span style={{ color: "#6b17ff" }}>chat</span></h2>
            <div className="app__footer-cards">
                <motion.a
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    href="mailto:abarakat15@outlook.com"
                    className="app__footer-card"
                >
                    <img src={images.email} alt="email" />
                    <p className="p-text">abarakat15@outlook.com</p>
                </motion.a>
                <motion.a
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    href="tel: +61 449 261 026"
                    className="app__footer-card"
                >
                    <img src={images.phone} alt="email" />
                    <p className="p-text">+61 449 261 026</p>
                </motion.a>
            </div>

            {!isFormSubmitted ?
                <div className="app__footer-form app__flex">
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        style={{ flexDirection: 'column' }}
                    >
                        <input type="text" className={errorName ? "p-text error-input" : "p-text"} placeholder="Name" name="name" value={name} onChange={handleChangeInput} />
                        {errorName ? <p className="p-text error-text">Please enter a valid name.</p> : ""}
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        style={{ flexDirection: 'column' }}
                    >
                        <input type="email" className={errorEmail ? "p-text error-input" : "p-text"} placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
                        {errorEmail ? <p className="p-text error-text">Please enter a valid email.</p> : ""}
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        style={{ flexDirection: 'column' }}
                    >
                        <textarea
                            className={errorMessage ? "p-text error-input" : "p-text"}
                            placeholder="Message"
                            name="message"
                            value={message}
                            onChange={handleChangeInput}
                        />
                        {errorMessage ? <p className="p-text error-text">Please enter a valid message.</p> : ""}
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__footer-form-btn"
                    >
                        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending...' : 'Send'}</button>
                    </motion.div>
                </div>
                :
                <div style={{ textAlign: "center" }}>
                    <h3 className="head-text-2">Thanks for contacting me!</h3>
                    <h3 className="sub-text">I'll get back to you ASAP.</h3>
                </div>
            }
        </>
    );
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact'
);