import React, { Component } from 'react';
import {socket} from './actions/socketActions';

// Making the App component
class App extends Component {
  state= {
    color: 'white'
  };
  
  componentDidMount() {
    socket.on('change color', (color) => {
      document.body.style.backgroundColor = color
    })
  }
  
  send = () => {
    socket.emit('change color', this.state.color);
  }
  
  setColor = (color) => {
    this.setState({ color })
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>Change Color</button>
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
      </div>
    )
  }
}


export default App;
