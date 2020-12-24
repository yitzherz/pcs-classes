import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.firstEntry = '';
    this.secondEntry = 0;
  }
  state = {
    result: ''
  };

  add = () => {
    const entry = document.getElementById('entryInput');
    if (entry.value) {
      if (!this.state.result  && !this.firstEntry) {
        this.firstEntry = Number(entry.value);
        entry.value = '';
      } else if(this.firstEntry && !this.state.result){
        this.setState({
          result: this.firstEntry + Number(entry.value)
        });
      }else{
        this.setState({
          result: this.state.result + Number(entry.value)
        });
        console.log(this.state.result);
        entry.value = '';
      }
    }
  };
  calculate = e => {
    const entry = document.getElementById('entryInput');
    if (entry.value) {
      if (!this.state.result) {
        this.secondEntry = Number(entry.value);
        this.setState({
          result: this.firstEntry + this.secondEntry
        });
      } else {
        this.setState({
          result: this.state.result + Number(entry.value)
        });
      }
      entry.value = '';
    }
  };

  render() {

    const numInput = <input id="entryInput" type="number" />;

    return (
      <div>
        <h1>Calculator App</h1>
        { numInput}
        <hr></hr>
        <button onClick={this.add}>+</button>
        <button onClick={this.calculate}>=</button>
        <hr></hr>
        <h3>{this.state.result}</h3>
      </div >
    );
  }
}

