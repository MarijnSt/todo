import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
        <div className="list">
          {this.props.todos.length}
        </div>
    )
  }
}
