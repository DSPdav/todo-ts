import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Form from './Form';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      margin: '1rem 0',
    },
  }),
);

function Main() {
  const classes = useStyles();
  const initialState: Array<{id: string, content: string, date: string, done: boolean}> = [];
  const [listToDo, setListToDo] = React.useState(initialState);
  const [show, setShow] = React.useState({done: true, onProgress: true});

  const handleChangeDone = (id: string) => {
    const newList = listToDo.map(item => {
      if (item.id === id) {
        return {...item, done: !item.done}
      } else {
        return item
      }
    });
    setListToDo(newList);
  }

  const filterListToDo = (): Array<{id: string, content: string, date: string, done: boolean}> => {
    if (show.done && show.onProgress) {
      return listToDo;
    } else if (!show.done && show.onProgress) {
      return listToDo.filter(item => item.done === false);
    } else if (show.done && !show.onProgress) {
      return listToDo.filter(item => item.done === true);
    } else {
      return listToDo.filter(item => item.content === null);
    }
  }

  const handleClear = () => {
    const clearList = listToDo.filter(item => item.content === null);
    setListToDo(clearList);
  }

  React.useEffect(() => {
    const localList = window.localStorage.getItem('listTodo');
    if (localList) {
      const init: Array<{id: string, content: string, date: string, done: boolean}> = JSON.parse(localList);
      setListToDo(init)
    }
  }, [])
  
  React.useEffect(() => {
    window.localStorage.setItem('listTodo', JSON.stringify(listToDo));
  }, [listToDo])

  return (
    <main>
      <Form list={listToDo} setList={setListToDo}/>
      <Container className={classes.root} disableGutters>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={show.done}
                onChange={() => setShow({...show, done: !show.done})}
                name="showDone"
              />
            }
            label="Done"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={show.onProgress}
                onChange={() => setShow({...show, onProgress: !show.onProgress})}
                name="showOnProgress"
                color="primary"
              />
            }
            label="On Progress"
          />
        </Box>
        <Button id="clear-btn" variant="contained" color="secondary" onClick={handleClear}>clear</Button>
      </Container>
      {filterListToDo().map(item => (
        <Card key={item.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.5rem', margin: '1rem 0'}}>
          <Box>
            <Typography color={item.done ? "secondary" : "primary"}>{item.content}</Typography>
            <Typography>{item.date}</Typography>
          </Box>
          <Checkbox checked={item.done} onChange={() => handleChangeDone(item.id)} name="toggle-done"/>
        </Card>
      ))}
    </main>
  );
}

export default Main;
