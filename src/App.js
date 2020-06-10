import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import history from './history';
import Button from '@material-ui/core/Button';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:' ',
      password:' ',
    }
  }
    usernameChange = (uname)=>{

      this.setState({
        username:uname.target.value
      })
    }
    passwordChange = (pass)=>{
      this.setState({
        password:pass.target.value
      })
    }
    handleSubmit = ()=>{
      // console.log('here');
      if(this.state.username=="Sankar"&&this.state.password=="123")
        history.push('/config');
    }
  
  render(){
  return (
    <div class = "contain_app">
      <h1 class = "t_app">SigmaWays</h1>
      <ul class= "u_app">
        <li class = "ll"><a href="#home">Home</a></li>
        <li class = "ll"><a href="#news">Employee</a></li>
        <li class = "ll"><a class = "active" href="#contact">Customer</a></li>
        <li class = "ll"><a href="#about">Order</a></li>
        
      </ul>
      <ul class = "u1_app">
      <li class = "ll_1"><a href="#about">Deployment</a></li>
        <li class = "ll_1"><a href="#about">Finance</a></li>
        <li class = "ll_1"><a href="#about">Report</a></li>
      </ul>
      <div class = "username">
    <TextField id="outlined-search" label="Enter username" type="search" variant="outlined" onChange = {this.usernameChange} style = {{width: 300}}/>
      </div>
      <div class = "password">
    <TextField id="outlined-search" label="Enter password" type="search" variant="outlined" onChange = {this.passwordChange} style = {{width: 300}}/>
      </div>
      <div class= "credentials-button">
      <Button variant = "contained" onClick={this.handleSubmit}  color = "primary"  size = "large">SUBMIT</Button>{' '}
      </div>
    </div>
  );
  }
}

export default App;
