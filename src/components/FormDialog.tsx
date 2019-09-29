import React, { useEffect } from 'react';
import firebase from '../Firebase';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


interface MyProps {
    title: string;
    text: string;
    noteID: string;
    userID: string;
}

export default function FormDialog(prop: {props: MyProps, setOpenToFalse: () => void}) {
  const { noteID, userID } = prop.props;

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(prop.props.title);
  const [text, setText] = React.useState(prop.props.text);

  useEffect(() => {
    setOpen(true);
    }, 
    [title]
  );

  const handleClose = () => {
    setOpen(false);
    prop.setOpenToFalse();
  };

  const handleChange = (e: React.FormEvent<any>) => {
    const { name, value } = e.currentTarget;

    if (name === "title"){
        setTitle(value);
    }else{
        setText(value);
    }
}

  const updateNote = (e: React.FormEvent<any>) => {
    setOpen(false);
    prop.setOpenToFalse();
    e.preventDefault();

    const ref = firebase
        .database()
        .ref(`notes/${userID}/${noteID}`);

    ref.update({title: title, text: text});
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Note</DialogTitle>
        <DialogContent>
            <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                value={title}
                style={{marginBottom: "20px"}}
                onChange={handleChange}
            />
            <TextField
                autoComplete="text"
                name="text"
                variant="outlined"
                required
                fullWidth
                id="text"
                label="Text"
                autoFocus
                value={text}
                onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={e => updateNote(e)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}