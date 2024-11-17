import React, { Component } from 'react'

export default class Footer extends Component {
  handleDelete = ()=> {
    this.props.deleteCheckedTodos()
  }
  
  handleCheck = (event) => {
    this.props.updateAllTodos(event.target.checked)
  }
  
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre, todo) => {return pre + (todo.done ? 1 : 0) }, 0)
    return (
      <div className="todo-footer">
          <label>
            <input type="checkbox" checked={doneCount === todos.length && todos.length !== 0} onClick={this.handleCheck}/>
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{todos.length}
          </span>
          <button className="btn btn-danger" onClick={this.handleDelete}>清除已完成任务</button>
      </div>
    )
  }
}
