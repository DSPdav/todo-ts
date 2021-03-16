import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      width: '100%',
      '& > div': {
        margin: '0 0 .5rem',
        width: '100%',
      },
      '& > button': {
        alignSelf: 'flex-end',
        width: '50%',
      },
    },
  }),
);

type FormProps = {
  list: object[]
  setList: Function
}

function Form({list, setList}: FormProps) {
  const classes = useStyles();
  const [newToDo, setNewToDo] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setList([...list, {id: Date.now(), content: newToDo, date, done: false}])
    setNewToDo('');
    setDate('');
  }
  

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="todo" label="To Do" variant="outlined" value={newToDo} onChange={e => setNewToDo(e.target.value)} />
      <TextField id="date" variant="outlined" type="date" value={date} onChange={e => setDate(e.target.value)} />
      <Button variant="contained" color="primary" type="submit">add</Button>
    </form>
  );
}

export default Form;
