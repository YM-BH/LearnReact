
import React, { Component } from "react";
import Movies from './Movies'
import Counter from './Counter'
import ShoppingCart from "./ShoppingCart";
import TabControl from "./TabControl";

class App extends Component {

  constructor(props) {
    super(props)

    this.titles = ['精选', '新款', "折扣"]
    this.state = {
      currentTitle: '精选'
    }
  }

  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index]
    })
  }

  render() {
    return (
      <div>
        <TabControl titles={this.titles} itemClick={index => this.itemClick(index)}/>
        <h2>{this.state.currentTitle}</h2>
        <br />
        <Movies />
        <br />
        <Counter />
        <br />
        <ShoppingCart />
      </div>
    )
  }
}

export default App