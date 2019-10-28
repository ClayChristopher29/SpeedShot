import React, { Component } from 'react';
import DrillManager from '../../modules/DrillManager'
import'./Drills.css'


class DrillDetail extends Component {
    state={
        userId:"",
        drillId:"",
        drillname:"",
        difficulty:"",
        weapon:"",
        details:"",
        url:"",
        loadingStatus:true
    }
    saveNewDrill = evt =>
    {
        evt.preventDefault();
        this.setState({loadingStatus:true});
        const newSavedDrill={
            userId:localStorage.getItem('userId'),
            drillId:this.props.drillId
        }
        DrillManager.post(newSavedDrill).then(()=>
        this.props.history.push("/mydrills"))
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
                </p>
                <a target ="_blank" rel="noopener noreferrer" href={this.state.url} alt="You-Tube Link">{this.state.url}</a>
                <br></br>
                <br></br>

            <button type="button"
            disabled={this.state.loadingStatus}
            onClick={this.saveNewDrill}>Save Drill</button>


                </div>
            </div>
        )
    }
}
export default DrillDetail