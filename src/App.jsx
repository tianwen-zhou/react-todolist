import logo from './logo.svg';
import React, {createContext, Component} from 'react';
import './App.css';
import Footer from './component/Footer'
import Header from './component/Header'
import List from './component/List'

export const AppContext = createContext();

export default class App extends Component {
   
  // initialValue = sessionStorage.getItem('todos') ? JSON.parse(sessionStorage.getItem('todos')) : null;

  //存储数据到state
   state = {todos: [
    {id:'001', name:'eating', done: true},
    {id:'002', name:'sleeping', done: true},
    {id:'003', name:'coding', done: false},
   ]}

  //  // 存储数据
  // sessionStorage.setItem('state', state);

  // 获取数据
  // value = sessionStorage.getItem('key');
  // console.log(value); // 输出 'value'

   addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
   }

   removeTodo = (id) => {
    const {todos} = this.state
    // eslint-disable-next-line array-callback-return
    const newTodos = todos.filter( todo => {
      if(todo.id !== id) return true
    })
    this.setState({todos: newTodos})
   }

   deleteAllDone = () => {
    const {todos} = this.state
    // eslint-disable-next-line array-callback-return
    const newTodos = todos.filter( todo => {
      return !todo.done
    })
    this.setState({todos: newTodos})
   }

   updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map( todo =>{
      if(todo.id === id) return {...todo, done}
      return todo
    })
    this.setState({todos: newTodos})
   }

   checkAll = (done) => {
    const {todos} = this.state
    const newTodos = todos.map( todo =>{
      return {...todo, done}
    })
    this.setState({todos: newTodos})
   }
  
  render() {
    const {todos} = this.state
    return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo = {this.addTodo}/>
        <List todos = {todos} updateTodo={this.updateTodo} removeTodo = {this.removeTodo}/>
        <Footer todos = {todos} checkAll={this.checkAll} deleteAllDone={this.deleteAllDone}/>
      </div>
    </div>
  )
}
}

