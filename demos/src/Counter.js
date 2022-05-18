
import React, { Component } from "react";


class Counter extends Component {

  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  increment() {

    const { count } = this.state

    this.setState({
      count: count + 1
    })
  }

  decrement() {
    const { count } = this.state

    this.setState({
      count: count - 1
    })
  }

  render() {
    return (
      <div>
        <h2>计数器</h2>
        <h3>当前计数：{this.state.count}</h3>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.decrement()}>-1</button>
      </div>
    )
  }
}

export default Counter