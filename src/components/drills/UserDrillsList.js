import React, { Component } from "react";
import DrillCard from "./DrillCard";
import UserDrillsManager from "../../modules/UserDrillsManager";
import './Drills.css'


class UserDrillList extends Component {
    state = {
        Userdrills: []
    };
    componentDidMount() {
        console.log("mount")
        UserDrillsManager.getAll().then(drillsFromDatabase => {
            console.log(drillsFromDatabase)
            this.setState({
               Userdrills: drillsFromDatabase
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
                    {this.state.Userdrills.map(singleDrill =>
                        <DrillCard key={singleDrill.id} drillProps={singleDrill.drill} />
                    )}
                </div>
            </>

        );

    }
}
export default UserDrillList