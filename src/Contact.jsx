import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }
    return (
        <>
            <Header />
            <h1>Contact Page</h1>
            <button onClick={goToHome}>Home</button>
        </>
    )
}

export default Contact;
