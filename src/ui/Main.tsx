import React from 'react';

import Form from './Form'

function Main() {
  const initialState: Array<{id: string, content: string, date: string, done: boolean}> = [];
  const [listToDo, setListToDo] = React.useState(initialState);

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
      {listToDo && listToDo.map(item => (
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
