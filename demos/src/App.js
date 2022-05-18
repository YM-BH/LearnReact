
import React, { Component } from "react";
import Movies from './Movies'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div>
        <Movies />
        <Counter />
      </div>
    )
  }
}

export default App