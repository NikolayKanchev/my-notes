import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Welcome = () => {
    return(
        <>
            <h2>Welcome to My-Note</h2>
            <br/>
            <p>This website allows you to create notes .....</p>
            <br/>
            <br/>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/signin"><Button color="secondary" variant="contained" text="GET STARTED" /></Link>
        </>
    )
}

export default Welcome;

