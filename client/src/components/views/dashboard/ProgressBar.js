import React from 'react';
import ProgressBar from 'react-bootstrap/esm/ProgressBar.js';
import {Component} from "react";

  export class TestProgress extends Component {
    constructor(props) {
      super(props);
      this.passValue = props.pass;
      this.failValue = props.fail;
    }
    setBorder(value) {
      let result = "";
      if (value === 0) {
        result = " zero"
        console.log(result);
      }
      return result
    }
  render () {
    return (
      <ProgressBar>
        <ProgressBar className={"passing" + this.setBorder(this.passValue)} now={this.passValue} key={1} />
        <ProgressBar className={"failing" + this.setBorder(this.failValue)} now={this.failValue} key={2} />
      </ProgressBar>
    )
  };
}
