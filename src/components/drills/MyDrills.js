import React, { Component } from 'react';
import UserDrillManager from '../../modules/DrillManager'
import UserDrillsList from'../drills/UserDrillsList'
import'./Drills.css'

class UserSavedDrills extends Component{
    state={
    userDrills:[],
    loadingStatus:true
    }
componentDidMount(){
    UserDrillManager.getAll();
    UserDrillManager.getOne(this.props.userId)
    .then((drills)=>{
        this.setState({
            userDrills:drills,
            loadingStatus:false
        })
    })
}
render(){
    return(
        <React.Fragment>
<div className="container-cards">
        {this.state.userDrills.map(singleUserDrill => {
          if(singleUserDrill.userId === this.props.userId){
                  return  <UserDrillsList
                    key={singleUserDrill.id}
                    drillProps={singleUserDrill}
                    {...this.props}
                  />
        } else if(this.props.userId === undefined){
            return  <UserDrillsList
            key={singleUserDrill.id}
            drillProps={singleUserDrill}
            {...this.props}
          />
        }
        })}
    </div>

        </React.Fragment>
    )


}}

export default UserSavedDrills