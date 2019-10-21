import React, { Component } from "react";
// import Link from "react-router-dom"

class DrillCard extends Component {
    render() {
        debugger
        console.log(this.props.drillProps)
        return (

            <div className="drill-card">
                <div className="drill-card-content">
                    <picture>
                        <img src={require("./ar15.png")} alt="Logo" />
                    </picture>
                    <h3>
                        Drill Name:
                        <span className="card-drillname"></span>
                    </h3>

                </div>
            </div>)
    }
}
export default DrillCard