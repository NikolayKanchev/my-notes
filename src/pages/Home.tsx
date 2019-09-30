import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


const home = (prop:{ userID: string, notes?: Array<{ noteID: string, title: string, text: string }>}) => {

    return(
        <>
            <Link style={{ textDecoration: 'none', color: 'inherit', position: "absolute", top: "600px", left: "90%"}} to="/add-note"><Button color="secondary" variant="add" /></Link>
            
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
                    ) : (<h1 style={{alignSelf: "center", position: "absolute", left: "35%" }}> You don't have any notes yet !</h1>)
                }
                <div style={{ visibility: "hidden" }}><Card title={"jdsfdakfjvjadfvnknv"} text={"djkshfkajh;kjfhkjshfkajhskdfjhskfjvhkjdfkFH/KGFHA;KDJFHVKAFJDSFVHBADKFHB/KSFVBFAK/DJSFVBF/KBKJVBAKB"} noteID={"123456"} userID={prop.userID}/></div>
                </>

            </Container>            
        </>
    )
}

export default home;