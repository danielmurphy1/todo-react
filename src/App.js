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
      todos: ["Test 1", "Test 2", "Test 3"]
    }
  }


  render(){
    return (
      <div className="App">
        <Header />
        <Form />
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;