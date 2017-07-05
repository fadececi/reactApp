var React = require('react');
var ReactDOM = require('react-dom');

class Todo extends React.Component {
  render(){
    if(this.props.todo.completed){
      return(<li>
        <button onClick={()=>this.props.xClick()}>X</button>
        {'  '}<strike onClick={()=>this.props.textClick()}>{this.props.todo.taskText}</strike>
      </li>)
    } else {
      return(<li>
        <button onClick={()=>this.props.xClick()}>X</button>
        {'  '}<span onClick={()=>this.props.textClick()}> {this.props.todo.taskText}</span>
      </li>)
    }
  }
}

export default Todo;
