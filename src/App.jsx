import logo from './logo.svg';
import React, { Component, useState, useEffect} from 'react';
import './App.css';
import Footer from './component/Footer'
import Header from './component/Header'
import List from './component/List'
import { createTodo, updateTodo, deleteTodo, getTodos } from "./api/todoService";

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [], // 保存 ToDo 列表
      };
    }

    // 组件加载后调用 API 获取 ToDo 列表
  async componentDidMount() {
    try {
      const todos = await getTodos();
      // const todos = todoObjs.map( (todoObj)=> {
      //   return  {id: todoObj.id, name:todoObj.title, done: todoObj.isCompleted}
      // })
      this.setState({ todos });
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

   // 创建 ToDo
    addTodo = async (title) => {
    const newTodo = { title: title, isCompleted: false };
    try {
      const createdTodo = await createTodo(newTodo);
      const newTodos = [...this.state.todos, createdTodo];
      this.setState({todos: newTodos});
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  // 更新 ToDo
  updateTodos = async (id, updatedTodo) => {
    const {todos} = this.state
    const newTodos = todos.map( (todo) => {
      if(todo.id === id){
        return {...todo, isCompleted: updatedTodo.isCompleted}
      }
      //这里一定要返回，否则出现undifined
      return todo;
    })
    this.setState({todos: newTodos})
    
    try {
      await updateTodo(id, updatedTodo);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // // 删除 ToDo
  //  handleDelete = async (id) => {
  //   try {
  //     await deleteTodo(id);
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting todo:", error);
  //   }
  // };

  // state = {
  //   todos: [
  //     {id:'001', name:'coding', done: true},
  //     {id:'002', name:'sleeping', done: true},
  //     {id:'003', name:'reading', done: false},
  //     {id:'004', name:'talking', done: false},
  //   ],
  // };

  //  addTodo = (todoObj) =>{
  //    const {todos} = this.state
  //    const newTodos = [todoObj, ...todos]
  //    this.setState({todos: newTodos})
  //  }

  //  updateTodos = (id, done) =>{
  //   const {todos} = this.state
  //   const newTodos = todos.map( (todo) => {
  //     if(todo.id === id){
  //       return {...todo, done:done}
  //     }
  //     //这里一定要返回，否则出现undifined
  //     return todo;
  //   })
  //   this.setState({todos: newTodos})
  // }

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