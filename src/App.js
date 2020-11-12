import React, { Component } from 'react';
import Congrats from "./components/Congrats";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-test='jotto-app'>
        <Congrats success={true}/>
      </div>
    );
  }
}

export default App;
