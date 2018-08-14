import React, { Component } from 'react';
import { socket } from './actions/socketActions';
import LandingPageComponent from './components/LandingPage/LandingPageComponent';

// Making the App component
class App extends Component {
  state = {
    color: 'white'
  };

  componentDidMount() {
    // socket.on('change color', (color) => {
    //   document.body.style.backgroundColor = color
    // })
  }

  send = () => {
    socket.emit('change color', this.state.color);
  }

  setColor = (color) => {
    this.setState({ color })
  }

  render() {
    return (
      <LandingPageComponent />
    )
  }
}


export default App;
