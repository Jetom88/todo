import React, { useState } from "react";
import "./css/reset.css";
import "./css/style.scss";
import Create from "./components/Create";
import List from "./components/List";
import moment from "moment";

function App() {
  const today = moment().format("YYYY-MM-DD");
  const day = moment().format("dddd");

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    if (text === "") {
      return alert("내용?? 왜 없?");
    } else {
      setTodos([...todos].concat(text));
    }
  };

  return (
    <div className="App">
      <div>
        <p className="today">{today}</p>
        <p className="day">{day}</p>
      </div>
      <h1>Todo List📝</h1>
      <div className="line" />
      <Create handleAddTodo={handleAddTodo} />
      <List todos={todos} />
    </div>
  );
}

export default App;
