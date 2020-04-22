import React, {Component} from "react";
import axios from "axios";
import {Cell, Grid} from "react-mdl";
import Activity from "./Activity";
import {Redirect} from 'react-router-dom';

class Activities extends Component {
    state = {
        activities: [],
        url: "",
        redirect: false
    };

    async componentDidMount() {
        if (localStorage.getItem("token") === null) {
            this.redirectToUrl("/login")
        } else {
            axios.get(`http://localhost:8080/activity/all`)
                .then(response => {
                    this.setState({activities: Array.from(response.data)});
                }).catch(error => {
                console.log(error);
            });
        }
    };


    redirectToUrl = (url) => {
        this.setState({url: url});
        this.setState({redirect: true});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.url}/>
        }
    };

    render() {
        return (
            <div className="activities-page">
                {this.renderRedirect()}
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