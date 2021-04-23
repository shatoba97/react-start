import React from "react";
import { ListContainerType } from "./ListContainer.type";
import styles from "./ListContainer.module.css";
import ToDoItem from "./component/ToDoItem";

const ListContainer: React.FC<ListContainerType> = ({
  toDoList,
  addToDo,
  selectToDo,
}) => {
  const addToDoFn = () => {
    let id = Math.random()* 1000;
    while(toDoList.findIndex(el => el.id === id) >= 0) {
      id = Math.random() * 1000;
    }
    addToDo({
      description: "",
      id: +id.toFixed(),
      shortTitle: "",
      title: "",
    });
  };

  return (
    <div className={styles.ListContainer} data-testid="ListContainer">
      <div className={styles.List}>
        {toDoList.map((toDo, i) => {
          return <ToDoItem toDoItem={toDo} selectToDo={selectToDo} key={i} />;
        })}
      </div>
      <button className={styles.AddButton} onClick={addToDoFn}>+</button>
    </div>
  );
};

export default ListContainer;
