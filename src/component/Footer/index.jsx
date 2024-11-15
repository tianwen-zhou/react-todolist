import React, { Component } from "react";
// import '../App.css';

export default class Footer extends Component {
   
  handleCheckAll = (event)=> {
    // console.log(event.target.checked)
    this.props.checkAll(event.target.checked)
  }

  handleDeleteAllDone = ()=> {
    // console.log(event.target.checked)
    if(window.confirm('Are you sure to delete?')){
      this.props.deleteAllDone()
    }
  }

  render(){
    const {todos} = this.props
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1: 0), 0)
    const allCount = todos.length
    return (    
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === allCount && allCount !== 0 ? true : false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{allCount}
        </span>
        <button className="btn btn-danger" onClick={this.handleDeleteAllDone}>清除已完成任务</button>
      </div>
    )
  }
    
}
