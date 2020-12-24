import React from 'react';

function List (props){
    
    let todos = props.todos.map(todo => {
        return <li className="container d-flex justify-content-between mt-2" key={todo.id}>
                    <input 
                        type="checkbox" 
                        name="isChecked" 
                        value={todo.isChecked} 
                        onChange={(e) => props.updateTodo(todo.id, e.target.checked)}>
                    </input>
                    {todo.todoText}
                    {todo.isChecked === true ? 
                        <button className="btn btn-sm btn-danger" onClick={() => props.handleDelete(todo.id)}>Delete</button> : 
                        <button className="btn btn-sm btn-danger" disabled>Delete</button>}
                </li>;
    })

    return(
        <div>
            <ul className="mt-4">
                {todos}
            </ul>
        </div>
    )
}

export default List;