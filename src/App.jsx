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

   updateTodos = (id, done) =>{
    const {todos} = this.state
    const newTodos = todos.map( (todo) => {
      if(todo.id === id){
        return {...todo, done:done}
      }
      //这里一定要返回，否则出现undifined
      return todo;
    })
    this.setState({todos: newTodos})
  }

  updateAllTodos = (done) =>{
    const {todos} = this.state
    const newTodos = todos.map( (todo) => {
      return {...todo, done:done};
    })
    this.setState({todos: newTodos})
  }

  deleteTodo = (id)=> {
    const {todos} = this.state
    const newTodos = todos.filter( (todo) => {
      //这里一定要返回，否则出现undifined
      return todo.id !== id;
    })
    this.setState({todos: newTodos})
  }

  deleteCheckedTodos = ()=> {
    const {todos} = this.state
    const newTodos = todos.filter( (todo) => {
      //这里一定要返回，否则出现undifined
      return todo.done === false;
    })
    this.setState({todos: newTodos})
  }

  render(){
    const {todos} = this.state
    // this.setState({todos:todos})
    
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodos={this.updateTodos} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} deleteCheckedTodos={this.deleteCheckedTodos} updateAllTodos={this.updateAllTodos}/>
        </div>
      </div>
    )
  }
} 