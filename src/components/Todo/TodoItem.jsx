import React from 'react'
import { useState } from 'react'
import styles from './TodoItem.module.scss'
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm';


function TodoItem({task, done, date}) {

    // const {task, done, date} = props;

    const editClickHandle = () => setIsOpenForm(!isOpenForm);
    const [isOpenForm, setIsOpenForm] = useState(false)



  return (
    <>
    { isOpenForm? (<TodoForm textSubmit='Edit Task' setIsOpenForm={setIsOpenForm} />) : (<li className={styles.todo}>
    <div className={`${styles.todo__checkbox} ${done ? styles.todo__checkbox__done : ''}`}>
      <HiOutlineCheck className={styles.todo__checkbox__icon} />
    </div>
    <p className={`${styles.todo__task} ${done? styles.todo__task__done : ''}`}>{task}</p>
    <span className={styles.todo__date}>30 Aug</span>
    <div className={styles.todo__action}>
      <span>
        <FaPen className={styles.todo__edit} onClick={editClickHandle} />
      </span>
      <span>
        <FaTrashAlt className={styles.todo__delete} />
      </span>
    </div>
  </li>)}
    </>
  )
}

export default TodoItem