import React, { Component } from 'react';
import './App.css';

import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        username: "CRHarding",
        image: "http://images6.fanpop.com/image/photos/32800000/Thor-thor-32844898-1024-768.jpg",
        about: "Lorem ipsum dolor sit amet..."
      },
      companyInfo: {
        name: "CaseyBook",
        creator: "Casey Harding",
        social: {
          facebook: "facebook.com",
          twitter: "twitter.com",
          instagram: "instagram.com"
        }
      },
      headerInfo: {
        cta: "The Only Social Media Site You'll Ever Need!",
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header info={this.state.headerInfo} />
        <Profile data={this.state.profile} />
        <Footer info={this.state.companyInfo} />
      </div>
    );
  }
}

export default App;
