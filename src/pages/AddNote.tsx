import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { validateName } from '../components/Validators';

interface MyProps {
//   history: any;
}

interface MyState {
  title: string;
  text: string;
  errTitle: boolean;
  errText: boolean;
}

class SignIn extends Component<MyProps, MyState> {

  constructor( props: MyProps ){
    super( props );
 
    this.state = {
      title: "",
      text: "",
      errTitle: false,
      errText: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e: React.FormEvent<any>){

    e.preventDefault();
    
  }


  handleChange(e: React.FormEvent<any>){
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value
    } as Pick<MyState, keyof MyState>, () => {

        if (!validateName(this.state.title)){
            this.setState({errTitle: true});
        }else{
            this.setState({errTitle: false});
        }

        if (!validateName(this.state.text)){
            this.setState({errText: true});
        }else{
            this.setState({errText: false});
        }
    });

  }
  render() {
    return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar" style={{ margin: "1vh", backgroundColor: "#e91e63", marginTop: "90px", marginLeft: "45%"}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{marginTop: "10px", marginBottom: "10px"}}>
          Add New Note
        </Typography>
        <form className="form" onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={this.state.errTitle}
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                </Grid>
              <Grid item xs={12}>  
                <TextField
                    autoComplete="text"
                    name="text"
                    variant="outlined"
                    required
                    fullWidth
                    id="text"
                    label="Text"
                    autoFocus
                    error={this.state.errText}
                    value={this.state.text}
                    onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <br/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            style={{ margin: "10px 0 20px 0"}}
          >
            Save
          </Button>

          <Grid container justify="center" style={{ marginTop: '10px'}}>
                <Grid item>
                    <Link to="/home" style={{textDecoration: 'none', color: 'inherit'}}>Back To Home</Link>
                </Grid>
           </Grid>
          
        </form>
      </div>
    </Container>
  </>
  )}
}

export default SignIn;