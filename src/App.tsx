import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import firebase from './Firebase';
import history from './utils/History';

import './App.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


import AppBar from './components/AppBar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import ResetPass from './pages/ResetPass';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import AddNote from './pages/AddNote';
import Copyright from './components/Copyright';



export interface MyState{
  user: any,
  displayName: string,
  userId: string,
}

class App extends Component<{}, MyState> {
  constructor( props: MyState ){
    super( props );

    this.state = {
      user: null,
      displayName: "",
      userId: ""
    }
  } 

  componentDidMount(){
    firebase.auth().onAuthStateChanged((FBUser: any) => {
      if (FBUser){        
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userId: FBUser.uid,
        });
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
          displayName: FBUser.displayName,
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
      displayName: "",
      userId: ""
    });

    firebase.auth().signOut().then(() => {
      history.push("/signin");
    })
  }

  render(){
    const { displayName } = this.state;

    return (
      <div className="App">
        <Router history={history}>
          <div className="Main">
            <AppBar loggedInUser={displayName} logoutUser={this.logoutUser}/>
            <Switch>
                <Route path="/" render={() => <Home userName={displayName} />} exact/>
                <Route path="/add-note" render={() => <AddNote  />}/>
                <Route path="/add-note" />
                { !this.state.user ? (<>
                  <Route path="/signin" render={() => <Signin history={history} />} />
                  <Route path="/reset-pass" component={ResetPass} />
                  <Route path="/register" render={() => <Register registerUser={this.registerUser} />}/>
                </>):null }

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
