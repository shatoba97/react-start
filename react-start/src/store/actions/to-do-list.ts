import { ToDoIO } from "../../core/model/to-do.model";
import { ADD_TO_DO, GET_TO_DO_LIST, REMOVE_TO_DO, SAVE_TO_DO, SELECT_TO_DO } from "./to-do-list.action";
import { ActionIO } from "../model/action.model";

const addToDo = (toDo: ToDoIO): ActionIO => ({
    type: ADD_TO_DO,
    value: toDo,
});

const removeToDo = (toDo: ToDoIO): ActionIO => ({
    type: REMOVE_TO_DO,
    value: toDo,
});

const selectToDo = (toDo: ToDoIO | null) => ({
    type: SELECT_TO_DO,
    value: toDo,
})

const saveToDo = (toDo: ToDoIO | null) => ({
    type: SAVE_TO_DO,
    value: toDo,
})

const getToDo = (): ActionIO => ({ type: GET_TO_DO_LIST, value: null })

export default { addToDo, removeToDo, getToDo, selectToDo, saveToDo};