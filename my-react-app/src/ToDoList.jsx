import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(i) {
    const updatedTasks = tasks.filter((element, index) => index !== i);
    setTasks(updatedTasks);
  }
  function moveTaskUp(i) {
    if (i > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i - 1]] = [
        updatedTasks[i - 1],
        updatedTasks[i],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(i) {
    if (i < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i + 1]] = [
        updatedTasks[i + 1],
        updatedTasks[i],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>to-do-list</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          add a task
        </button>
      </div>
      <ol>
        {tasks.map((element, i) => (
          <li key={i}>
            <span className="text">{element}</span>
            <button className="delete-button" onClick={() => deleteTask(i)}>
              Delete
            </button>
            <button className="up-button" onClick={() => moveTaskUp(i)}>
              Move Task Up
            </button>
            <button className="down-button" onClick={() => moveTaskDown(i)}>
              Move Task Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
