var React = require('react');
var ReactDOM = require('react-dom');

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

export default InputLine;
