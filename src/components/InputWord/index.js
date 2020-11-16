import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputWord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { success } = this.props;
        if(!success) return (
        <>
          <input data-test='input-component' type="text" placeholder="write your guessed word here..." />
          <button data-test="input-button">Submit</button>
        </>)
    }
}

const mapStateToProps = state =>({
    success: state.success
});

export default connect(mapStateToProps)(InputWord)