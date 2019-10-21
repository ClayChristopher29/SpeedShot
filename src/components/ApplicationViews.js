import {Route, withRouter,Redirect} from"react-router-dom";
import React, { Component } from "react";
import Home from "./home/home"
import Login from "./auth/Login"
import DrillList from "./drills/DrillList"
import DrillCard from "./drills/DrillCard"
import DrillDetail from "./drills/DrillDetail"

import NewUserReg from '../components/auth/newUserReg'
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
            <Route
                    exact
                    path="/register"
                    render={props => {
                        return <NewUserReg {...props} />;
                    }}
                />
                <Route
          exact
          path="/drills"
          render={props => {
            if (this.isAuthenticated()) {
              return <DrillList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/drills"
          render={props => {
            return this.isAuthenticated() ? (
              <DrillCard {...props} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          exact
          path="/drills/:drillId(\d+)"
          render={props => {
            return this.isAuthenticated() ? (
              <DrillDetail
                {...props}
                drillId={parseInt(props.match.params.drillId)}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />

        </React.Fragment>
    )
}}
export default ApplicationViews;