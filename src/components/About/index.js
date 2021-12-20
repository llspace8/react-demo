import React, {Component} from 'react';
import {Button} from 'antd';
// import 'antd/dist/antd.css'

class About extends Component {
  render() {
    return (
      <div>
        About 组件内容
        <Button>按钮才</Button>
        <Button type="primary">按钮才</Button>
      </div>
    );
  }
}

export default About;