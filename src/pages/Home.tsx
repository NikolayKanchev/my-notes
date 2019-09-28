import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';



const home = (prop:{userName: string}) => {
    if( !prop.userName ){
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
    }else{
        return(
            <>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/add-note"><Button color="secondary" variant="add" /></Link>
                
                <Container style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }} component="main" maxWidth="lg">
    
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
    
                </Container>            
            </>
        )
    }
}

export default home;