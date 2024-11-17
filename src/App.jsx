import logo from './logo.svg';
import React, { Component} from 'react';
import './App.css';
import Footer from './component/Footer'
import Header from './component/Header'
import List from './component/List'

export default class App extends Component {
   state = {todos: [
     {id:'001', name:'coding', done: false},
     {id:'002', name:'sleeping', done: false},
     {id:'003', name:'reading', done: false},
     {id:'004', name:'talking', done: false},
  ]}

  render(){
    const {todos} = this.state
    console.log(todos)
    this.setState({})
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List todos={todos}/>
          <Footer/>
        </div>
      </div>
    )
  }
} 