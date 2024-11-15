import React, { Component } from "react";
// import '../App.css';

export default class Item extends Component {
  
  state = {mouse: false} 

  handleMouse = (flag) =>{
    return ()=>{
      this.setState({mouse:flag})
      // console.log(flag)
    }
  }

  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked)
      this.props.updateTodo(id, event.target.checked)
    }
  }

  handleDelete = (id) => {
    return () => {
      if(window.confirm('Are you sure delete?')){
      // console.log(id, event.target.checked)
        this.props.removeTodo(id)
      }
    }
  }

  render(){
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (    
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? '' :'none'}} onClick={this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
