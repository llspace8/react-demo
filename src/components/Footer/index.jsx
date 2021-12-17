import React, {Component} from "react";
import './index.css'

export default class Footer extends Component {

  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked)
  }

  handleDelete = () => {
    this.props.deleteAllDone()
  }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre, todo) => {
      return todo.done ? pre + 1 : pre + 0
    }, 0)
    const total = todos.length
    return (
      <div>
        <input onChange={this.handleCheckAll} type="checkbox" checked={doneCount === total && total !== 0}/>
        已完成 {doneCount} / 全部 {total}
        <button onClick={this.handleDelete}>清除已完成任务</button>
      </div>
    );
  }

}