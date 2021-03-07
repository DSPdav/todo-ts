import React from 'react';

import Input from '../components/Input'

type FormProps = {
  list: object[]
  setList: Function
}

function Form({list, setList}: FormProps) {
  const [newToDo, setNewToDo] = React.useState('');
  const [date, setDate] = React.useState('');
  const handleChangeToDo = (e: React.FormEvent<HTMLInputElement>): void => {
    setNewToDo(e.currentTarget.value);
  }
  const handleChangeDate = (e: React.FormEvent<HTMLInputElement>): void => {
    setDate(e.currentTarget.value);
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setList([...list, {id: Date.now(), content: newToDo, date, done: false}])
    setNewToDo('');
    setDate('');
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <Input idText="todo" inputType="text" labelText="To Do" valueInput={newToDo} handleChange={handleChangeToDo}/>
      <Input idText="date" inputType="date" labelText="Date" valueInput={date} handleChange={handleChangeDate}/>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
