import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    loggedIn: {
      flexGrow: 1,
      color: "#c62828"
    }
  }),
);

interface MyProps {
  logoutUser: (event: React.FormEvent<any>) => void;
  loggedInUser: string;
}

export default function ButtonAppBar(props: MyProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
            <Typography variant="h6" className={classes.title}>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/">My-Notes</Link>
            </Typography>

            {
            props.loggedInUser === "" ? 
            <Button color="inherit"><Link style={{textDecoration: 'none', color: 'inherit'}} to="/signin">Login</Link></Button> :
            (<><Typography variant="h6" className={classes.loggedIn}>
              <div>{props.loggedInUser}</div>
            </Typography>
            <Button color="inherit" onClick={e => props.logoutUser(e)}>Logout</Button></>)
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}