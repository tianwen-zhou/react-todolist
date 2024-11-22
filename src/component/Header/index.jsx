import React, { Component } from 'react'

export default class Header extends Component {
  handleKeyDown = (event)=> {
    if(event.key === 'Enter'){
      if( event.target.value.trim() !== ''){
          // const todoObj = {id: Date.now().toString(),name:event.target.value, done: false}
          this.props.addTodo(event.target.value)
          event.target.value = ''
         }
         else{
            alert('please input valid words!')
         }
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
