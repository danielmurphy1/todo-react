import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
  }


  render(){
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
