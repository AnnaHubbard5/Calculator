import React, { Component } from 'react';


class Keypad extends Component {

  render() {
    return (
      //rows of buttons
      <div className="keypad">

        <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

        <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

        <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

        <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
        <button name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
        <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>

        <button name="Square" onClick={e => this.props.onClick(e.target.name)}>x²</button>
        <button name="Cube" onClick={e => this.props.onClick(e.target.name)}>x³</button>
        <button name="Root" onClick={e => this.props.onClick(e.target.name)}>√x</button>
        <button name="CubeRoot" onClick={e => this.props.onClick(e.target.name)}>∛x </button><br/>

        <button name=" Mod " onClick={e => this.props.onClick(e.target.name)}>Mod</button>
        <button name="Back" onClick={e => this.props.onClick(e.target.name)}>Back</button>
        <button name="C" onClick={e => this.props.onClick(e.target.name)}>Clear</button>
        <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button><br/>

        <a href="https://github.com/AnnaHubbard5" target="_blank" rel="noreferrer">
        <button2 name="GitHub">Click Me!</button2>
        </a>
      </div>
    )
  }
}

export default Keypad;
