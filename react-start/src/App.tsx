import React from 'react';
import './App.css';
import DescriptionContainer from './components/DescriptionContainer/DescriptionContainer';

import ListContainer from './components/ListContainer/ListContainer';
import { ToDoIO } from './core/model/to-do.model';

function App() {
  const [toDoList, setToDoList] = React.useState<(ToDoIO)[]>([]);

  const addToDo = (toDo: ToDoIO) => {
    setToDoList([...toDoList, toDo]);
  };
  
  let selectToDo = null;
  const selectToDoFn = (id: number) => {
    selectToDo = toDoList.find(toDo => toDo.id === id);
  }

  const removeToDo = (id: number) => {
    setToDoList(toDoList.filter(toDo => toDo.id === id));
  }

  const saveToDo = (toDoSave: ToDoIO) => {
    setToDoList(toDoList.map(toDo => toDo.id === toDoSave.id ? toDoSave: toDo));
  }
  
  console.log(toDoList)
  return (
    <React.Fragment>
      <ListContainer toDoList={toDoList} addToDo={addToDo} selectToDo={selectToDoFn}/>
      <DescriptionContainer selectToDo={selectToDo} removeToDo={removeToDo} saveToDo={saveToDo}/>
    </React.Fragment>
  );
}

export default App;
