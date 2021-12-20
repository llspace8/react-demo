import React, {Component} from 'react';

class Detail extends Component {
  render() {
    const {id, title} = this.props.match.params
    return (
      <div>
        <ul>
          <li>ID: {id}</li>
          <li>TITLE: {title}</li>
          <li>CONTENT</li>
        </ul>
      </div>
    );
  }
}

export default Detail;