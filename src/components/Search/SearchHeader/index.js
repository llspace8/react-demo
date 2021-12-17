import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";

class SearchHeader extends Component {

  state = {
    keyword: '',
    items: []
  }

  handleChange = ({target: {value}}) => {
    this.setState({
      keyword: value
    })
  }

  handleSearch = () => {
    const {state: {keyword}, props: {saveUsers}} = this
    axios.get('https://api.github.com/search/users?q=' + keyword).then(
      ({data: {items}}) => {
        saveUsers(items)
        PubSub.publish('USERS_LIST', items)
      },
      error => {
      }
    )
  }

  render() {
    return (
      <div>
        <h3>Search Github Users</h3>
        <input onChange={this.handleChange} type="text" placeholder="输入关键字 点击搜索"/>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchHeader;