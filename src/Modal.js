import React, { Component } from 'react';
import './App.css';

class Modal extends Component {
  render() {
    const image = this.props.image;
    const href = this.props.href;
    let button;

    // No image to show
    if (image === null) {
      return null;
    }

    // Show image source if it exists
    if (href === null) {
      button = null;
    } else {
      button = <a href={href}>Image Source</a>
    }

    return (
      <div className='modal'>
        <span className="close" onClick={this.props.closeModal}>&times;</span>
        <img className='modal-image' src={image} alt='modal' />
        {button}
      </div>
    );
  }
}

export default Modal;
