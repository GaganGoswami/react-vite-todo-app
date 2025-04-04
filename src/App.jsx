import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import NewTodoForm from './NewTodoForm'

function App() {
  const [completedTodos, setCompletedTodos] = useState([{ isCompleted: true, text: 'Learn React' }, { isCompleted: true, text: 'Learn Vite' }])
  const [incompleteTodos, setIncompleteTodos] = useState([{ isCompleted: false, text: 'Learn Redux' }, { isCompleted: false, text: 'Learn React Router' }])
  
  const markCompleted = (text) => {
    const updatedIncompleteTodos = incompleteTodos.filter(todo => todo.text !== text)
    const completedTodo = incompleteTodos.find(todo => todo.text === text)
    setCompletedTodos([...completedTodos, { ...completedTodo, isCompleted: true }])
    setIncompleteTodos(updatedIncompleteTodos)
  }
  const deleteTodo = (text) => {
    const updatedCompletedTodos = completedTodos.filter(todo => todo.text !== text)
    const updatedIncompleteTodos = incompleteTodos.filter(todo => todo.text !== text)
    setCompletedTodos(updatedCompletedTodos)
    setIncompleteTodos(updatedIncompleteTodos)
  }
  const createTodo = (text) => {
    setIncompleteTodos([...incompleteTodos, { isCompleted: false, text }])
  }

  return (
    <>    
                <h1>Gagan's Todo List</h1>
    <NewTodoForm onCreateClicked={createTodo}/> 
    <TodoList completedTodos={completedTodos}
      incompleteTodos={incompleteTodos} onCompletedClick={markCompleted} onDeleteClick={deleteTodo}/>
    </>
  )
}

export default App
