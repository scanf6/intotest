import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class InputWord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { success } = this.props;
        if(success) return (<input data-test='input-component' type="text" placeholder="write your guessed word here..." />)
    }
}

InputWord.propTypes = {
    success: PropTypes.bool.isRequired
}
export default InputWord