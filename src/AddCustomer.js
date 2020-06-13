import React from "react";
import TextField from '@material-ui/core/TextField';
import history from './history';
import Button from '@material-ui/core/Button';
import './AddCustomer.css';
class AddCustomer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customer:' ',
            logo:' ',
            color:' ',
            arr:JSON.parse(localStorage.getItem('customer')),
        }
    }
    
    customerChange = (c)=>{
        this.setState({customer:c.target.value})
    }
    logoChange = (l)=>{
        this.setState({logo:l.target.value})
    }
    colorChange = (co)=>{
        this.setState({color:co.target.value})
    }
    // componentDidMount = ()=>{
        
    // }
    handleSubmit = (e)=>{
        e.preventDefault()
        // this.setState({
        //     customer:' ',
        //     logo:' ',
        //     color:' ',
        // })
        const data = {
            customer:this.state.customer,
            logo:this.state.logo,
            color:this.state.color,
        }
        this.state.arr.push(data);
        localStorage.setItem('customer',JSON.stringify(this.state.arr));
        console.log(JSON.parse(localStorage.getItem('customer')));
    // console.log(JSON.parse(localStorage.getItem('customer')));
        
    }
    // componentDidMount() {
    //     this.userData = JSON.parse(localStorage.getItem('customer'));
    //     console.log("here1")
    //     if (localStorage.getItem('customer')) {
    //         this.setState({
    //             customer: this.userData.customer,
    //             logo: this.userData.logo,
    //             color: this.userData.color
    //         })
    //         console.log(this.state.customer);
    //     } else {
    //         this.setState({
    //             customer: '',
    //             logo: '',
    //             color: ''
    //         })
    //     }
    // }
    // componentWillUpdate(nextProps, nextState) {
    //     // console.log(nextState);
    //     localStorage.setItem('customer', JSON.stringify(nextState));
    //     console.log(localStorage.getItem('customer'));
    //     // console.log("here");
    // }

    render(){
        return(
            <div class = "contain_add">
      <h1 class = "t_add">SigmaWays</h1>
      <ul class= "u_add">
        <li class = "ll"><a href="#home">Home</a></li>
        <li class = "ll"><a href="#news">Employee</a></li>
        <li class = "ll"><a class = "active" href="#contact">Customer</a></li>
        <li class = "ll"><a href="#about">Order</a></li>
        
      </ul>
      <ul class = "u1_add">
      <li class = "ll_1"><a href="#about">Deployment</a></li>
        <li class = "ll_1"><a href="#about">Finance</a></li>
        <li class = "ll_1"><a href="#about">Report</a></li>
      </ul>
      <div class = "customer-name">
    <TextField id="outlined-search" label="Enter username" type="search" variant="outlined" onChange = {this.customerChange} style = {{width: 300}}/>
      </div>
      <div class = "logo">
    <TextField id="outlined-search" label="Enter logo" type="search" variant="outlined" onChange = {this.logoChange} style = {{width: 300}}/>
      </div>
      <div class = "color">
    <TextField id="outlined-search" label="Enter color" type="search" variant="outlined" onChange = {this.colorChange} style = {{width: 300}}/>
      </div>
      <div class= "submit-button">
      <Button variant = "contained" onClick={this.handleSubmit}  color = "primary"  size = "large">SUBMIT</Button>{' '}
      </div>
    </div>
        )
    }
}
export default AddCustomer;