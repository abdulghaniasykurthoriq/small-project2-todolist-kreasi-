function Todo(props) {
    return <div onDoubleClick={props.onDoubleClick} className="todo"> {props.todo.text}</div>;
  }
  
  export default Todo; 