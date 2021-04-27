import React from "react";
import { connect, Provider } from "react-redux";
import styles from "./App.module.css";
import DescriptionContainer from "./components/DescriptionContainer/DescriptionContainer";
import actions from "./store/actions/to-do-list";

import ListContainer from "./components/ListContainer/ListContainer";
import { ToDoIO } from "./core/model/to-do.model";
import { AppType } from "./App.type";
import { StateIO } from "./store/model/state.model";
import store from "./store/store";

const App: React.FC<StateIO> = ({ toDoList, selectToDo }) => {
  // const [toDoList, setToDoList] = React.useState<ToDoIO[]>([]);
  // const [selectToDo, setSelectToDo] = React.useState<ToDoIO | null>(null);
  // store.subscribe(() => {
  //   toDoList = store.getState().toDoList;
  //   console.log('in subscribe', toDoList)

  // });
  console.log('after subscribe', toDoList)
  const addToDo = (toDo: ToDoIO) => {
    store.dispatch(actions.addToDo(toDo));
  };

  const selectToDoFn = (id: number) => {
    store.dispatch(
      actions.selectToDo(toDoList.find((toDo) => toDo.id === id) || null)
    );
  };

  const removeToDo = (toDoIO: ToDoIO | null) => {
    if (toDoIO) {
      store.dispatch(actions.removeToDo(toDoIO));
    }
    store.dispatch(actions.selectToDo(null));
  };

  const saveToDo = (toDo: ToDoIO | null) => {
    if (toDo) {
      store.dispatch(actions.saveToDo(toDo));
      store.dispatch(actions.selectToDo(toDo));
    }
  };

  const closeToDo = () => {
    store.dispatch(actions.selectToDo(null));
  };

  console.log(toDoList, selectToDo);
  return (
    <div className={styles.App}>
      <ListContainer
        toDoList={toDoList}
        addToDo={addToDo}
        selectToDo={selectToDoFn}
      />
      {!!selectToDo && (
        <Provider store={store}>
          <DescriptionContainer
            removeToDo={removeToDo}
            saveToDo={saveToDo}
            closeToDo={closeToDo}
          />
        </Provider>
      )}
    </div>
  );
};
const mapStoreToProps = (state: StateIO) => {
  debugger
  return {toDoList: state.toDoList,
  selectToDo: state.selectToDo,}
}

export default connect(mapStoreToProps, actions)(App);
