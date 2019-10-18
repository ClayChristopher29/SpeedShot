import {Route, withRouter,Redirect} from"react-router-dom";
import React, { Component } from "react";
import Home from "./home/home"
import Login from "./auth/Login"
import DrillCard from "./drills/DrillCard"
class ApplicationViews extends Component {
    isAuthenticated =()=> localStorage.getItem("userId") !==null;

render() {
    return (
        <React.Fragment>
            <Route exact path="/"
            render={props=>{
                return<Home />;
            }}
            />
            <Route path="/login" component={Login} />
        </React.Fragment>
    )
}}
export default ApplicationViews;