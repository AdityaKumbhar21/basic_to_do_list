import { useEffect, useState } from 'react'
import { TodoProvider } from './context/ToDoContext'
import TodoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'

function App() {
  const [todos,setTodos] = useState([])  // an array of all the todos 

  const addTodo = (todo) =>{
    setTodos((prev) =>[{id: Date.now(), ...todo}, ...prev])
  }

  const removeTodo = (id) =>{
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const updateTodo = (id, todo) =>{
      setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const isTodoCompelete = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,isCompeleted:!prevTodo.isCompeleted}: prevTodo))
  }

  //implementing local storage

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))  // displaying all the items that were already saved on the todo page
    
    if(todos && todos.length > 0){
      setTodos(todos)  // if the todos has some then add it to the todo array
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))  // setting up the items and saving it in local storage
  },[todos])



  return (
    <TodoProvider value={{todos,addTodo,updateTodo,removeTodo,isTodoCompelete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <ToDoItem todo={todo} />
                          </div>
                        ))}
            </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
