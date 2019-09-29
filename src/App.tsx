import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import firebase from './Firebase';
import history from './utils/History';

import './App.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Copyright from './components/Copyright';
import AppBar from './components/AppBar';

import Home from './pages/Home';
import Signin from './pages/Signin';
import ResetPass from './pages/ResetPass';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import AddNote from './pages/AddNote';
import Welcome from './pages/Welcome';


export interface MyState{
  user: any,
  userId: string,
  notes: Array<{ noteID: string, title: string, text: string }>,
  notesNum: number
}

class App extends Component<{}, MyState> {
  constructor( props: MyState ){
    super( props );

    this.state = {
      user: null,
      userId: "",
      notes: [],
      notesNum: 0
    }
  } 

  componentDidMount(){
    firebase.auth().onAuthStateChanged((FBUser: any) => {
      if (FBUser){        
        this.setState({
          user: FBUser,
          userId: FBUser.uid,
        });

        const notesRef = firebase.database().ref('notes/' + FBUser.uid);

        notesRef.on('value', snapshot => {
          let notes = snapshot.val();
          let notesList = [];

          for(let index in notes){
            notesList.push({
              noteID: index,
              title: notes[index].title,
              text: notes[index].text
            })
          }          

          this.setState({
            notes: notesList,
            notesNum: notesList.length
          })
        });


      }else{
        this.setState({
          user: null
        })
      }
    });
  }

  registerUser = (displayName: string) => {
    firebase.auth().onAuthStateChanged((FBUser: any) => {
      FBUser.updateProfile({
        displayName: displayName

      }).then(() => {        
        this.setState({
          user: FBUser,
          userId: FBUser.uid
        });
        history.push("/");
      })
    })
  }

  logoutUser = (e: React.FormEvent<any>) => {
    e.preventDefault();
    this.setState({
      user: null,
      userId: ""
    });

    firebase.auth().signOut().then(() => {
      history.push("/signin");
    })
  }

  addNote = (title: string, text: string) => {
    const ref = firebase
    .database()
    .ref(`notes/${this.state.user.uid}`);
    ref.push({ title: title, text: text });
  }

  render(){
    const { user, notes } = this.state;
    let displayName = "";
    if (user){
      displayName = user.displayName;
    }    

    return (
      <div className="App">
        <Router history={history}>
          <div className="Main">
            <AppBar loggedInUser={displayName} logoutUser={this.logoutUser}/>
            <Switch>
              { !user ? (<>
                <Route path="/" render={() => <Welcome />} exact/>
                <Route path="/signin" render={() => <Signin history={history} />} />
                <Route path="/reset-pass" component={ResetPass} />
                <Route path="/register" render={() => <Register registerUser={this.registerUser} />}/>
              </>):(<>
                <Route path="/" render={() => <Home userID={user.uid} notes={notes} />} exact/>
                <Route path="/add-note" render={() => <AddNote addNote={this.addNote} />}/>
              </>)
              }

              <Route component={ NotFound } />
            </Switch>
          </div>
          <Container component="main" maxWidth="sm">
            <Box mt={8}>
                <Copyright />
            </Box>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
