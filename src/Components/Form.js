import React from 'react';

function Form (props){
    return(
        <form className="container" onSubmit={props.addTodo}>
            <div className="input-group">
                <input type="text" name="todoText" value={props.state.toDoText} onChange={props.handleChange} className="form-control" placeholder="Enter To Do Item Here" required></input>
                <button className="btn btn-dark ml-3" type="submit" >Add ToDo</button>
            </div>
        </form>
    )
}

export default Form;