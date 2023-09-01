import React from 'react'
import { useState } from 'react'
import styles from './TodoItem.module.scss'
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm';


function TodoItem({id, task, done, date, deleteTodo, editTodo}) {

    // const {task, done, date} = props;

    const editClickHandle = () => setIsOpenForm(!isOpenForm);
    
    const [isOpenForm, setIsOpenForm] = useState(false)

    const toggleStatus = () => {
      const newTodoObj = {id, task, date, status: !done}
      editTodo(id, {status: !done})
      console.log(newTodoObj)
    }


  return (
    <>
    { isOpenForm? (<TodoForm 
    textSubmit='Edit Task' 
    setIsOpenForm={setIsOpenForm}
    editTodo={editTodo}
    oldTodo={{id, task, done, date}}
    />
    ) : (
    <li className={styles.todo}>
    <div className={`${styles.todo__checkbox} ${done ? styles.todo__checkbox__done : ''}`}>
      <HiOutlineCheck className={styles.todo__checkbox__icon} onClick={toggleStatus} />
    </div>
    <p className={`${styles.todo__task} ${done? styles.todo__task__done : ''}`}>{task}</p>
    <span className={styles.todo__date}>{date}</span>
    <div className={styles.todo__action}>
      <span>
        <FaPen className={styles.todo__edit} onClick={editClickHandle} />
      </span>
      <span>
        <FaTrashAlt className={styles.todo__delete} onClick={()=>deleteTodo(id)}/>
      </span>
    </div>
  </li>)}
    </>
  )
}

export default TodoItem