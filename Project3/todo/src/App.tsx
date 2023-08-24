// The component should display a list of tasks.
// Users should be able to add tasks to the list using an input field and a "Add Task" button.
// Each task should have a checkbox to mark it as completed and a button to remove it.
// Completed tasks should be visually distinguished (e.g., strike-through text or a different background color).
// Users should be able to remove tasks individually.
// Include a "Clear Completed" button to remove all completed tasks at once.

import { useState } from "react";

function TodoList() {
  // Use closures to manage tasks
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState(1);

  // Implement the component's render and event handling here

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.completed == true));
  };

  const addTask = () => {
    setTasks((prevTask) => {
      setInputValue("");
      const newArray = [...prevTask];
      newArray.push({
        id: id,
        taskDesc: inputValue,
        completed: false,
      });
      setId((prevId) => prevId + 1);
      return newArray;
    });
  };

  const finishTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    console.log(tasks);
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const tasksHTML = tasks.map((task) => (
    <div key={task.id}>
      {!task.completed && <p> {task.taskDesc} </p>}
      {task.completed && <p> COMPLETED: {task.taskDesc} </p>}
      <input onChange={() => finishTask(task.id)} type="checkbox" />
      <button onClick={() => removeTask(task.id)}>Remove task</button>
    </div>
  ));

  return (
    <div>
      {
        <>
          <input onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={addTask}> Add task </button>{" "}
        </>
      }
      {tasksHTML}
      {}
      {<button onClick={clearCompleted}> Clear Completed </button>}
    </div>
  );
}

export default TodoList;
