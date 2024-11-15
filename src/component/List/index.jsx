import React, {Component} from "react";
import Item from '../Item'
import { ToastBody } from "react-bootstrap";


export default class List extends Component {
   render(){
    const {todos, updateTodo, removeTodo} = this.props
    // console.log(this.props.todos)
    return (    
      <ul className="todo-main">
        {
          todos.map( todo=>{
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
          })
        }
      </ul>
    )
   } 
}
