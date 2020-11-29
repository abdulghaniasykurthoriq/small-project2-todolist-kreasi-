import './TodoForm.css'

function EditForm(props) {

    return (
      <form className='todo-form' onSubmit={props.onSubmit}>
        <input className='input-formz' type="text" value={props.value} onChange={props.onValueChanged} />
        <button className='submit-btn' type='submit'>Edit</button>
      </form>
    );
  }
  
  export default EditForm;