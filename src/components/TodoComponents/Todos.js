import React, {useState} from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import TodoItem from './TodoItem'
import todoData from './todoData'


function Todos(){
    const [todos, setTodos] = useState(todoData);

    const addTodo = () => {
        setTodos([
            ...todos,
            {
                id: todos.length,
                text: Math.random() * 100,
                completed: false
            }
        ])
    };

    const todoItems = todos.map(data =>
        <TodoItem todo={data}/>
    );

    return(
        <div>
            {todoItems}
            <button onClick={() => addTodo()}>
                Click to Add a Todo
            </button>
        </div>
    );
}

export default Todos
