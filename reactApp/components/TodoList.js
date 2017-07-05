var React = require('react');
var ReactDOM = require('react-dom');
import Todo from './Todo.js'

class TodoList extends React.Component {
  render(){
    return(
      <ul>
        {this.props.todos.map((todo,index)=>(
          <Todo todo={todo} xClick={()=>this.props.todoXclick(index)}
            textClick={()=>this.props.todoClick(index)}/>
        ))}
      </ul>
    )
  }
}

export default TodoList;
