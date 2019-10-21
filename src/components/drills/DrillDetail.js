import React, { Component } from 'react';
import DrillManager from '../../modules/DrillManager'
import'./Drills.css'

class DrillDetail extends Component {
    state={
        drillname:"",
        difficulty:"",
        weapon:"",
        details:"",
        url:"",
        loadingStatus:true
    }

    componentDidMount(){
        DrillManager.getOne(this.props.drillId)
        .then((drills)=>{
            this.setState({
                drillname:drills.drillname,
                difficulty:drills.difficulty,
                weapon:drills.weapon,
                details:drills.description,
                url:drills.url,
                loadingStatus:false
            })
        })
    }
    render(){
        return(
            <div className="drill-card">
                <div className ="drill-card-content">
                <picture>
                    <img className="drill-img" src ={require('./ar15.png')}alt="logo"/>
                </picture>
                <h3>Name:<span style= {{ color:'darkslategrey'}}>{this.state.drillname}</span></h3>
                <p>
                    Difficulty: <span style={{color:'darkslategrey'}}>{this.state.difficulty}</span>
                </p><p>
                    Platform: <span style={{color:'darkslategrey'}}>{this.state.weapon}</span>
                </p><p>
                    Details: <span style={{color:'darkslategrey'}}>{this.state.details}</span>
                </p><p>
                    You-Tube Link: <span style={{color:'darkslategrey'}}>{this.state.url}</span>
                </p>

                </div>
            </div>
        )
    }
}
export default DrillDetail