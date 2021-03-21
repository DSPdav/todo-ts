import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Form from './Form';
import Display from './Display';
import Filter from './Filter';

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    margin: '1rem auto'
  },
});

function Main() {
  const classes = useStyles();
  const initialState: Array<ToDo> = [];
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

  const filterListToDo = (): Array<ToDo> => {
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
      const init: Array<ToDo> = JSON.parse(localList);
      setListToDo(init)
    }
  }, [])
  
  React.useEffect(() => {
    window.localStorage.setItem('listTodo', JSON.stringify(listToDo));
  }, [listToDo])

  return (
    <Container component="main" className={classes.container}>
      <Form list={listToDo} setList={setListToDo}/>
      <Filter show={show} setShow={setShow} handleClear={handleClear}/>
      {filterListToDo().map(
        item => <Display key={item.id} item={item} handleChangeDone={handleChangeDone}/>
      )}
    </Container>
  );
}

export default Main;
