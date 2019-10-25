import React, {Component} from "react";
import RangeCard from "./RangeCard"
import RangeDataManager from "../../modules/RangeDataManager"


class RangeList extends Component{
    state={

        data:[]
};
componentDidMount(){
    // RangeDataManager.getAll().then(dataFromDatabase=>{
    //     this.setState({id:dataFromDatabase})
    // })
    // DrillManager.getAll().then(drillsFromDatabase=>{
    //     this.setState({drills:drillsFromDatabase})
    // })
    // WeatherManager.getAll().then(weatherFromDatabase=>{
    //     this.setState({weather:weatherFromDatabase})
    // })
    // PlatformManager.getAll().then(platformsFromDatabase=>{
    //     this.setState({platforms:platformsFromDatabase})
    // })
    RangeDataManager.getAll().then(dataFromDatabase=>{
      console.log(dataFromDatabase)
        this.setState({data:dataFromDatabase})
    })
}
render() {
    console.log("RANGE CARD: render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/range/new");
            }}
          >
            New Entry
          </button>
        </section>
        <div className="range-container-cards">
          {this.state.data.map(singleEntry => (
            <RangeCard key={singleEntry.id} rangeProps={singleEntry} />
          ))}
        </div>
      </>
    );
  }
}
export default RangeList
