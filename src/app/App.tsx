import React, { Component } from "react";
import "./App.scss";
import Index from "./pages/index/Index";
import CompanyProfile from './pages/companyProfile/companyProfile'
import { HashRouter, Switch, Route,Redirect } from "react-router-dom";
import CallMe from './pages/callMe/callMe';
import Success from './pages/success/success';
class App extends Component {
    componentDidMount(){
        window.resizeTo(1000,500)
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/index" component={Index} />
                   < Route path='/companyProfile' component ={CompanyProfile}/> 
                   < Route path='/success' component ={Success}/> 
                   < Route path='/call' component ={CallMe}/> 
                    <Redirect from="**" to="/index" />
                </Switch>
             </HashRouter>
        );
    }
}

export default App;
