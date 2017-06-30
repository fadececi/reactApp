var React = require('react');
var ReactDOM = require('react-dom');

class Todo extends React.Component {
  render(){
    if(this.props.todo.completed){
      return(<li>
        <button>X</button>
        {'  '}<strike>{this.props.todo.taskText}</strike>
      </li>)
    } else {
      return(<li>
        <button>X</button>
        {'  '}{this.props.todo.taskText}
      </li>)
    }
  }
}

export default Todo;
