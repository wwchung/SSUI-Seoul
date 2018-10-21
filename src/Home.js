import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <video className="background" autoPlay muted loop>
          <source src={require('./videos/seoul.mp4')} type="video/mp4" />
        </video>
        <div className="content">
          <div>
            <h1>Seoul</h1>
            <h3>South Korea</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
