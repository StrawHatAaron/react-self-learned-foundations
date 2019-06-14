import React, { useState, useEffect } from "react";
import axios from "axios";
import MakeRequest from './MakeRequest'


export default function MemeRequest() {
    const todosApi = "https://jsonplaceholder.typicode.com/todos";
    const [count, setCount] = useState(1);
    const todo = MakeRequest({
        method: "GET",
        url: `${todosApi}/${count}`
    });
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Next Todo</button>
            <h1>Todo {count}</h1>
            <div>
                {(todo.pending && "Loading...") || (todo.complete && todo.data.title)}
            </div>
        </div>
    );
}
