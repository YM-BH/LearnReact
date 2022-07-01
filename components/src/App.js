
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 子组件
class ChildCpn extends Component {

  render() {
    const { name, age, height } = this.props
    return <h2>父组件传递值到子组件:{"name is " + name + ", age is " + age + ", height is " + height}</h2>
  }
}

// 规定属性的类型
ChildCpn.propTypes = {
  // isRequired 必传
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number
}

// 给属性设置默认值
ChildCpn.defaultProps = {
  name: "White",
  age: 33,
  height: 1.59
}


// 函数组件
function ChildCpn1(props) {

  const { hobbies } = props
  return (
    <ul>
      {
        hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>
        })
      }
    </ul>
  )
}

ChildCpn1.propTypes = {
  hobbies: PropTypes.array
}

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
        <ChildCpn name="LBJ" age={38} height={2.03} />
        <ChildCpn />
        <ChildCpn1 hobbies={["NBA", "NFL", "CBA", "MLB"]} />
      </div>
    )
  }
}
