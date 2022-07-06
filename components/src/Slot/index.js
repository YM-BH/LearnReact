import React, { Component } from 'react'

import './style.css'

export default class Slot extends Component {
  render() {

    const { leftSlot, centerSlot, rightSlot } = this.props

    return (
      <div className='slot'>
        <div className='left-slot common'>{leftSlot}</div>
        <div className='center-slot common'>{centerSlot}</div>
        <div className='right-slot common'>{rightSlot}</div>
      </div>
    )
  }
}
