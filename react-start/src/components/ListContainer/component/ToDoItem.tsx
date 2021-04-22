import React from 'react';
import styles from './ToDoItem.module.css';
import { ToDoItemType } from './ToDoItem.type';

const ToDoItem: React.FC<ToDoItemType> = ({toDoItem, selectToDo}) => {
  const selectToDoFn = () => {
    selectToDo(toDoItem.id)
  }
  return <div className={styles.ToDoItem} data-testid="ToDoItem">
    <button className={styles.Button} onClick={selectToDoFn}>
      {toDoItem.shortTitle}
    </button>
  </div>
}

export default ToDoItem;
