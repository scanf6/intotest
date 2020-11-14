import React, { Component } from 'react';
import PropTypes from "prop-types";

class GuessedWords extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { guessedWords } = this.props;

        return (<div data-test='guessedwords-component'>
            { guessedWords.length === 0 &&
            (<div data-test='instructions'>There are no guessed words yet, please guess a word!</div>)
            }

            { guessedWords.length > 0 &&
            (<div data-test='guessed-words'>
                {guessedWords.map((guessedWord, index) => (<div data-test='guessed-word' key={index}>{guessedWord.word} with {guessedWord.numberMatch} matches</div>))}
            </div>)
            }
        </div>)
    }
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(PropTypes.shape({
        word: PropTypes.string.isRequired,
        numberMatch: PropTypes.number.isRequired,
    })).isRequired
}

export default GuessedWords;