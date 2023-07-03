import React from 'react'
import "./index.css"
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate("/contact");
    }
    return (
        <>
            <Header />
            <h1>About Page</h1>
            <button onClick={() => goTo()}>contact</button>
        </>
    )
}

export default About;
