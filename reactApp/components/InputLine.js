var React = require('react');
var ReactDOM = require('react-dom');

class InputLine extends React.Component {
  constructor(props){
    super(props)
    this.state={
      typedText:''
    }
  }
  handleTyping(event){
    this.setState({
      typedText:event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.submit(this.state.typedText);
    this.setState({typedText:''})
  }
  render(){
    return(
      <div>
        <input type='text' placeholder='task...' onChange={(e)=>this.handleTyping(e)}
        value={this.state.typedText}/>
        <input type='submit' value="Add" onClick={(e)=>(this.handleSubmit(e))}/>
      </div>
    )
  }
}

export default InputLine;
