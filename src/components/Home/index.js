import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import News from "./News";
import Message from "./Message";

class Home extends Component {
  render() {
    return (
      <div>
        Home 组件内容 <br/>
        <div>
          <NavLink to="/home/news">News</NavLink> &nbsp;&nbsp;
          <NavLink to="/home/message">Message</NavLink>
        </div>
        {/* 注册路由 */}
        <Switch>
          <Route path="/home/news" component={News}/>
          <Route path="/home/message" component={Message}/>
          <Redirect to="/home/news"/>
        </Switch>
      </div>
    );
  }
}

export default Home;