import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Form from './Components/Form';
import List from './Components/List';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addTodo(event){
    event.preventDefault();

    let newTodo = {
      id: Math.random(), 
      todoText: this.state.todoText, 
      isChecked: false
    }
    this.setState({
      todos: this.state.todos.length >= 1 ? [...this.state.todos, newTodo] : [newTodo],
      id: "", 
      todoText: "", 
      isChecked: false
    })
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  }
  
  updateTodo(todoID, isChecked) {
    this.setState(prevState => {      
      const matchingTodo = prevState.todos.find(todo => todo.id === todoID);
      const matchingTodoIndex = prevState.todos.indexOf(matchingTodo);
      prevState.todos[matchingTodoIndex].isChecked = isChecked;
      return prevState;
    })
  }

  handleDelete(todoID){
    this.setState(prevState => {
      const todos = prevState.todos.filter(todo => todo.id !==todoID);
      prevState.todos = todos
      return prevState
    })
  }

  //another way to handle both of these methods without using prevState

  // handleDelete(todoID){
  //   const todos = this.state.todos.filter(todo => todo.id !==todoID);
  //   this.setState({
  //     todos : todos
  //   })
  // }

  // updateTodo(todoID, isChecked) {
  //   const matchingTodo = this.state.todos.find(todo => todo.id === todoID);
  //   const matchingTodoIndex = this.state.todos.indexOf(matchingTodo);
  //   this.state.todos[matchingTodoIndex].isChecked = isChecked;
  //   this.setState({
  //     todos : this.state.todos
  //   })
  // }

  componentDidMount(){
    localStorage.getItem("todos") && this.setState({
      todos: JSON.parse(localStorage.getItem("todos"))
    })
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Form addTodo={this.addTodo} state={this.state} handleChange={this.handleChange}/>
        <List todos={this.state.todos} updateTodo={this.updateTodo} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;