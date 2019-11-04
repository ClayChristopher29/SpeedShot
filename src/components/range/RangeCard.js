import React, { Component } from "react";
import {Link} from "react-router-dom"

class RangeCard extends Component{
    render(){
        return(
            <div className="range-card">
                <div className="range-card-content">
                    <picture>
                        <img className="journal-gif" src={require("./journal.gif")} alt="journal-img"/>
                    </picture>
                    <h2 className = "range-card-name">Range Journal Entry</h2>
                    <h4>Caliber Used:{" "}
                    <span className="card-journalname">{this.props.rangeProps.caliber}</span>
                    </h4>
                    <Link to={`/range/${this.props.rangeProps.id}`}>
            <button>Your Information</button>
          </Link>
          <Link to={`/range/${this.props.rangeProps.id}/edit`}>
            <button>Edit</button>
          </Link>




                </div>
            </div>
        )
    }
}
export default RangeCard