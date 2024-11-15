import React, {Component} from "react";
// import '../App.css';

export default class Header extends Component {

    handleKeyUp = (event)=>{
      const {keyCode, target} = event
      if(keyCode !== 13 ) return
      if(this.isEmptyOrWhitespace(target.value)){
        alert('Can not add empty todo task')
      }
      else{
        const todoObj = {id: Date.now(), name: target.value, done: false}
        this.props.addTodo(todoObj)
        target.value = ''
      }
    }

    isEmptyOrWhitespace(str) {
      return !str || str.trim().length === 0;
    }

    render(){
      return (    
        <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
      )
    }
    
}
