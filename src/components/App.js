import React, { Component } from 'react';
import Form from './Form/Form';
import Result from './Result/Result';
import './App.css';

class App extends Component {
  state = {
    value: ""
  }

  inputChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          inputChange={this.inputChangeHandler} />
        <Result />
      </div>
    );
  }
}

export default App;
