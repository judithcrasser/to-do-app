import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

   const elementX = <FontAwesomeIcon icon="fa-solid fa-xmark" />
   const elementB = <FontAwesomeIcon icon="fa-solid fa-pencil" />

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }


  return todos.map((todo, index) => (
    <div 
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className="icons">
                <div onClick={() => removeTodo(todo.id)} className='delete-icon'>{elementX}</div>
                <div onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon'>{elementB}</div>
            </div>

    </div>
  ));
}

export default Todo