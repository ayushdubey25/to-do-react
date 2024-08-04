import React, {useState} from 'react'
import { Form } from './Form'
import {v4 as uuidv4} from "uuid";
import { EditTodoForm } from './EditTodoForm';
import { Todo } from './Todo';

export const Wrapper = () => {
  const [todos, setTodos]=useState([]);

  //To add task
const addTodo=(todo)=>{
setTodos([
  ...todos,{id:uuidv4(), task:todo, completed:false, isEditing:false}
]);
}

//Task Deleted
const deleteTodo=(id)=> setTodos(todos.filter((todo)=>todo.id!==id));


//Toggle Complete Tasks
const toggleComplete=(id)=>{
  setTodos(
    todos.map((todo)=>todo.id===id ? {...todo, completed:!todo.completed}:todo)
  )
}

//EditTodo
const editTodo=(id)=>{
  setTodos(
    todos.map((todo)=>todo.id===id?{...todo, isEditing:!todo.isEditing}:todo)
  )
}

const editTask=(task,id)=>{
  setTodos(
    todos.map((todo)=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo)
  )
}

console.log("todo,=", todos)
  return (
    <>
    <div className='TodoWrapper'>
        <h1>Your Tasks.</h1>
        <Form addTodo={addTodo}/>

     
        {todos.map((todo)=>todo.isEditing?
        (<EditTodoForm editTodo={editTask} task={todo}/>):
        (<Todo key={todo.id} task={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo}/>))}
    </div>
    </>
  )
}
