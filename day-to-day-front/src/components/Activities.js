import React, {Component} from "react";
import axios from "axios";
import {Cell, Grid} from "react-mdl";
import Activity from "./Activity";

class Activities extends Component {
    state = {
        activities: []
    };

    async componentDidMount() {
        axios.get(`http://localhost:8080/activity/all`)
            .then(response => {
                this.setState({activities: Array.from(response.data)});
            }).catch(error => {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="activities-page">
                <Grid>
                    {this.state.activities.map((activity) => (
                        <Cell col={3}>
                            <Activity activity={activity}/>
                        </Cell>
                        ))}
                </Grid>
            </div>
        )
    }
}

export default Activities;