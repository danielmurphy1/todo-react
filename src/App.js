import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Form from './Components/Form';
import List from './Components/List';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          id: Math.random(),
          todoText: "Test 1",
          isChecked: false
        }, 
        {
          id: Math.random(),
          todoText: "Test 2",
          isChecked: false
        }, 
        {
          id: Math.random(),
          todoText: "Test 3",
          isChecked: false
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event){
    event.preventDefault();

    let newTodo = {
      id: Math.random, 
      todoText: this.state.todoText, 
      isChecked: false
    }
    this.setState({
      todos: this.state.todos.length >= 1 ? [...this.state.todos, newTodo] : [newTodo],
      id: "", 
      isChecked: false
    })
  }

  handleChange(event){
    const {name, value, checked, type} = event.target;
    this.setState({
      [name] : type === "checkbox" ? checked : value
    })
  }  

  render(){
    return (
      <div className="App">
        <Header />
        <Form addTodo={this.addTodo} state={this.state} handleChange={this.handleChange}/>
        <List todos={this.state.todos} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;