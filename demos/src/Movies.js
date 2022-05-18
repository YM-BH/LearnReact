
import React, { Component } from 'react'

class Movies extends Component {

  constructor() {
    super()

    this.state = {
      movies: ['我不是药神', '三傻大闹宝莱坞', '绿皮书', '阿甘正传', '我是谁']
    }

  }

  render() {

    const movies = this.state.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })

    return (
      <div>
        <h2>电影列表</h2>
        <ul>{movies}</ul>
      </div>
      
    )
  }
}

export default Movies