import React, { useState } from "react";

const TodoForm = props => {
  const [formInput, setFormInput] = useState({
    task: "",
    id: Date.now(),
    completed: false
  });

  const onsubmit = event => {
    event.preventDefault();
    const addTodo = {
      ...formInput,
      id: Date.now(),
      completed: false
    };
    props.newTask(addTodo);
    console.log(addTodo);
    setFormInput({
      task: ""
    });
  };

  const onchange = event => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          type='text'
          name='task'
          value={formInput.task}
          onChange={onchange}
          placeholder='add todo item...'
        />
        <button>Add Todo</button>
        <button onClick={event => props.removeTask(props.task.completed)}>
          Clear Completed
        </button>
      </form>
      {props.task.map(data => {
        return (
          <div
            key={data.id}
            className={`${data.completed ? "complete items" : "items"}`}
            onClick={e => props.toggleComplete(data.id)}
          >
            {data.task}
          </div>
        );
      })}
    </div>
  );
};

export default TodoForm;
