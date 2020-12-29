import React, {useRef} from "react";
import EditForm from "../Components/EditForm";
import Todo from "../Components/Todo";
import TodoForm from "../Components/TodoForm";
import './TodoList.css'
import useDoubleClick from 'use-double-click'


let obj;


const List = ({onDouble, obj, removeTodo}) => {
  const buttonRef = useRef()

  useDoubleClick({
    onDoubleClick: (e) => {
      onDouble(obj)
    }, ref: buttonRef
  })


  // style={{'text-decoration':'line-through' }}
  return <div className='datar'>
    <p ref={buttonRef} className='todo'>
      {obj.text}
    </p>
     
      <button className="removeTodo" onClick={removeTodo}>x</button>

  </div>
}
class TodoListPage extends React.Component {
  state = {
    todos: [{ text: "Text 1", id:'1' }, { text: "Text 2", id:'2' }, { text: "Text 3", id:'3' }],
    newValue: "",
    inputForm: false,
    idEdit:{},
    editIndex:{},

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
    if(window.confirm('Mau di delet nih ?')){
    const remove =this.state.todos.splice(event, 1)
    this.setState({remove})
    }
  }

  removeAllTodo = (event) =>{
    if(window.confirm('Nggak nyesel nih dihapus semua kenanganya ?')){
    const allTodo = this.state.todos.length
    const remove =this.state.todos.splice(event, allTodo)
    this.setState({remove})
    }
  }


  onDoubleClick = (event) => {
    console.log('-> Edit')
    console.log(obj)
    obj = event.target.outerText
    this.setState({

      inputForm: !this.state.inputForm
    })
  }


  render() {

    // const disabled = this.state.todos.length <= 0 ? true : false
    const display = this.state.todos.length < 2 ? 'none' : ''

    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        {this.state.todos.map((todo, index) => (
          <div className="todoListAppz" key={index}>
            <div className='datar'> <div className='ceklis'> √  </div>
          <List
            onDouble={(data) => {
              console.log(data)
              this.setState({
                editIndex:data,
                inputForm: !this.state.inputForm,
                idEdit: index
              })
            }}
            obj={todo}
            removeTodo={()=> this.removeTodo(index)}
            />
            


            </div>

          </div>
        ))}
        <button className="removeAllTodo" style={{'display':`${display}`}} onClick={this.removeAllTodo}>Delete all todo</button>
        {this.state.inputForm ? <EditForm 

                  
                  onSubmit={()=> {
                    console.log(this.state.idEdit, 'ind')
                    const newData = this.state.todos.map((val, index) =>{
                      if (index === this.state.idEdit){
                        return this.state.editIndex
                      }
                      return val
                    })
                    this.setState({
                      todos:newData,
                      newValue:'',
                      inputForm:false,
                    })
                  }}
                  value={this.state.editIndex.text}

                  onValueChanged={(e)=>{
                    this.setState({
                      editIndex:{
                        ...this.state.editIndex,
                        text:e.target.value
                      }
                    })

                  }}
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