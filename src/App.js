import React, { Component } from 'react';
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-test='jotto-app'>
        <Congrats success={false}/>
        <GuessedWords guessedWords={[]}/>
      </div>
    );
  }
}

export default App;
