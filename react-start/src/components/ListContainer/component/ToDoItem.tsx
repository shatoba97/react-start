import React from 'react';
import styles from './ToDoItem.module.css';
import { ToDoItemType } from './ToDoItem.type';

const ToDoItem: React.FC<ToDoItemType> = ({toDoItem, selectToDo}) => {
  return <div className={styles.ToDoItem} data-testid="ToDoItem">
    <button>
      {toDoItem.shortTitle}
    </button>
  </div>
}

export default ToDoItem;
