import React, {Component} from 'react';
import SearchHeader from "./SearchHeader";
import SearchList from "./SearchList";
import './index.css'

class Search extends Component {

  state = {
    users: []
  }

  saveUsers = (users) => {
    this.setState({users})
  }

  render() {
    let {users} = this.state
    return (
      <div className="Search">
        <SearchHeader saveUsers={this.saveUsers}/>
        <SearchList users={users}/>
      </div>
    );
  }
}

export default Search;