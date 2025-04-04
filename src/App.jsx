import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import NewTodoForm from './NewTodoForm'

function App() {
  const [completedTodos, setCompletedTodos] = useState([{ isCompleted: true, text: 'Learn React' }, { isCompleted: true, text: 'Learn Vite' }])
  const [incompleteTodos, setIncompleteTodos] = useState([{ isCompleted: false, text: 'Learn Redux' }, { isCompleted: false, text: 'Learn React Router' }])
  

  return (
    <>    
                <h1>Gagan's Todo List</h1>
    <NewTodoForm /> 
    <TodoList completedTodos={completedTodos}
      incompleteTodos={incompleteTodos} />
    </>
  )
}

export default App
