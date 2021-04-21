import React from 'react';
import './App.css';

import ListContainer from './components/ListContainer/ListContainer';
import DescriptionContainer from './components/DescriptionContainer/DescriptionContainer';
import { ToDoIO } from './core/model/to-do.model';

function App() {
  const [toDoList, setToDoList] = React.useState<ToDoIO[]>([]);

  const addToDo = (toDo: ToDoIO) => {
    setToDoList([...toDoList, toDo]);
  };
  
  let selectToDo = null;
  const selectToDoFn = (id: number) => {
    selectToDo = toDoList.find(toDo => toDo.id === id);
  }
  
  console.log(toDoList)
  return (
    <React.Fragment>
      <ListContainer toDoList={toDoList} addToDo={addToDo} selectToDo={selectToDoFn}/>
      {/* <DescriptionContainer /> */}
    </React.Fragment>
  );
}

export default App;
