import React, { Component } from "react";
import DrillCard from "./DrillCard";
import DrillManager from "../../modules/DrillManager";
import './Drills.css'


class DrillList extends Component {
    state = {
        userDrills: []
    };
    componentDidMount() {
        console.log("mount")
        DrillManager.getAll().then(drillsFromDatabase => {
            this.setState({
               userDrills: drillsFromDatabase
            });
        });
    }
    render() {
        console.log('render')
        return (
            <>
                <section className="drill-section-content">
                </section>
                <div className="drill-container-cards">
                    {this.state.userDrills.map(singleDrill =>
                        <DrillCard key={singleDrill.id} drillProps={singleDrill} />
                    )}
                </div>
            </>

        );

    }
}
export default DrillList