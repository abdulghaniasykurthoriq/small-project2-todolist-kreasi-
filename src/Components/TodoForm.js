import './TodoForm.css'

function TodoForm(props) {
    return (
      <form className='todo-form' onSubmit={props.onSubmit}>
        <input className='input-formz' type="text" value={props.value} onChange={(e) => props.onValueChange(e.target.value)} />
        <button className='submit-btn' type='submit'>add</button>
      </form>
    );
  }
  
  export default TodoForm;