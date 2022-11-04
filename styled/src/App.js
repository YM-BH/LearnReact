import React, { PureComponent } from 'react'

import {
  HomeWrapper
} from './style'

export default class App extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      bgColor: '#ffdd33'
    }
  }

  render() {
    return (
      <div>
        <HomeWrapper bgColor={this.state.bgColor}>
          <p className='title'>这是一个段落</p>
          <span className='content'>这是一段文字</span>
          <ul>
            <li>banner1</li>
            <li className='active'>banner2</li>
            <li>banner3</li>
            <li>banner4</li>
          </ul>
        </HomeWrapper>
      </div>
    )
  }
}
