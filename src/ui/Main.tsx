import React from 'react';

import Form from './Form'

function Main() {
  const initialState: Array<{content: string, date: string}> = [];
  const [listToDo, setListToDo] = React.useState(initialState);
  

  return (
    <main className="main-content">
      <Form list={listToDo} setList={setListToDo}/>
      {listToDo.length > 0 && listToDo.map(item => (
        <div key={item.content}>
          <p>{item.content}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </main>
  );
}

export default Main;
