import React from 'react'
import styles from './TodoCreate.module.scss'

function TodoCreate() {
  return (
    <div className={styles.todo__create}>
      <span className={styles.todo__create__button}>+</span>
      <h3 className={styles.todo__create__text}>Add task</h3>
    </div>
  )
}

export default TodoCreate