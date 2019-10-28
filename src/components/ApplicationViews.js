import {Route, withRouter,Redirect} from"react-router-dom";
import React, { Component } from "react";
import Home from "./home/home"
import Login from "./auth/Login"
import DrillList from "./drills/DrillList"
import DrillDetail from "./drills/DrillDetail"
import RangeForm from "./range/RangeForm"
import RangeList from "./range/RangeList"
import RangeEditForm from "./range/RangeEditForm"
import RangeDetail from "./range/RangeDetail"
import NewUserReg from '../components/auth/newUserReg'
// import UserSavedDrills from '../components/drills/MyDrills'
import UserDrillList from "./drills/UserDrillsList";
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
        <Route
        path="/drills/new"
        render={props => {
          return this.isAuthenticated()?(
            <RangeForm {...props}/>
          ):(<Redirect to ="/login /"/>);
        }}/>
        <Route
          exact
          path="/range"
          render={props => {
            if (this.isAuthenticated()) {
              return <RangeList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/drills/:drillId(\d+)/details"
          render={props => {
            return <DrillDetail {...props} />;
          }}
        />
        <Route
          path="/weather/:weatherId(\d+)/details"
          render={props => {
            return <DrillDetail {...props} />;
          }}
        />
        <Route
          path="/platform/:platformId(\d+)/details"
          render={props => {
            return <DrillDetail {...props} />;
          }}
        />
        <Route
          path="/range/new"
          render={props => {
            return this.isAuthenticated() ? (
              <RangeForm {...props} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          exact
          path="/range/:rangeId(\d+)"
          render={props => {

            // console.log("this is props", props);
            return this.isAuthenticated() ? (
              <RangeDetail
                {...props}
                rangeId={parseInt(props.match.params.rangeDataId)}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/range/:rangeId(\d+)/edit"
          render={props => {
            return <RangeEditForm {...props} />;
          }}
        />
        <Route exact
        path ="/mydrills"
        render={props=>{
        return<UserDrillList {...props} />}}/>






        </React.Fragment>
    )
}}
export default ApplicationViews;