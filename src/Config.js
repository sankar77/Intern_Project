import React from 'react';
import logo from './logo.svg';

import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lightBlue from "@material-ui/core/colors/lightBlue";
import history from './history';
import './Config.css';
class Config extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customer:' ',
            logo: ' ',
            color: ' ',
        }
    }
    handleCustomerClick = (item)=>{
        // if(val==0)
        //     this.setState({
        //         customer:'BestBuy'
        //     })
        // if(val==1)
        //     this.setState({
        //         customer:'HomeDepot'
        //     })
        // if(val==2)
        //     this.setState({
        //         customer:'Costco'
        //     })
        this.setState({customer:item.customer})
        // console.log(item.customer);
    }
    handleLogoClick = (item)=>{
        // if(val==1)
        //     this.setState({
        //         logo:'BestBuy'
        //     })
        // if(val==2)
        //     this.setState({
        //         logo:'HomeDepot'
        //     })
        // if(val==3)
        //     this.setState({
        //         logo:'Costco'
        //     })
        this.setState({logo:item.logo})
    }
    handleColorClick = (item)=>{
        // if(val==1)
        //     this.setState({
        //         color:'BestBuy'
        //     })
        // if(val==2)
        //     this.setState({
        //         color:'HomeDepot'
        //     })
        // if(val==3)
        //     this.setState({
        //         color:'Costco'
        //     })
        this.setState({color:item.color})
    }

    handleSubmit = ()=>{
        // if(this.state.customer=='BestBuy')
        //     history.push('/bestbuy');
        // if(this.state.customer=='HomeDepot')
        //     history.push('/homedepot');
        // if(this.state.customer=='Costco')
        //     history.push('/costco');
        const data = {
            cust_name:this.state.customer,
            logo:this.state.logo,
            color:this.state.color,
        }
        console.log(this.state.customer);
        console.log(this.state.logo);
        console.log(this.state.color);
        history.push({pathname:'/landingpage',data:data});

        // console.log(JSON.parse(localStorage.getItem('customer')));
    }
    handleAdd = ()=>{
        history.push('/addcustomer')
    }
    render(){
        const dt= JSON.parse(localStorage.getItem('customer'));
        // localStorage.removeItem('customer');
        return(
            <div>
                <div class = "contain_config">
      <h1 class = "t_config">SigmaWays</h1>
      <ul class= "u_config">
        <li class = "ll"><a href="#home">Home</a></li>
        <li class = "ll"><a href="#news">Employee</a></li>
        <li class = "ll"><a class = "active" href="#contact">Customer</a></li>
        <li class = "ll"><a href="#about">Order</a></li>
        
      </ul>
      <ul class = "u1_config">
      <li class = "ll_1"><a href="#about">Deployment</a></li>
        <li class = "ll_1"><a href="#about">Finance</a></li>
        <li class = "ll_1"><a href="#about">Report</a></li>
      </ul>
      </div>
                
            <div class = "customer">
            <form>
                    <p class = "hint">Enter customer:</p>
            <FormControl style = {{minWidth:200}}>
              <InputLabel htmlFor="grouped-select">Options</InputLabel>
              <Select defaultValue="" id="grouped-select">
              {dt.map((item,index)=>
              <MenuItem key = {index} value = {index} onClick = {()=>{this.handleCustomerClick(item)}}>{item.customer}</MenuItem>
              )}
                {/* <MenuItem value="BestBuy" onClick= {()=>{this.handleCustomerClick(1)}}>
                  <em>BestBuy</em>
                </MenuItem>
                <ListSubheader>Additional Customers</ListSubheader>
                <MenuItem value={1} onClick = {()=>{this.handleCustomerClick(2)}}>Home Depot</MenuItem>
                <MenuItem value={2} onClick = {()=>this.handleCustomerClick(3)}>Costco</MenuItem> */}
                
              </Select>
            </FormControl>
            </form>
            </div>
            
            
            <div class = "logo">
            <form>
                <p class = "hint">Enter logo</p>
            <FormControl style = {{minWidth:200}}>
              <InputLabel htmlFor="grouped-select">Options</InputLabel>
              <Select defaultValue="" id="grouped-select">
              {dt.map((item,index)=>
              <MenuItem key = {index} value = {index} onClick = {()=>{this.handleLogoClick(item)}}>{item.logo}</MenuItem>
              )}
                {/* <MenuItem value="BestBuy-logo" onClick = {()=>{this.handleLogoClick(1)}}>
                  <em>BestBuy-logo</em>
                </MenuItem>
                <ListSubheader>Additional Logos</ListSubheader>
                <MenuItem value={1} onClick = {()=>{this.handleLogoClick(2)}}>Home Depot</MenuItem>
                <MenuItem value={2} onClick = {()=>{this.handleLogoClick(3)}}>Costco</MenuItem> */}
                
              </Select>
            </FormControl>
            </form>
            </div>
            
            
            <div class = "color">
            <form>
                <p class = "hint">Enter color</p>
            <FormControl style = {{minWidth:200}}>
              <InputLabel htmlFor="grouped-select">Options</InputLabel>
              <Select defaultValue="" id="grouped-select">
              {dt.map((item,index)=>
              <MenuItem key = {index} value = {index} onClick = {()=>{this.handleColorClick(item)}}>{item.color}</MenuItem>
              )}
                {/* <MenuItem value="BestBuy-color" onClick = {()=>{this.handleColorClick(1)}}>
                  <em>BestBuy-color</em>
                </MenuItem>
                <ListSubheader>Additional Colors</ListSubheader>
                <MenuItem value={1} onClick = {()=>{this.handleColorClick(2)}}>Home Depot</MenuItem>
                <MenuItem value={2} onClick = {()=>{this.handleColorClick(3)}}>Costco</MenuItem> */}
                
              </Select>
            </FormControl>
            </form>
            </div>
            <div class = "config-button">
                <Button variant = "contained" onClick = {this.handleSubmit} color = "primary">SUBMIT</Button>
            </div>
            <div class = "add-button">
                <Button variant = "contained" onClick = {this.handleAdd} color = "primary">ADD CUSTOMER</Button>
            </div>
            </div>
        )
    }

}
export default Config;