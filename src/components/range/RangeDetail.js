import React, {Component} from "react";
import RangeDataManager from "../../modules/RangeDataManager"

class RangeDetail extends Component {
    state={
        id:1,
        drill:1,
        name:"",
        caliber:"",
        average:"",
        date:"",
        notes:"",
        platform:1,
        weather:1,
        loadingStatus:true,
    }
    handleDelete =()=>{
        console.log("this is props", this.props)
        this.setState({loadingStatus:true})
        RangeDataManager.delete(this.props.match.params.rangeId)
        .then(()=>this.props.history.push("/range"))
    }
    componentDidMount(){
        console.log("this is props", this.props)
        RangeDataManager.getOne(this.props.match.params.rangeId)
        .then((rangeData)=>{
            console.log(rangeData)
            this.setState({
                id:rangeData.id,
                caliber:rangeData.caliber,
                average:rangeData.average,
                date:rangeData.date,
                notes:rangeData.notes,
                platform:rangeData.platform,
                weather:rangeData.weather,
                drill:rangeData.drill,
                loadingStatus:false


            });
        });
    }
    render (){
        return(
            <div className="range-card">
                <div className="range-card-content">
                    <picture>
                        <img src={require('./gif.gif')} alt="rangeimg"></img>
                    </picture>
                    <h2>Journal Entry</h2>
                    <h3>
                        Drill:<span style={{color:'darkslategrey'}}>{this.state.drill.drillname}</span>
                    </h3>
                    <h3>
                        Caliber:<span style={{color:'darkslategrey'}}>{this.state.caliber}</span>
                    </h3>
                    <h3>
                        Platform:<span style={{color:'darkslategrey'}}>{this.state.platform.platform}</span>
                    </h3>

                    <h3>
                       Weather:<span style={{color:'darkslategrey'}}>{this.state.weather.type}</span>
                    </h3>
                    <h3>
                        Average Time:<span style={{color:'darkslategrey'}}>{this.state.average}</span>
                    </h3>
                    <h3>
                        Date:<span style={{color:'darkslategrey'}}>{this.state.date}</span>
                    </h3>
                    <p>
                        Note:<span style={{color:'darkslategrey'}}>{this.state.notes}</span>
                    </p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Entry</button>

                </div>
            </div>
        )
    }
}
export default RangeDetail
