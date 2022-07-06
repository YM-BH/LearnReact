import React, { Component } from 'react'
import './style.css'

export default class TabControl extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  changeItem(index) {

    // 父组件通过 props 将函数传递进来
    const { itemClick } = this.props

    itemClick(index)

    this.setState({
      currentIndex: index
    })
  }

  render() {
    const { titles } = this.props
    const { currentIndex } = this.state
    return (
      <div>
        <h2>TabControl</h2>
        <div className='tab-control'>
          {
            titles.map((item, index) => {
              return (
                <div
                  key={index}
                  className={'tab-item ' + (currentIndex === index ? 'active' : '')}
                  onClick={e => this.changeItem(index)}
                >
                  <span>{item}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
