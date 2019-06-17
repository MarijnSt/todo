import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
  }

  AddTodo(event) {
    event.preventDefault();
    const txt = this.ToDoTitle.value;
    this.props.onNewTodo({
      title: txt,
      createdAt: new Date(),
    });
  }

  render() {
    return (
      <div className="listform">
        <form>
          <input type="text" ref={(input) => this.ToDoTitle = input} />
          <button onClick={this.AddTodo.bind(this)}>Add</button>
        </form>
      </div>
    );
  }
};
