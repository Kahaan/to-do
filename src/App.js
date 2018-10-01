import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
  super()
  this.state = { input:"", list:[] }
  this.add = this.add.bind(this)
  this.list = this.list.bind(this)
  }

  add(textInput){
    this.setState({input: textInput})
    console.log(this.state)
  }

  list(event){
    event.preventDefault()
    const list = this.state.list
    list.push(this.state.input)
    this.setState({input:"", list})
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <h1>TO DO LIST: MVP</h1>
        <input className="input" onChange={e => this.add(e.target.value)} type="text" placeholder="enter to do"></input>
        <br />
        <br />
        <button onClick={this.list}>Add Todo</button>

      <ul>
        {
          this.state.list.map(el => <li>{el}</li>)
        }
      </ul>
      </div>
    );
  }
}

export default App;
