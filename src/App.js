import React,{Component} from "react";
// import TodoList from './components/TodoList'
import './App.css'
import Search from "./components/Search";
// import AxiosDemo from "./components/AxiosDemo";
// 创建并暴露App组件
export default class App extends Component{
  render() {
    return (
      <div className="App">
        {/*<TodoList/>*/}
        {/*<AxiosDemo/>*/}
        <Search/>
      </div>
    )
  }
}
