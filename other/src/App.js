
import React, { PureComponent } from 'react'
import RefDom from './ref-dom/RefDom'
import ControllerdCmp from './controlled-component/ControllerdCmp'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>利用ref修改DOM</h2>
        <RefDom />
        <ControllerdCmp />
      </div>
    )
  }
}
