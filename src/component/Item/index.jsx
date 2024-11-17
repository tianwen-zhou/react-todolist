import React, { Component } from 'react'



export default class Item extends Component {

  constructor(){
    super()
    this.setState({showFlag: false})
  }

  state = {
    showFlag: false
  }

  handleCheck = (event)=> {
    const {id} = this.props
    this.props.updateTodos(id, event.target.checked)
  }


  handleMouse = (flag)=> {
    return (flag) =>{
      this.setState({showFlag: flag})
    }
  }

  render() {
    const {name, done} = this.props
    const {showFlag} = this.state
    console.log('showFlag',showFlag)
    return (
      <li style={{backgroundColor: showFlag? '#ddd': 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck}/>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{display:'none'}}>删除</button>
      </li>
    )
  }
}
