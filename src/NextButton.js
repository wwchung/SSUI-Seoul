import React, { Component } from 'react';
import './App.css';

class NextButton extends Component {
  constructor(props) {
    super(props);
    this.labels = ['HOME', 'GANGNAM', 'COEX', 'BONGEUNSA', 'NAMSAN', 'BUKCHON', 'ATTRIBUTIONS'];
  }

  render() {
    const page = this.props.page;

    // Last page does not have a next button
    if (page === 6) {
      return null;
    }

    return (
      <div className='button next' onClick={this.props.goToNextPage}>
        {/* https://material.io/tools/icons/ */}
        <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path opacity='.87' fill='none' d='M24 24H0V0h24v24z'/><path d='M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z'/></svg>
        <h5>{this.labels[page + 1]}</h5>
      </div>
    );
  }
}

export default NextButton;
