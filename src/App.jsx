import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    "i want to attend the class @10am",
    "i want to eat the food @12pm",
    "i want to go to the park @3pm",
    "i want to watch the movie @6pm",
    "i want to read the book @8pm",
    "i want to sleep @10pm",
    "i want to wake up @6am",
    " i want to go to the gym @7am",
    "i want to go to the office @9am",
  ]);

  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  function deleteTodo(index) {
    let newData = data.filter((item, i) => i !== index);
    setData(newData);
  }

  function editTodo(index) {
    setInputValue(data[index]);
    setEditIndex(index);
  }

  function addTodo(e) {
    e.preventDefault();

    if (inputValue === "") {
      alert("Please enter todo");
      return;
    }

    let newTodo = [...data, inputValue];
    setData(newTodo);
    setInputValue("");
  }

  function updateTodo(e) {
    e.preventDefault();

    let updatedData = [...data];
    updatedData[editIndex] = inputValue;

    setData(updatedData);
    setInputValue("");
    setEditIndex(-1);
  }

  let result = data.map((item, index) => {
    return (
      <div className="todo" key={index}>
        <h2 className="element">{item}</h2>

        <button
          className="delete"
          onClick={() => deleteTodo(index)}
        >
          Delete
        </button>

        <button
          className="edit"
          onClick={() => editTodo(index)}
        >
          Edit
        </button>
      </div>
    );
  });

  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="Enter your todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {editIndex === -1 ? (
          <button className="add" onClick={addTodo}>
            Add
          </button>
        ) : (
          <button className="edit" onClick={updateTodo}>
            Update
          </button>
        )}
      </form>

      <div className="App">{result}</div>
    </div>
  );
}

export default App;