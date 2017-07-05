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
      todos:dummyData
    }
  }
  addTodo(task){
    // task is a string
    dummyData.push({taskText:task,completed:false});
    this.setState({
      todos:dummyData
    })
  }
  removeTodo(index){
    dummyData.splice(index,1);
    this.setState({
      todos:dummyData
    })
    console.log(dummyData);
  }
  toggleTodo(index){
    dummyData[index].completed=!dummyData[index].completed;
    this.setState({todos:dummyData})
  }
  componentDidMount(){
    // this.setState({todos:dummyData})
  }
  render(){
    return(
      <div>
          <InputLine submit={(e)=>(this.addTodo(e))}/>
          <TodoList todos={this.state.todos} todoXclick={(i)=>this.removeTodo(i)}
            todoClick={(i)=>this.toggleTodo(i)}/>
                          </div>
    )
  }
}

export default TodoApp;
