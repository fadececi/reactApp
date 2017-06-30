var React = require('react');
var ReactDOM = require('react-dom');



var dummyData=[
  {taskText:'Do computer science', completed: false},
  {taskText:'Do science computer', completed: true},
  {taskText:'Do more', completed: false}  ];

class TodoApp extends React.Component {
  constructor(props){
    super(props),
    this.state={
      todos:[]
    }
  }
  componentDidMount(){
    this.setState({todos:dummyData})
  }
  render(){
    return(
      <div>
          <InputLine />
          <TodoList todos={this.state.todos}/>
                          </div>
    )
  }
}

class InputLine extends React.Component {
  render(){
    return(
      <div>
        <input type='text' placeholder='task...' />
        <input type='submit' value="Add" />
      </div>
    )
  }
}

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

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
