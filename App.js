import React, { Component } from 'react';
import './index.css';
import Wrapper from './components/Wrapper.js'
import Answer from './components/Answer.js';
import Keypad from './components/Keypad.js';



class App extends Component {
  state = {
    ans: ""
  }

  onClick = button => {
    if(button === "="){
      this.calculate();
    }
    else if(button === "C"){
      this.reset();
    }
    else if(button === "Back"){
      this.backspace();
    }
    else if(button === "%"){
      this.percent();
    }
    else if(button === "Square"){
      this.square();
    }
    else if(button === "Cube"){
      this.cube();
    }
    else if(button === "Root"){
      this.root();
    }
    else if(button === "CubeRoot"){
      this.cubeRoot();
    }
    else {
      this.setState({
        ans: this.state.ans + button
      })
    }
  };

  calculate = () => {
    var checkAns = ''
    if(this.state.ans.includes('--')) {
      checkAns = this.state.ans.replace('--', '+') //fix double negative -> make positive
    }
    else {
      checkAns = this.state.ans;
    }

    //mak Mod button work
    if(this.state.ans.includes('Mod')) {
      checkAns = this.state.ans.replace('Mod', '%') //fix double negative -> make positive
    }
    else {
      checkAns = this.state.ans;
    }


    try {
      this.setState({
        ans: (eval(checkAns) || "") + ""
      })
    } catch(e) { //invalid input by user -> error
      this.setState({
        ans: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      ans: "" //clear ans to blank
    })
  };

  backspace = () => {
    this.setState({
        ans: this.state.ans.slice(0, -1) //cut off right most element of ans
    })
  };

  percent = () => {
    this.setState({
      ans: (this.state.ans /= Math.pow(100, 1))
      })
  };


  square = () => {
    this.setState({
      ans: (this.state.ans *= this.state.ans)
      })
  };

  cube = () => {
    this.setState({
      ans: (this.state.ans *= this.state.ans * this.state.ans)
      })
  };

  root = () => {
    this.setState({
      ans: (this.state.ans = Math.pow(this.state.ans, 1/2))
      })
  };

  cubeRoot = () => {
    this.setState({
      ans: (this.state.ans = Math.pow(this.state.ans, 1/3))
      })
  };


  render() {
    return (
      <div>
        <div className="wrapper">
          <h1 className="title">Calculator</h1>
          <Answer ans={this.state.ans} />
          <Keypad onClick={this.onClick} />
        </div>
      </div>
    )
  }

}

export default App;
