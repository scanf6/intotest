import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div data-test='counterComponent'>
        <h2>Counter Component</h2>
        <p>COUNT: <span data-test="count">{this.state.count}</span></p>
        <button data-test='buttonCounter' onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
