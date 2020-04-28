import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  handleSubmit(){
    if(this.state.name !== ''){
      alert('Submitted');
    }
  }

  render(){
  return (
    <div className="App">
      <p>{this.state.value}</p>
      <input name="name" value={this.state.value} onChange={this.handleChange} />
      <button onClick={this.handleSubmit}>Check</button>
    </div>
  );
  }
}

