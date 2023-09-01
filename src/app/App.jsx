// Dependencies
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import {useState} from 'react'
import {nanoid} from 'nanoid'
import dayjs from 'dayjs'

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

function App() {

  const [allTodos, setAllTodos] = useState(data)
  const [isDelete, setIsDelete] = useState(false)

  const deleteTodo = (todoId) => {
    let foundedIndex = allTodos.findIndex(x => x.id === todoId)
    console.log(foundedIndex,"index")
    const allNewTodos = [...allTodos]
    allNewTodos.splice(foundedIndex, 1)
    setAllTodos(allNewTodos)
    }

    const editTodo = (todoId, newTodoObj) => {
      
      // let foundedTodo = allTodos.find(x => x.id === todoId);
      // if(!foundedTodo) return;
      // const newTodo = Object.assign({}, foundedTodo, newTodoObj);

      // let foundedIndex = allTodos.findIndex(x => x.id === todoId);
      // if(foundedIndex === -1) return;

      // const newTodoList = [...allTodos]
      // newTodoList.splice(foundedIndex, 1, newTodo)
      // setAllTodos(newTodoList)

      // Practice#2
      // const newTodoList = allTodos.map(x => {
      //   if(x.id !== todoId) return x;
      //   else return {...x, ...newTodoObj};
      // })
      
      // Practice#3
      const newTodoList = allTodos.reduce((acc,todo) => {
        if(todo.id !== todoId) acc.push(todo);
        else acc.push({...todo, ...newTodoObj});
        return acc;
      }, [])
      setAllTodos(newTodoList)
    }
  


  const addTodo = (taskName) => {
    
    const newTodo = {
      id: nanoid(),
      task: taskName,
      status: false,
      due_date: dayjs().format('YYYY-MM-DD')
    }
    setAllTodos(prev => [newTodo, ...prev])
  }

  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate 
          data={allTodos} 
          setTodo={setAllTodos} 
          addTodo={addTodo}
          />
          <TodoLists data={allTodos} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </main>
      </div>
    </div>
  );
}

export default App;
