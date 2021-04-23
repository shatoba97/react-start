import { ToDoIO } from "../../core/model/to-do.model";

export type DescriptionContainerType = {
  selectToDo: ToDoIO,
  saveToDo: (toDoIO: ToDoIO | null) => void,
  removeToDo: (toDoIO: ToDoIO | null) => void,
  closeToDo: () => void,
}