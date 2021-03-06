import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
// import about from './about';

import App from './App';

import Config from './Config';
import BestBuy from './BestBuy';
import HomeDepot from './HomeDepot';
import Costco from './Costco';
import AddCustomer from './AddCustomer';
import LandingPage from './LandingPage';
export default class Routers extends Component {
    render() {
        return (
            <Router history={history}>

                    <Switch>
                    <Route path="/" exact component={App} />
                    <Route path = "/config" component = {Config}/>
                    <Route path ="/bestbuy" component = {BestBuy}/>
                    <Route path = "/homedepot" component = {HomeDepot}/>
                    <Route path = "/costco" component = {Costco}/>
                    <Route path = "/addcustomer" component = {AddCustomer}/>
                    <Route path = "/landingpage" component = {LandingPage}/>
                    
                    </Switch>

            </Router>
        )
    }
}
