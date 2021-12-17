import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import SearchListItem from "../SearchListItem";

import './index.css'

class SearchList extends Component {

  componentDidMount() {
    this.token = PubSub.subscribe('USERS_LIST', (_, data) => {
      console.log(data);
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users} = this.props
    return (
      <div className="SearchList">
        {
          users.map(user => <SearchListItem key={user.node_id} {...user}/>)
        }

      </div>
    );
  }
}

export default SearchList;