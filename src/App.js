import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  timer = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(e.target.value)
  }
  msToTime = (props) => {
    var seconds = parseInt((props / 1000) % 60)
      , minutes = parseInt((props / (1000 * 60)) % 60)
      , hours = parseInt((props / (1000 * 60 * 60)) % 24);
      
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + " : " + minutes + " : " + seconds;
  }
  render() {
    let x = this.state.value
    return (
      <div className="App">
        <h1>Merci de saisir le nombre à convertir !</h1>
        <input type="text" name="fname"
          value={this.state.value}
          onChange={this.timer} />
        <div className="result">
          <p className="resultat">{this.msToTime(x)}</p>
          <div className="description">
            <p>Hour</p>
            <p>Minute</p>
            <p>Second</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;