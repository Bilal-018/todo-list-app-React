import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const updateList = (text) => {
    setList([...list, text]);
  };

  const deleteItem = (index) => {
    setList(list.filter((i) => i !== list[index]));
  };

  const prioritySet = (index) => {
    if (index > 0) {
      let data = [...list];
      [data[index], data[index - 1]] = [data[index - 1], data[index]];

      setList(data);
    }
  };

  return (
    <>
      <div>
        <Header />
        <AddTask list={list} updateList={updateList} />
        <Task list={list} deleteItem={deleteItem} prioritySet={prioritySet} />
      </div>
    </>
  );
}

export default App;
