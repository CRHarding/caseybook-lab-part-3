import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        username: "CRHarding",
        image: "http://images6.fanpop.com/image/photos/32800000/Thor-thor-32844898-1024-768.jpg",
        about: "Lorem ipsum dolor sit amet..."
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Profile page!</h1>
        <p>{this.state.profile.username}</p>
        <img src={this.state.profile.image} alt="user" />
        <p>{this.state.profile.about}</p>
      </div>
    );
  }
}

export default App;
