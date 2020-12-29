import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar/Navbar";
import TodoListPage from "./pages/TodoList";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          
          <Route exact path="/todo" component={TodoListPage}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

