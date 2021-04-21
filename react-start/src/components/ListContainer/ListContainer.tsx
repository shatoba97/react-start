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
    addToDo({
      description: "",
      id: 0,
      shortTitle: "",
      title: "",
    });
  };

  console.log(toDoList);
  return (
    <div className={styles.ListContainer} data-testid="ListContainer">
      <div className="list">
        {toDoList.map((toDo, i) => {
          return <ToDoItem toDoItem={toDo} selectToDo={selectToDo} key={i} />;
        })}
      </div>
      <button className={styles.addButton} onClick={addToDoFn}>+</button>
    </div>
  );
};

export default ListContainer;
