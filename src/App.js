import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Gangnam from './Gangnam.js';
import Coex from './Coex.js';
import Namsan from './Namsan.js';
import Bukchon from './Bukchon.js';
import Gyeongbok from './Gyeongbok.js';
import PrevButton from './PrevButton.js';
import NextButton from './NextButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.state = {pageIndex: null};
  }

  componentDidMount() {
    this.setState({
      pageIndex: 0
    });
  }

  componentWillUnmount() {

  }

  goToPrevPage() {
    this.setState((state, props) => ({
      pageIndex: state.pageIndex - 1
    }));
  }

  goToNextPage() {
    this.setState((state, props) => ({
      pageIndex: state.pageIndex + 1
    }));
  }

  render() { 
    const pageIndex = this.state.pageIndex;
    let page;
    let prevButton;
    let nextButton;

    switch (pageIndex) {
      case 0:
        page = <Home />;
        prevButton = null;
        nextButton = <NextButton text="GANGNAM" onClick={this.goToNextPage} />;
        break;
      case 1:
        page = <Gangnam />;
        prevButton = <PrevButton text="HOME" onClick={this.goToPrevPage} />;
        nextButton = <NextButton text="COEX" onClick={this.goToNextPage} />;
        break;
      case 2:
        page = <Coex />;
        prevButton = <PrevButton text="GANGNAM" onClick={this.goToPrevPage} />;
        nextButton = <NextButton text="NAMSAN" onClick={this.goToNextPage} />;
        break;
      case 3:
        page = <Namsan />;
        prevButton = <PrevButton text="COEX" onClick={this.goToPrevPage} />;
        nextButton = <NextButton text="BUKCHON" onClick={this.goToNextPage} />;
        break;
      case 4:
        page = <Bukchon />;
        prevButton = <PrevButton text="NAMSAN" onClick={this.goToPrevPage} />;
        nextButton = <NextButton text="GYEONGBOK" onClick={this.goToNextPage} />;
        break;
      default:
        page = <Gyeongbok />;
        prevButton = <PrevButton text="BUKCHON" onClick={this.goToPrevPage} />;
        nextButton = null;
    }

    return (
      <div className="App">
        {page}
        {prevButton}
        {nextButton}
      </div>
    );
  }
}

export default App;
