// 利用 ref 修改 DOM 操作
import React, { PureComponent, createRef } from 'react'

export default class RefDom extends PureComponent {

  constructor(props) {
    super(props)

    this.h3El = createRef()
  }

  render() {
    return (
      <div>
        <h3 ref={this.h3El}>Hello React</h3>
        <button onClick={e => this.changeText()}>修改DOM</button>
      </div>

    )
  }

  changeText() {
    this.h3El.current.innerHTML = "Hello Objc"
  }
}
