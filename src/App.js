import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import { tasks } from "./components/TodoComponents/Todo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: tasks
    };
  }
  newTask = tasks => {
    this.setState({ task: [...this.state.task, tasks] });
  };

  toggleComplete = taskId => {
    this.setState({
      task: this.state.task.map(tsk => {
        if (taskId === tsk.id) {
          return { ...tsk, completed: !tsk.completed };
        }
        return tsk;
      })
    });
  };

  removeTask = () => {
    this.setState({
      task: this.state.task.filter(cmplt => {
        return cmplt.completed === false;
      })
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          task={this.state.task}
          newTask={this.newTask}
          toggleComplete={this.toggleComplete}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
