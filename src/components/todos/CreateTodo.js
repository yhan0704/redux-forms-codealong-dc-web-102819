import React, { Component } from "react";
import {connect} from 'react-redux'

class CreateTodo extends Component {
  state = {
    input: "",
  };

  handleOnChange = (e) => {
    this.setState({
      input : e.target.value
    })
  };

  handleOnSubmit=(e)=>{
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      input:""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>add todo</label>
            <br />
            <input type="text" value={this.state.input} onChange={this.handleOnChange} />
          </p>
          <input type="submit" />
        </form>
        {this.state.input}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addTodo : (input) => dispatch({type:'ADD_TODO', input})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
