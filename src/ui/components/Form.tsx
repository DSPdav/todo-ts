import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
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
      width: '78px',
    },
  }
});


function Form({list, setList}: FormProps) {
  const classes = useStyles();
  const dateNow = JSON.stringify(new Date()).slice(1, 11);
  const [newToDo, setNewToDo] = React.useState('');
  const [date, setDate] = React.useState(dateNow);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const [, m, d, y] = new Date(date).toString().split(' ');
    setList([...list, {id: Date.now(), content: newToDo, date: `${d} ${m} ${y}`, done: false}])
    setNewToDo('');
    setDate(dateNow);
  }
  

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="todo" label="To Do" variant="outlined" value={newToDo} onChange={e => setNewToDo(e.target.value)} required/>
      <TextField id="date" label="Date" variant="outlined" type="date" value={date} onChange={e => setDate(e.target.value)} />
      <Button variant="contained" color="primary" type="submit" disableElevation>add</Button>
    </form>
  );
}

export default Form;
