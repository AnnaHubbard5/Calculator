import React, { Component } from 'react';

class Answer extends Component {
  render() {
    let { ans } = this.props;
    return (
      <div className="ans">
        <p>{ ans }</p>
      </div>
    )
  }
}

export default Answer;
