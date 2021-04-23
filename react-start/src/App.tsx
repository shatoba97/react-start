import React from "react";
import styles from "./App.module.css";
import DescriptionContainer from "./components/DescriptionContainer/DescriptionContainer";

import ListContainer from "./components/ListContainer/ListContainer";
import { ToDoIO } from "./core/model/to-do.model";

function App() {
  const [toDoList, setToDoList] = React.useState<ToDoIO[]>([]);
  const [selectToDo, setSelectToDo] = React.useState<ToDoIO | null>(null);

  const addToDo = (toDo: ToDoIO) => {
    setToDoList([...toDoList, toDo]);
  };

  const selectToDoFn = (id: number) => {
    setSelectToDo(toDoList.find((toDo) => toDo.id === id) || null);
  };

  const removeToDo = (toDoIO: ToDoIO | null) => {
    if (toDoIO) {
      setToDoList(toDoList.filter((toDo) => toDo.id !== toDoIO.id));
    }
    setSelectToDo(null);
  };

  const saveToDo = (toDoSave: ToDoIO | null) => {
    if (toDoSave) {
      setToDoList(
        toDoList.map((toDo) => (toDo.id === toDoSave.id ? toDoSave : toDo))
      );
      setSelectToDo(toDoSave);
    }
  };

  const closeToDo = () => {
    setSelectToDo(null);
  }

  console.log(toDoList, selectToDo);
  return (
    <div className={styles.App}>
      <ListContainer
        toDoList={toDoList}
        addToDo={addToDo}
        selectToDo={selectToDoFn}
      />
      {!!selectToDo && (
        <DescriptionContainer
          selectToDo={selectToDo}
          removeToDo={removeToDo}
          saveToDo={saveToDo}
          closeToDo={closeToDo}
        />
      )}
    </div>
  );
}

export default App;
