import React from 'react';

import Form from './Form'

function Main() {
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
    <main className="main-content">
      <Form list={listToDo} setList={setListToDo}/>
      <div className="filter-display">
        <div>
          <input type="checkbox" id="showDone" checked={show.done} onChange={() => setShow({...show, done: !show.done})}/>
          <label htmlFor="showDone">Done</label>
          <input type="checkbox" id="showOnProgress" checked={show.onProgress} onChange={() => setShow({...show, onProgress: !show.onProgress})}/>
          <label htmlFor="showOnProgress">On Progress</label>
        </div>
        <button id="clear-btn" onClick={handleClear}>Clear</button>
      </div>
      {filterListToDo().map(item => (
        <div key={item.id} className={`display-item ${item.done === true ? 'done' : ''}`}>
          <div>
            <strong>{item.content}</strong>
            <p>{item.date}</p>
          </div>
          <input type="checkbox" name="toggle-done" checked={item.done} onChange={() => handleChangeDone(item.id)}/>
        </div>
      ))}
    </main>
  );
}

export default Main;
