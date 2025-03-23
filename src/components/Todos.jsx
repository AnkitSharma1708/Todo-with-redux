import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'
const Todos = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
  <>
    <div>Todos</div>
    {todos.map((todo)=> {
      <li key={todo.id}>{todo.text}
       <button onClick={()=> dispatch(removeTodo(todo.id))}>Click Here </button>
      </li>
    })} 
  </>
  )
} 

export default Todos