// 购物车

import React, { Component } from "react";
import { formatPrice } from "./util"

class ShoppingCart extends Component {

  constructor() {
    super()

    this.state = {
      books: [
        { id: 1, name: "《算法导论》", date: "2006-9", price: 85.00, count: 2 },
        { id: 2, name: "《UNIX编程艺术》", date: "2006-2", price: 59.00, count: 1 },
        { id: 3, name: "《编程珠玑》", date: "2008-10", price: 39.00, count: 1 },
        { id: 4, name: "《代码大全》", date: "2006-3", price: 128.00, count: 1 },
      ]
    }

  }

  renderCart() {
    return (
      <div>
        <h2>购物车</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>书籍名称</th>
              <th>出版日期</th>
              <th>价格</th>
              <th>购买数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.books.map((book, index) => {
                return (
                  <tr key={book.id}>
                    <td>{index}</td>
                    <td>{book.name}</td>
                    <td>{book.date}</td>
                    <td>{formatPrice(book.price)}</td>
                    <td>
                      <button disabled={book.count <= 1} onClick={e => this.changeBookCount(index, -1)}>-</button>
                      <span className="count">{book.count}</span>
                      <button onClick={e => this.changeBookCount(index, 1)}>+</button>
                    </td>
                    <td>
                      <button onClick={e => this.removeBook(index)}>删除</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <h2>总价格：{this.calculateTotalPrice()}</h2>
      </div>
    )
  }

  renderEmpty() {
    return <h2>购物车为空～</h2>
  }

  render() {
    return this.state.books.length ? this.renderCart() : this.renderEmpty()
  }

    // 计算总价格
    calculateTotalPrice() {
      const totalPrice = this.state.books.reduce((previousValue, book) => {
        return previousValue + book.price * book.count
      }, 0)
  
      return formatPrice(totalPrice)
    }
  
    // 删除书籍
    removeBook(index) {
      this.setState({
        books: this.state.books.filter((book, indey) => index !== indey)
      })
    }

    // 改变书籍数量
    changeBookCount(index, count) {
      const newBooks = [...this.state.books]
      newBooks[index].count += count;
      this.setState({
        books: newBooks
      })
    }
}

export default ShoppingCart