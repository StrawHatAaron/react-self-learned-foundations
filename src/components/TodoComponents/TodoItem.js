import React, {useState} from 'react'

function TodoItem(props) {

    const [check, setCheck] = useState(props.todo.completed);

    const crossedOutStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return(
        <div className="todo-item">
            <input
                type="checkbox"
                checked={check}
                onChange={() => setCheck(!check)}
            />
            <p style={check ? crossedOutStyle : null}>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem