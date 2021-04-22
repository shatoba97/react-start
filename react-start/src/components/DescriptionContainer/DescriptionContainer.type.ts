import { ToDoIO } from "../../core/model/to-do.model";

export type DescriptionContainerType = {
  selectToDo: ToDoIO | null,
  saveToDo: (toDoIO: ToDoIO) => void,
  removeToDo: (id: number) => void,
}