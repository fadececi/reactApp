var React = require('react');
var ReactDOM = require('react-dom');
import Todo from './Todo.js'

class TodoList extends React.Component {
  render(){
    return(
      <ul>
        {this.props.todos.map((todo)=>(
          <Todo todo={todo}/>
        ))}
      </ul>
    )
  }
}

export default TodoList;
