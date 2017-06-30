var React = require('react');
var ReactDOM = require('react-dom');



var dummyData=['Do computer science', 'Do science computer', 'Do more'];

class TodoList extends React.Component {
  render(){
    return(
      <ul>
        {this.props.dummyData.map((todo)=>(
          <li><button className='btn btn-default'>X</button>{'  '}{todo}</li>))}
      </ul>
    )
  }
}

ReactDOM.render(<TodoList dummyData={dummyData}/>,
   document.getElementById('root'));
