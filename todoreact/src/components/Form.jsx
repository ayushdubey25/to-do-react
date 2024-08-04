import React, {useState} from 'react'

export const Form = ({addTodo}) => {
    const [value,setValue]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(value){
            addTodo(value);
            setValue("");
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='TodoForm'>
            <input 
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            className='todo-input'
            placeholder="What's your task today?" />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    </div>
  )
}
