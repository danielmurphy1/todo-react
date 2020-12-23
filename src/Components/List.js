import React from 'react';

function List (props){
    
    let todos = props.todos.map(todo => {
        return <li className="container d-flex justify-content-around mt-2">
                    <input type="checkbox"></input>
                    {todo}
                    <button className="btn btn-sm btn-danger">Delete</button>
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