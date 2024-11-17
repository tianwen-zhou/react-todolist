import React, { Component } from 'react'

export default class Header extends Component {
  handleKeyDown = (event)=> {
    if(event.key === 'Enter' && event.target.value.trim() !== ''){
      console.log(event.key)
      console.log(event.target.value)
      const todoObj = {id:'005',name:event.target.value, done: false}
      this.props.addTodo(todoObj)
    }
  }

  render() {
    

    return (
      <div className="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyDown={this.handleKeyDown}/>
      </div>
    )
  }
}
