import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-test='appComponent'>
        <Counter />
      </div>
    );
  }
}

export default App;
