import React, { Component } from 'react'



export default class Item extends Component {

  handleCheck = (event)=> {
    const {id} = this.props
    console.log('@',id, event.target.checked)
      // eslint-disable-next-line array-callback-return
    this.props.updateTodos(id, event.target.checked)
  }

  render() {
    const {name, done} = this.props
    
    return (
      <li>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck}/>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{display:'none'}}>删除</button>
      </li>
    )
  }
}
