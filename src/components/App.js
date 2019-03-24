import React, { Component } from 'react';
import Form from './Form/Form';
import Result from './Result/Result';
import './App.css';

const APIkey = '9cb506a12379e91097ea37e115e442a2';

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
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`;

    fetch(API)
      .then(res => {
        if (res.ok) {
          return res;
        }
        throw Error("Could not get a response");
      })
      .then(res => res.json())
      .then(data => {
        const time = new Date().toLocaleString();
        this.setState(prevState => ({
          date: time,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          err: false
        }));
      })
      .catch(error => {
        console.log(error)
        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }));
      });
  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          submitCity={this.submitCityHandler}
          inputChange={this.inputChangeHandler} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
