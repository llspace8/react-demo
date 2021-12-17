import React, {Component} from "react";
import './index.css'
import ListItem from "../ListItem";

export default class List extends Component {

  render() {
    let {todos, deleteTodo, checkTodo} = this.props
    return (
      <ul>
        {
          todos.map(el => {
            return <ListItem key={el.id} item={el} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
          })
        }
      </ul>
    );
  }

}