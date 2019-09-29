import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


const home = (prop:{ userID: string, notes?: Array<{ noteID: string, title: string, text: string }>}) => {

    return(
        <>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/add-note"><Button color="secondary" variant="add" /></Link>
            
            <Container style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }} component="main" maxWidth="lg">
                <>
                { prop.notes && prop.notes.length ? 
                    (
                        prop.notes.map(note => {
                            return (
                                <div key={note.noteID}>
                                    <Card title={note.title} text={note.text} noteID={note.noteID} userID={prop.userID}/>
                                </div>
                            )                               
                        })
                    ) : null
                }
                </>

            </Container>            
        </>
    )
}

export default home;