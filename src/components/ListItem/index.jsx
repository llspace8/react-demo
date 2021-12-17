import React, {Component} from "react";
import './index.css'

export default class ListItem extends Component {

  state = {
    mouse: false,
  }

  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }

  handleDelete = () => {
    if (window.confirm('确认删除?')) {
      const {deleteTodo, item} = this.props
      deleteTodo(item.id)
    }
  }

  handleChange = (event) => {
    const {checkTodo, item} = this.props
    checkTodo(item.id, event.target.checked)
  }

  render() {
    const {name, done} = this.props.item
    const {mouse} = this.state
    return (
      <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}
          style={{backgroundColor: mouse ? '#ddd' : '#fff'}}>
        <input onChange={this.handleChange} type="checkbox" checked={done}/> {name}
        <button onClick={this.handleDelete} style={{
          display: mouse ? 'inline-block' : 'none'
        }}>删除任务
        </button>
      </li>
    );
  }

}