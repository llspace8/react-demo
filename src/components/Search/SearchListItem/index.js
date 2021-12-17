import React, {Component} from 'react';
import './index.css'

class SearchListItem extends Component {
  render() {
    const {login, avatar_url, html_url} = this.props
    return (
      <a className="SearchListItem" href={html_url} target="_blank" rel="noreferrer">
        <img src={avatar_url} alt={login}/>
        <span>{login}</span>
      </a>
    );
  }
}

export default SearchListItem;