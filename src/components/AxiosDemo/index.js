import React, {Component} from 'react';
import axios from "axios";

export default class AxiosDemo extends Component {

  getStudentData = () => {
    axios.get('/api1/students').then(
      response => {
        console.log(response);
      },
      error => {
        console.error(error)
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我索取数据</button>
      </div>
    );
  }
}
