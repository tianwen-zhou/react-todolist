import logo from './logo.svg';
import React, { Component} from 'react';
import './App.css';
import Footer from './component/Footer'
import Header from './component/Header'
import List from './component/List'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    todos: [
      {id:'001', name:'coding', done: true},
      {id:'002', name:'sleeping', done: true},
      {id:'003', name:'reading', done: false},
      {id:'004', name:'talking', done: false},
    ],
  };

   addTodo = (todoObj) =>{
     const {todos} = this.state
     const newTodos = [todoObj, ...todos]
     this.setState({todos: newTodos})
   }

  render(){
    const {todos} = this.state
    // this.setState({todos:todos})
    
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos}/>
          <Footer/>
        </div>
      </div>
    )
  }
} 