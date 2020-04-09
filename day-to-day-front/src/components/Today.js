import React, {Component} from 'react';
import axios from "axios";
import Activity from "./Activity";
import {Cell, Grid} from "react-mdl";
import Progress from "./Progress";
import AddButton from "./AddButton";

const now = new Date();

function RenderActivities(props) {
    const todaysActivities = props.todaysActivities;
    if (Array.isArray(todaysActivities) && todaysActivities.length) {
        return (
            <Grid>
                <div className="today-progress" style={{width: '100%'}}>
                <Cell col={12}>
                    <Progress
                        date={props.date}
                        progress={props.progress}
                    />
                </Cell>
                </div>
                <div className="today-activities" style={{width: '100%'}}>
                {todaysActivities.map((activity) => (
                    <Cell col={3}>
                        <Activity activity={activity}/>
                    </Cell>
                ))}
                    <AddButton
                        buttonStyle={props.buttonStyle}
                        buttonTextStyle={props.buttonTextStyle}
                        style={{position: 'fixed'}}
                    />
                </div>
            </Grid>
        )
    } else {
        return (
            <div className="no-activities">
                <h1>There is no activity recorded today</h1>
                <AddButton/>
            </div>
        )
    }
}

class Today extends Component {
    state = {
        todaysActivities: [],
        progress: "",
        date: now.toLocaleString(),
        buttonStyle: {
            width: '100px',
            height: '100px'
        },
        buttonTextStyle: {
            fontFamily: 'Advent Pro',
            fontWeight: 'bold',
            fontSize: '12px',
            padding: '40px 0'
        }
    };

    async componentDidMount() {
        axios.get(`http://localhost:8080/activity/today`)
            .then(response => {
                this.setState({todaysActivities: Array.from(response.data)});
            }).catch(error => {
            console.log(error);
        });
        axios.get(`http://localhost:8080/activity/progress`, {
            params: {
                date: now
            }
        })
            .then(response => {
                this.setState({progress: response.data});
            }).catch(error => {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="todayGrid">
                <RenderActivities todaysActivities={this.state.todaysActivities} date={this.state.date} progress={this.state.progress}
                buttonStyle={this.state.buttonStyle} buttonTextStyle={this.state.buttonTextStyle}
                />
            </div>
        );
    }
}

export default Today;