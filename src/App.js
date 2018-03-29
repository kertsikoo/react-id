import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 0, name: "Pekka ", item: "User 1" },
        { id: 1, name: "Simo ", item: "User 2" },
        { id: 2, name: "Matti ", item: "User 3" },
        { id: 3, name: "Outi ", item: "User 4" },
        { id: 4, name: "Pirkko ", item: "User 5" },
        { id: 5, name: "Maija ", item: "User 6" },
      ],
      id: ''
    }
  }

  handleClick(id, e) {
    this.setState({ id })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ID Example</h1>
        </header>
        <ul id="todo" className="List-style">
          {this.state.items.map((item, i) =>
            <li
              className='list-group-item List-item'
              key={i}
              data-id={item.id}>
              {item.item}
              <button
                className="Button-style"
                onClick={this.handleClick.bind(this, item.name + item.id)}
              >
                Click Me
            </button>
            </li>
          )}
        </ul>
        <div>{this.state.id}</div>
      </div>
    );
  }
}

export default App;

