import React, { Component } from 'react'



export default class Item extends Component {

  constructor(){
    super();
    this.state = {
      flag: false
    };
  }

  handleCheck = (event)=> {
    const {id} = this.props
    this.props.updateTodos(id, event.target.checked)
  }

  // handleMouse = (flag)=> {
  //   return (flag) =>{
  //     this.setState({showFlag: flag})
  //   }
  // }

  handleMouse = (flag) => {
    return () => {
      this.setState({ flag: flag }); // 更新背景色标志位
    };
  };

  handleDelete = () => {
    const {id} = this.props
    this.props.deleteTodo(id)
  };


  render() {
    const {name, done} = this.props
    const {flag} = this.state
    // console.log('showFlag',showFlag)
    return (
      <li style={{backgroundColor: flag ? '#ddd': 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck}/>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{display: flag ? '': 'none'}} onClick={this.handleDelete}>删除</button>
      </li>
    )
  }
}
