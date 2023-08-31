import styles from './TodoLists.module.scss';
import TodoItem from './TodoItem';
import { useState } from 'react';

const data = [
  { "id": 1, "task": "Suspendisse potenti.", "status": false, "due_date": "2023-04-26" },
    {
        "id": 2,
        "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "status": false,
        "due_date": "2023-05-08"
    },
    {
        "id": 3,
        "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
        "status": false,
        "due_date": "2023-04-30"
    }
]

function TodoLists() {

  const [allTodos, setAllTodos] = useState(data)
  // # Render list 1
  // const dataRender = data.map(x => (
  //   <TodoItem key={x.id} task={x.task} done={x.status} date={x.due_date} />
  // ))

  // # Render list 2
  return (
    <ul className={styles.todo__lists}>{allTodos.map(x => (
      <TodoItem 
      key={x.id} 
      task={x.task} 
      done={x.status} 
      date={x.due_date} />
    ))}
    </ul>
  )
}

export default TodoLists;
