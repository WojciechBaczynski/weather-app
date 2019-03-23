import React, { Component } from 'react';
import Form from './Form/Form';
import Result from './Result/Result';
import './App.css';

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: ""
  }

  inputChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  submitCityHandler = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=9cb506a12379e91097ea37e115e442a2`;

    fetch(API)
      .then(res => {
        if (res.ok) {
          return res;
        }
        throw Error("Could not get a response");
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          submitCity={this.submitCityHandler}
          inputChange={this.inputChangeHandler} />
        <Result />
      </div>
    );
  }
}

export default App;
