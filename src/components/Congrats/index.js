import React, { Component } from "react";
import PropTypes from "prop-types";

class Congrats extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { success } = this.props;

        if(success) {
          return (<div data-test="congrats-component">
              <div data-test='message'>Congratulations you found the word!</div>
          </div>);
        }
        else {
          return (<div data-test="congrats-component">
              <div data-test='message'></div>
          </div>);
        }
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;