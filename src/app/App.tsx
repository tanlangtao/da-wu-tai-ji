import React, { Component } from "react";
import "./App.scss";
import Index from "./pages/index/Index";
import { HashRouter, Switch, Route,Redirect } from "react-router-dom";
class App extends Component {
    componentDidMount(){
        window.resizeTo(1000,500)
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/index" component={Index} />
                    <Redirect from="**" to="/index" />
                </Switch>
             </HashRouter>
        );
    }
}

export default App;
