import React from "react";
import "./App.css";
import TodoListPage from "./pages/TodoList";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoListPage />
      </div>
    );
  }
}

export default App;

