import React, {Component} from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import './App.css'
// 创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 编写路由连接 */}
        <NavLink to="/about">About</NavLink> <br/>
        <NavLink to="/home">Home</NavLink> <br/>
        <div>
          {/* 注册路由 */}
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Redirect to="/about"/>
          </Switch>
        </div>
      </div>
    )
  }
}
