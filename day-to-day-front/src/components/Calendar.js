import React, {Component} from 'react';
import {Calendar as ReactCalendar} from 'react-calendar';
import {Cell, Grid} from "react-mdl";
import 'react-calendar/dist/Calendar.css';
import Day from "./Day";
import axios from 'axios';

class Calendar extends Component {
    state = {
        date: new Date(),
        activities: [],
        progress: ""
    };

    async componentDidMount() {
        this.setState({date: new Date(Date.now())}, () => {
            axios.get(`http://localhost:8080/activity/day`, {
                params: {
                    date: this.state.date
                }
            })
                .then(response => this.setState({activities: Array.from(response.data)}))
                .catch(error => {
                    console.log(error)
                });
            axios.get(`http://localhost:8080/activity/progress`, {
                params: {
                    date: this.state.date
                }
            })
                .then(response => this.setState({progress: response.data}))
                .catch(error => {
                    console.log(error)
                });
        });

    }

    onChange = (e) => {
        this.setState({date: e}, () => {
            console.log("calendar day clicked: " + this.state.date);
            axios.get(`http://localhost:8080/activity/day/`, {
                params: {
                    date: this.state.date
                }
            })
                .then(response => this.setState({activities: Array.from(response.data)})
                ).catch(error => {
                console.log(error);
            });
            axios.get(`http://localhost:8080/activity/progress`, {
                params: {
                    date: this.state.date
                }
            }).then(response => this.setState({progress: response.data}))
                .catch(error => {
                    console.log(error)
                });
        });
        console.log('Progress: ' + this.state.progress);
    };

    render() {
        return (
            <div className="calendar-page">
                <Grid>
                    <Cell col={12} style={{align: 'bottom'}}>
                        <ReactCalendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </Cell>
                    <Cell col={12}>
                        <Day date={this.state.date.toLocaleString()}
                             localdate={this.state.date}
                             activities={this.state.activities}
                             progress={this.state.progress}/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Calendar;