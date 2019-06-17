import React from 'react';
import ReactDOM from 'react-dom';

//components
import List from './components/List';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  onNewTodo(todo) {
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({
      todos: newTodoList,
    });
  }

  render() {
    return (
      <div>
        <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
        <List todos={['wassen', 'afstoffen']}/>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));
