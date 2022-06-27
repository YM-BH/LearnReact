
import React, { Component } from 'react'

class Cpn extends Component {

  componentWillUnmount() {
    console.log("调用了Cpn组件的componentWillUnmount")
  }

  render() {
    return <h2>我是Cpn组件</h2>
  }
}

// 类组件
export default class App extends Component {

  constructor() {
    super()
    console.log("调用constructor方法")
    this.state = {
      counter: 0,
      isShow: true
    }
  }

  componentDidMount() {
    console.log("调用了componentDidMount方法")
  }

  componentDidUpdate() {
    console.log("调用了componentDidUpdate")
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeCpn() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    console.log("调用了render方法")
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeCpn()}>切换</button>
        {this.state.isShow && <Cpn />}
      </div>
    )
  }
}

// 函数式组件
// export default function App() {
//   return (
//     <div>
//       <h2>不好意思，小鸡</h2>
//       <span>函数式组件</span>
//     </div>
//   )
// }