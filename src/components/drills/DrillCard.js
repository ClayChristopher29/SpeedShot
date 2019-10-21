import React, { Component } from "react";
import {Link} from "react-router-dom"

class DrillCard extends Component {
    render() {
        console.log("this.props in drillcard", this.props.drillProps)
        return (
            <div className="drill-card">
                <div className="drill-card-content">
                    <picture>
                        <img src={require("./ar15.png")} alt="Logo" />
                    </picture>
                    <h3>
                        Drill Name:
                        <span className="card-drillname">{this.props.drillProps.drillname}</span>
                    </h3>
                    <h2>Difficulty:
                        <span>{this.props.drillProps.difficulty}</span>
                    </h2>
                    <Link to={`/drills/${this.props.drillProps.id}`}>
            <button>More Information</button>
          </Link>
                </div>
            </div>)
    }
}
export default DrillCard