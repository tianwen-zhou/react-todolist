import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
   
  render() {
    const {todos} = this.props
    const {updateTodos} = this.props
    return (
      <ul className="todo-main">
          {todos.map((todo) => {
            return <Item key={todo.id} {...todo} updateTodos={updateTodos}/>
          })}
      </ul>
    )
  }
}
