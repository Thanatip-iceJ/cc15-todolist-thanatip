import styles from './TodoLists.module.scss';
import TodoForm from './TodoForm';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import { useState } from 'react'

function TodoLists() {

  const [isEditing, setIsEditing] = useState(true);
  const editClickHandle = () => setIsOpenForm(!isOpenForm);
  const [isOpenForm, setIsOpenForm] = useState(false)
  

  return (
    <>
    { !isOpenForm? (<ul className={styles.todo__lists}>
      <li className={styles.todo}>
        <div className={styles.todo__checkbox}>
          <HiOutlineCheck className={styles.todo__checkbox__icon} />
        </div>
        <p className={styles.todo__task}>todo-item 1 </p>
        <span className={styles.todo__date}>30 Aug</span>
        <div className={styles.todo__action}>
          <span>
            <FaPen className={styles.todo__edit} onClick={editClickHandle} />
          </span>
          <span>
            <FaTrashAlt className={styles.todo__delete} />
          </span>
        </div>
      </li>
    </ul>) : <TodoForm textSubmit='Edit Task' setIsOpenForm={setIsOpenForm}/>}
    </>
  );
}

export default TodoLists;
