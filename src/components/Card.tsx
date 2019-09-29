import React from 'react';
import firebase from '../Firebase';

import FormDialog from '../components/FormDialog';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

interface MyProps{
  title: string;
  text: string;
  noteID: string;
  userID: string;
}

const useStyles = makeStyles({
  card: {
    minHeight: 200,
    maxWidth: 345,
    margin: 20,
    backgroundColor: "#e7f7fe",
  },
  actions: {
    height: 20,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between"
  },
  text: {
    minHeight: 100
  }
});

const deleteNote = (e: React.FormEvent<any>, noteID: string, userID: string):void => {
  e.preventDefault();

  const ref = firebase
    .database()
    .ref(`notes/${userID}/${noteID}`);

  ref.remove();
}

export default function MediaCard(props: MyProps) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const { title, text, noteID, userID } = props;

  const setOpenToFalse = (): void => {
    setOpen(false);
  }

  return (
    <>
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary" onClick={e => setOpen(true)}>
            <EditIcon />
        </Button>
        <Button size="small" color="primary" onClick={e => deleteNote(e, noteID, userID)}>
            <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
    { open ? <FormDialog props={props} setOpenToFalse={setOpenToFalse} /> : <></>}
    </>
  );
}