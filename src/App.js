import React, { Component } from 'react';
import './App.css';
import Page from './Page.js';
import PrevButton from './PrevButton.js';
import NextButton from './NextButton.js';
import Modal from './Modal.js';
import background from './videos/seoul.mp4';

class App extends Component {
  constructor(props) {
    super(props);
    document.title = 'SEOUL';
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      page: 0,
      image: null,
      href: null
    };
  }

  goToPrevPage() {
    this.setState((state, props) => ({
      page: state.page - 1
    }));
  }

  goToNextPage() {
    this.setState((state, props) => ({
      page: state.page + 1
    }));
  }

  openModal(image, href) {
    this.setState({
      image: image,
      href: href
    });
  }

  closeModal() {
    this.setState({
      image: null,
      href: null
    });
  }

  render() { 
    const page = this.state.page;

    return (
      <div className='App'>
        <video className='background' autoPlay muted loop>
          <source src={background} type='video/mp4' />
        </video>
        <Page page={page} openModal={this.openModal}/>
        <PrevButton page={page} goToPrevPage={this.goToPrevPage} />
        <NextButton page={page} goToNextPage={this.goToNextPage} />
        <Modal image={this.state.image} href={this.state.href} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default App;
