import React, { Component } from "react";
import DrillCard from "./DrillCard";
import DrillManager from "../../modules/DrillManager";
import './Drills.css'
import { conditionalExpression } from "@babel/types";

class DrillList extends Component {
    state = {
        newdrills: []
    };
    componentDidMount() {
        console.log("mount")
        DrillManager.getAll().then(drillsFromDatabase => {
            this.setState({
               newdrills: drillsFromDatabase
            });
        });
    }
    render() {
        console.log('render')
        return (
            <>
                <section className="drill-section-content">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => {
                            this.props.history.push("/drills");
                        }}>Return To Drills
                </button>
                </section>
                <div className="drill-container-cards">
                    {this.state.newdrills.map(singleDrill =>
                        <DrillCard key={singleDrill.id} drillProps={singleDrill} />
                    )}
                </div>
            </>

        );

    }
}
export default DrillList