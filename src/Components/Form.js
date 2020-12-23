import React from 'react';

function Form (){
    return(
        <form className="container">
            <div className="input-group">
                <input type="text" name="todoText" className="form-control" placeholder="Enter To Do Item Here"></input>
                <button className="btn btn-dark ml-3" type="submit">Add ToDo</button>
            </div>
        </form>
    )
}

export default Form;