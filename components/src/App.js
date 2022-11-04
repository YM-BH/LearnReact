
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slot from './Slot'


// 创建 context
const HeaderContext = React.createContext({
  name: "默认值：Kevin",
  age: 29
})

// 函数组件，利用 context 进行跨组件通信
function Footer() {
  return (
    <HeaderContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>{value.name}</h2>
              <h2>{value.age}</h2>
            </div>
          )
        }
      }
    </HeaderContext.Consumer>
  )
}

// 利用 context 进行跨组件通信
class Header extends Component {
  render() {

    return (
      <div>
        <h3>跨组件通信，传递的context：{this.context.name}</h3>
      </div>
    )
  }
}

Header.contextType = HeaderContext

// 子组件
class ChildCpn extends Component {

  render() {
    const { name, age, height } = this.props
    return (
      <div>
        <h2>父组件传递值到子组件:{"name is " + name + ", age is " + age + ", height is " + height}</h2>
        <Header />
      </div>
    )
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
    <div>
      <ul>
        {
          hobbies.map((hobby, index) => {
            return <li key={index}>{hobby}</li>
          })
        }
      </ul>
      <Footer />
    </div>

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

    const { increment } = this.props

    return (
      <div>
        <h2>我是Cpn组件,组件间通信-子传父</h2>
        {/* 通过父组件的属性，调用父组件的方法 */}
        <button onClick={increment}>子组件按钮</button>
      </div>
    )
  }
}

// 类组件
export default class App extends Component {

  constructor() {
    super()
    console.log("调用constructor方法")
    this.state = {
      counter: 0,
      isShow: true,
      name: "Lebron",
      age: 38
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
        <Slot
          leftSlot={<span>aaa</span>}
          centerSlot={<strong>bbb</strong>}
          rightSlot={<span>ccc</span>}
        />
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeCpn()}>切换</button>
        {this.state.isShow && <Cpn increment={e => this.increment()} />}
        <ChildCpn name="LBJ" age={38} height={2.03} />
        {/* 利用 context 跨组件传值 */}
        <HeaderContext.Provider value={this.state}>
          <ChildCpn />
        </HeaderContext.Provider>

        <HeaderContext.Provider value={this.state}>
          <ChildCpn1 hobbies={["NBA", "NFL", "CBA", "MLB"]} />
        </HeaderContext.Provider>
      </div>
    )
  }
}
