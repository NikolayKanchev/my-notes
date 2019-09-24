import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from './Firebase';

import './App.css';

import AppBar from './components/AppBar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import ResetPass from './pages/ResetPass';
import Register from './pages/Register';

class App extends Component {
  state = {
    user: null
  }

  componentDidMount(){
    const ref = firebase.database().ref('user');
    ref.on('value', (snapshot: any) => {
      let FBuser = snapshot.val();
      this.setState({ user: FBuser});

    })
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <AppBar />
          <Switch>
            <div className="App">
                <Route path="/" render={(props) => <Home {...props} user={this.state.user} />} exact />
                <Route path="/signin" component={Signin} exact />
                <Route path="/reset-pass" component={ResetPass} exact />
                <Route path="/register" component={Register} exact />
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
