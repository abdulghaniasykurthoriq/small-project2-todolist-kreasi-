import React from "react";
import EditForm from "../Components/EditForm";
import Todo from "../Components/Todo";
import TodoForm from "../Components/TodoForm";
import './TodoList.css'


let data;
class TodoListPage extends React.Component {
  state = {
    todos: [{ text: "Text 1", id:'1' }, { text: "Text 2", id:'2' }, { text: "Text 3", id:'3' }],
    newValue: "",
    inputForm: false,
    editIndex:null
  };

  setTodos = (todos) => this.setState({ todos });

  addTodo = (text) => {
    const newTodos = this.state.todos.concat({ text });
    this.setTodos(newTodos);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.newValue) return;
    this.addTodo(this.state.newValue);
    this.setState({
      newValue: "",
    });
  };

  removeTodo = (event) =>{
    const remove =this.state.todos.splice(event, 1)
    this.setState({remove})
  }


  onDoubleClick = (event) => {
    console.log('-> Edit')
    console.log(data)
    data = event.target.outerText
    this.setState({

      inputForm: !this.state.inputForm
    })
  }

  handleEdit = (e, id) => {
    e.preventDefault();
    if (this.state.todos.id === id) return;
    this.setState({
      todos:''
    })
  }
  handleZ = (e) => {
    console.log(e)
  }
  

  render() {
    
    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        {this.state.todos.map((todo, index) => (
          <div className="todoListAppz" key={index}>
            <div className='datar'> <div className='ceklis'> √  </div>
            <Todo todo={todo} 
                  onDoubleClick={this.onDoubleClick}
            />
            </div>
            
            <button onClick={()=> this.removeTodo(index)}>x</button> 
          </div>
        ))}

        {this.state.inputForm ? <EditForm 
                  onSubmit={this.handleEdit}
                  onValueChange={(e) =>  this.handleZ (e.target.value)}
        /> :


        <TodoForm
          onSubmit={this.handleSubmit}
          onValueChange={(value) =>
            this.setState({
              newValue: value,
            })
          }
          value={this.state.newValue}
        /> }
      </div>
    );
  }
}

export default TodoListPage;