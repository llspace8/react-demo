import React, {Component} from "react";
import './index.css'
import Header from "../Header";
import List from "../List";
import Footer from "../Footer";

export default class TodoList extends Component {

  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: false},
      {id: '003', name: '写代码', done: true},
    ],
  }

  addTodo = (todoItem) => {
    const {todos} = this.state
    let newTodos = [todoItem, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos.splice(i, 1)
        break
      }
    }
    this.setState({
      todos: todos
    })
  }

  checkTodo = (id, done) => {
    const {todos} = this.state
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].done = done
        break
      }
    }
    this.setState({
      todos: todos
    })
  }

  checkAll = (done) => {
    const {todos} = this.state
    todos.forEach(todo => {
      todo.done = done
    })
    this.setState({
      todos
    })
  }

  deleteAllDone = () => {
    const {todos} = this.state
    let newTodos = todos.filter(todo => {
      return !todo.done
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const {todos} = this.state
    return (
      <div className="TodoList">
        <Header addTodo={this.addTodo}/>
        <List todos={todos} deleteTodo={this.deleteTodo} checkTodo={this.checkTodo}/>
        <Footer todos={todos} deleteAllDone={this.deleteAllDone} checkAll={this.checkAll}/>
      </div>
    );
  }

}
