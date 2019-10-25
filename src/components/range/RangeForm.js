import React, {Component} from "react";
import RangeDataManager from "../../modules/RangeDataManager";
import WeatherManager from "../../modules/WeatherManager";
import PlatformManager from "../../modules/PlatformManager";
import DrillManager from "../../modules/DrillManager";
import DatePicker from 'react-date-picker';
import UserManager from "../../modules/UserManager"

class RangeForm extends Component {

    state={

        drills:[],
        drillId:1,
        platform:[],
        platformId:1,
        weather:[],
        weatherId:1,
        date: new Date(),
        average:"",
        notes:"",
        caliber:"",
        rangeData:[]
    };
    handleFieldChange =evt => {
        const stateToChange = {};
        // stateToChange ={};
        stateToChange[evt.target.id]= evt.target.value;
        this.setState(stateToChange);
    };
    componentDidMount(){
        RangeDataManager.getOne().then(parsedData=>
            this.setState({data:parsedData}));

PlatformManager.getAll().then(parsedPlatforms=>{
    this.setState({platform:parsedPlatforms})
});
DrillManager.getAll().then(parsedDrills=>{
    this.setState({drills:parsedDrills})
});
WeatherManager.getAll().then(parsedWeather=>{
    this.setState({weather:parsedWeather})
});
UserManager.getUsers().then(parsedUsers=>{
  this.setState({users:parsedUsers})
})
    }
constructNewEntry = evt => {
    evt.preventDefault();
    {this.setState({loadingStatus:true});
const journal = {
  userId:localStorage.getItem("userId"),
drillId:+this.state.drillId,
caliber:this.state.caliber,
weatherId:+this.state.weatherId,
platformId:+this.state.platformId,
average:this.state.average,
date: this.state.date,
notes:this.state.notes
};
console.log(journal)
RangeDataManager.post(journal).then(()=>
this.props.history.push("/range")
);
}


}
render(){
    return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                <select
                className="form-control"
                id="drillId"
                value={this.state.drillId}
                onChange={this.handleFieldChange}
              >
                {this.state.drills.map(drill => (
                  <option key={drill.id} value={drill.id}>
                    {drill.drillname}
                  </option>
                ))}
              </select>

              <select
                className="form-control"
                id="platformId"
                value={this.state.platformId}
                onChange={this.handleFieldChange}
              >
                {this.state.platform.map(platform => (
                  <option key={platform.id} value={platform.id}>
                    {platform.platform}
                  </option>
                ))}
              </select>
              <select
                className="form-control"
                id="weatherId"
                value={this.state.weatherId}
                onChange={this.handleFieldChange}
              >
                {this.state.weather.map(weather => (
                  <option key={weather.id} value={weather.id}>
                    {weather.type}
                  </option>
                ))}
              </select>
              <label htmlFor="caliberType">Caliber</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="caliber"
                placeholder="Caliber"
              />
              <label htmlFor="averageTime">Time Average</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="average"
                placeholder="Time"
              />
              <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
        <label htmlFor="Rangenotes">Range Notes</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="notes"
                placeholder="Range Notes"
              />
              <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewEntry}
              >
                Submit
              </button>
            </div>

 </div>
            </fieldset>
        </form>
        </>
    )
}

}
export default RangeForm