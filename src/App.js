import React, { Component } from 'react';
import Congrats from "./components/Congrats";
import InputWord from "./components/InputWord";
import { connect } from 'react-redux';
import GuessedWords from "./components/GuessedWords";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { success, guessedWords } = this.props;
    return (
      <div data-test='jotto-app'>
        <Congrats success={success}/>
        <InputWord/>
        <GuessedWords guessedWords={guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  success: state.success,
  guessedWords: state.guessedWords
});

export default connect(mapStateToProps)(App);
