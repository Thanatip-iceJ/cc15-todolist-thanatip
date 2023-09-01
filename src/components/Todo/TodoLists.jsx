import styles from './TodoLists.module.scss';
import TodoItem from './TodoItem';
import { useState } from 'react';


function TodoLists(props) {

  // # Render list 1
  // const dataRender = data.map(x => (
  //   <TodoItem key={x.id} task={x.task} done={x.status} date={x.due_date} />
  // ))

  // # Render list 2
  return (
    <ul className={styles.todo__lists}>{props.data.map(x => (
      <TodoItem 
      key={x.id}
      id={x.id} 
      task={x.task} 
      done={x.status} 
      date={x.due_date}
      deleteTodo={props.deleteTodo} 
      editTodo={props.editTodo}
      />
    ))}
    </ul>
  )
}

export default TodoLists;
