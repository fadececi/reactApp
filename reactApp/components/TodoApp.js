var React = require('react');
var ReactDOM = require('react-dom');
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';

var dummyData=[
  {taskText:'Do computer science', completed: false},
  {taskText:'Do science computer', completed: true},
  {taskText:'Do more', completed: false}  ];

class TodoApp extends React.Component {
  constructor(props){
    super(props),
    this.state={
      todos:[{taskText:'Do computer science', completed: false},
      {taskText:'Do science computer', completed: true},
      {taskText:'Do more', completed: false}]
    }
  }
  addTodo(task){
    // task is a string
    var tempArr= this.state.todos;
    tempArr.push({taskText:task,completed:false});
    this.setState({
      todos:tempArr
    })
  }
  componentDidMount(){
    // this.setState({todos:dummyData})
  }
  render(){
    return(
      <div>
          <InputLine submit={(e)=>(this.addTodo(e))}/>
          <TodoList todos={this.state.todos}/>
                          </div>
    )
  }
}

export default TodoApp;
