// import React, { Component } from 'react';
// import './App.css';
//
// class App extends Component {
//   constructor(){
//   super()
//   this.state = { input:"", list:[] }
//   this.add = this.add.bind(this)
//   this.list = this.list.bind(this)
//   this.strike = this.strike.bind(this)
//   }
//
//   add(textInput){
//     this.setState({input: textInput})
//   }
//
//   list(event){
//     event.preventDefault()
//     const list = this.state.list
//     list.push(this.state.input)
//     this.setState({input:"", list})
//     console.log(this.state)
//   }
//
//   strike(item){
//     item.classlist.add("strikeThrough")
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <h1>TO DO LIST: MVP</h1>
//         <input className="input" onChange={e => this.add(e.target.value)} type="text" value={this.state.input} placeholder="enter to do"></input>
//         <br />
//         <br />
//         <button onClick={this.list}>Add Todo</button>
//
//       <ul>
//         {
//           this.state.list.map((el,idx) => <li key={idx}>{el}</li>)
//         }
//       </ul>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, {Component} from 'react'
import List from './List'
import "./App.css"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {input:"", list:[]}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(text){
    this.setState({input:text })
  }

  handleClick(){
    const list = this.state.list
    list.push(this.state.input)
    this.setState({input:"", list})
    console.log(this.state)
  }

  render (){
    return (
      <div className="App">
        <h1>TO DO LIST:</h1>
        <input className="input" placeholder=" enter to do" type="text"
          onChange={(event) => this.handleChange(event.target.value)}
          value={this.state.input}
          ></input>
        <br />
        <button onClick={this.handleClick}>Add To Do</button>
        <List list={this.state.list}/>

      </div>
    );
  }
}

export default App;
