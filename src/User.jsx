import React from 'react';
import "./index.css"
import Header from './Header';
import { useParams } from 'react-router-dom';

const User = () => {
    const { fname } = useParams();
    return (
        <>
            <Header />
            <h1>User{fname} Page</h1>
        </>
    )
}

export default User;
