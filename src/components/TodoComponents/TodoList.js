// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import TodoForm from "./TodoForm";

function TodoList(props) {
  return (
    <div>
      <TodoForm
        task={props.task}
        newTask={props.newTask}
        toggleComplete={props.toggleComplete}
        removeTask={props.removeTask}
      />
    </div>
  );
}

export default TodoList;
