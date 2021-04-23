import React, { useEffect } from "react";
import { ToDoIO } from "../../core/model/to-do.model";
import styles from "./DescriptionContainer.module.css";
import { DescriptionContainerType } from "./DescriptionContainer.type";

const DescriptionContainer: React.FC<DescriptionContainerType> = ({
  selectToDo,
  removeToDo,
  saveToDo,
  closeToDo,
}) => {
  let [toDo, setToDo] = React.useState({ ...selectToDo } as ToDoIO);

  useEffect(() => {
    setToDo(selectToDo as ToDoIO);
  }, [selectToDo]);

  const titleChange = (value: string) =>
    setToDo({ ...toDo, title: value } as ToDoIO);
  const shortTitleChange = (value: string) =>
    setToDo({ ...toDo, shortTitle: value } as ToDoIO);
  const descriptionChange = (value: string) =>
    setToDo({ ...toDo, description: value } as ToDoIO);

  return (
    <React.Fragment>
      <form
        className={styles.DescriptionContainer}
        data-testid="DescriptionContainer"
      >
        <div className={styles.Inputs}>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={toDo?.title}
            onChange={(e) => titleChange(e.target.value)}
            className={styles.Title}
          />

          <input
            type="text"
            id="shortTitle"
            placeholder="Short title"
            value={toDo?.shortTitle}
            onChange={(e) => shortTitleChange(e.target.value)}
            className={styles.ShortTitle}
          />
          <textarea
            placeholder="Description"
            value={toDo?.description}
            onChange={(e) => descriptionChange(e.target.value)}
            className={styles.Description}
          />
        </div>
        <div className={styles.Controls}>
          <button
            className={styles.RemoveButton}
            onClick={(e) => {
              e.preventDefault();
              removeToDo(toDo);
            }}
          >
            Remove
          </button>
          <button
            className={styles.SaveButton}
            onClick={(e) => {
              e.preventDefault();
              saveToDo(toDo);
            }}
          >
            Save
          </button>
        </div>
      </form>
      <button
        className={styles.CloseButton}
        onClick={(e) => {
          e.preventDefault();
          closeToDo();
        }}
      >
        Close
      </button>
    </React.Fragment>
  );
};

export default DescriptionContainer;
