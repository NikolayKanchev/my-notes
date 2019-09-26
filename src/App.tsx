import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import firebase from './Firebase';

import './App.css';

import AppBar from './components/AppBar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import ResetPass from './pages/ResetPass';
import Register from './pages/Register';

export interface MyState{
  user: any,
  displayName: string,
  userId: string,
  redirectTo: string
}

class App extends Component<{}, MyState> {
  constructor( props: MyState ){
    super( props );

    this.state = {
      user: null,
      displayName: "",
      userId: "",
      redirectTo: ""
    }
  } 

  componentDidMount(){
    firebase.auth().onAuthStateChanged((FBUser: any) => {
      if (FBUser){
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userId: FBUser.uid
        });
      }
    });
  }

  registerUser = (displayName: string) => {
    firebase.auth().onAuthStateChanged((FBUser: any) => {
      // console.log(FBUser);
      FBUser.updateProfile({
        displayName: displayName

      }).then(() => {
        console.log(FBUser);
        
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userId: FBUser.uid
        });
        this.setState({ redirectTo: "/" });
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
      this.setState({ redirectTo: "/signin" });
    })
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter >
          <AppBar logoutUser={this.logoutUser}/>
          <Switch>
            <div className="App">
                <Route path="/" render={(props) => <Home {...props} userName={this.state.displayName} />} exact />
                <Route path="/signin" component={Signin} exact />
                <Route path="/reset-pass" component={ResetPass} exact />
                <Route path="/register" render={(props) => <Register registerUser={this.registerUser} />}/>
                { this.state.redirectTo !== "" ? <Redirect to={this.state.redirectTo} />: null }
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
