import React, {Component} from "react";
import RangeDataManager from "../../modules/RangeDataManager";
import WeatherManager from "../../modules/WeatherManager";
import PlatformManager from "../../modules/PlatformManager";
import DrillManager from "../../modules/DrillManager";
import DatePicker from 'react-date-picker'
import UserManager from "../../modules/UserManager"

class RangeEditForm extends Component{
    state = {
        id:1,
        drills:[],
        drillId:1,
        platform:[],
        platformId:1,
        weather:[],
        weatherId:1,
        date:"",
        average:"",
        notes:"",
        rangeData:[]
    };
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] =evt.target.value;
        this.setState(stateToChange);
    };
    updateExistingrangeData = evt => {
        evt.preventDefault();
        this.setState({loadingStatus:true});
        const editedJournal = {
          userId:localStorage.getItem("userId"),
            id:this.state.id,
            drillId:+this.state.drillId,
            caliber:this.state.caliber,
            weatherId:+this.state.weatherId,
            platformId:+this.state.platformId,
            average:this.state.average,
            date: new Date (),
            notes:this.state.notes
            };
            RangeDataManager.update(editedJournal).then(()=>
this.props.history.push("/range")
);
}
componentDidMount(){
  UserManager.getOne().then(parsedUsers=>{
    this.setState({users:parsedUsers})
  })
    RangeDataManager.getOne(this.props.match.params.rangeDataId).then(parsedData=>
        this.setState({data:parsedData}));

PlatformManager.getAll().then(parsedPlatforms=>{
this.setState({platforms:parsedPlatforms})
});
DrillManager.getAll().then(parsedDrills=>{
this.setState({drills:parsedDrills})
});
WeatherManager.getAll().then(parsedWeather=>{
this.setState({weather:parsedWeather})
});
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
                    {drill.name}
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
                id="caliberType"
                placeholder="Caliber"
              />
              <label htmlFor="averageTime">Time Average</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="averageTime"
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
                id="rangeNotes"
                placeholder="Range Notes"
              />

 </div>
            </fieldset>
        </form>
        </>
    )
}
    }
    export default RangeEditForm
