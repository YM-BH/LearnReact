
import React, { Component } from "react";
import Movies from './Movies'
import Counter from './Counter'
import ShoppingCart from "./ShoppingCart";

class App extends Component {
  render() {
    return (
      <div>
        <Movies />
        <br />
        <Counter />
        <br />
        <ShoppingCart />
      </div>
    )
  }
}

export default App