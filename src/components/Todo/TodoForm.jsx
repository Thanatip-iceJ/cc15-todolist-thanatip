import styles from './TodoForm.module.scss';
import {Button} from '../Common/Button/Button'
import {useState} from 'react'
import {nanoid} from 'nanoid'


/*
  props = {
    textSubmit = string
    setIsOpenForm = fn
  }
*/

// Archieve  <input className={styles.todo__form__input} placeholder='Task Name' onChange={e => setInput(e.target.value)}/>


function TodoForm(props) {

  const [input, setInput] = useState('')
  const [isError, setIsError] = useState(false)
  const [taskInput , setTaskInput] = useState(props.oldTodo?.task || '')

  const handleChangeInput = (event) => {
    // console.log('user is typing...', event.target.value);
    if(isError) setIsError(false)
    setTaskInput(event.target.value)
    // console.log(taskInput)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(taskInput.trim() === '') {
      setIsError(true)
      return;
    } 

      if(props.addTodo) props.addTodo(taskInput)
      else if(props.editTodo && props.oldTodo) {
        props.editTodo(props.oldTodo.id, { task: taskInput })
      }

      props.setIsOpenForm(false)
    }
  
  const handleCancel = () => {
    props.setIsOpenForm(false)
  }

  return (
    <form 
    className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' value={taskInput} onChange={handleChangeInput}/>

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError? <p className={styles.todo__error}>Title is required</p> : null}
        <div className={styles.todo__form__buttons}>
          <Button text='Cancel' active={false} type='button'onClick={handleCancel}/>
          <Button text={props.textSubmit} active={true} onClick={props.editTodo} />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
