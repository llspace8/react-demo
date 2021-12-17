import React, {Component} from "react";
import {nanoid} from "nanoid";
import './index.css'

export default class Header extends Component {

  handleKeyUp = (event) => {
    let {keyCode, target} = event
    if (keyCode !== 13) {
      return
    }
    if (target.value.trim() === '') {
      alert('不可输入为空!')
      return;
    }

    this.props.addTodo({
      id: nanoid(),
      name: target.value,
      done: false,
    })
    target.value = ''
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="输入任务名称,回车"/>
      </div>
    );
  }

}