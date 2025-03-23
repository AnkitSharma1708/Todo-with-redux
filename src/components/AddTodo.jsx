import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'
const AddTodo = () => {
    const [input , setInput] = useState('');

    const dispatch = useDispatch()
    const addTodoHandler = (e) => { 
       e.preventDefault
       dispatch(addTodo(input))
       setInput('')
    }

  return (
   <>
     <form onSubmit={addTodoHandler}>
        <input type="text" placeholder='Enter a Todo' 
        value={input} onChange={(e) => setInput(e.target.value)}/>

        <button type='submit'>Submit</button>
     </form>
   </>
  )
}

export default AddTodo 