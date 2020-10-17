import React, { Component } from "react";

class Sayac extends Component {
  state = {
    numara: 0,
  };

  arttir = () => {
    this.setState({
      numara: ++this.state.numara,
    });
  };

  azalt = () => {
    this.setState({
      numara: --this.state.numara,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.numara}</h1>
        <button onClick={this.arttir}>+</button>
        <button onClick={this.azalt}>-</button>
      </div>
    );
  }
}

export default Sayac;
