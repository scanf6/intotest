import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      error: false
    };
  }

  increment = () => {
    this.setState({ error: false, count: this.state.count + 1 });
  };

  decrement = () => {
    const { count } = this.state;
    if(count === 0) {
      this.setState({ error: true });
      return;
    };
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count, error } = this.state;
    return (
      <div data-test='counter-component'>
        <h2>Counter Component</h2>
        <p>COUNT: <span data-test="count">{count}</span></p>
        <button data-test='button-counter' onClick={this.increment}>
          Increment
        </button>
        <button data-test='decrement-counter' onClick={this.decrement}>
          Decrement
        </button>

        {error && (<div data-test="error-message">Sorry we can't go below 0!!!</div>)}
      </div>
    );
  }
}

export default Counter;
