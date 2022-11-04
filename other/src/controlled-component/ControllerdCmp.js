import React, { PureComponent } from 'react'

export default class ControllerdCmp extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      username: "",
      fruit: "banana"
    }
  }

  render() {
    return (
      <div>
        <h2>受控组件</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：<input
              type="text"
              id="username"
              onChange={e => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
          <div>
            <select 
              name="fruit"
              value={this.state.fruit}
              onChange={e => this.handleChange(e)}
            >
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
              <option value="orange">橘子</option>
            </select>
          </div>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      username: event.target.value,
      fruit: event.target.value
    })
  }

  handleSubmit(event) {
    // 阻止提交的默认行为
    event.preventDefault()
    console.log("提交的内容是：", this.state.username)
    console.log("选择的水果是：", this.state.fruit)
  }
}
