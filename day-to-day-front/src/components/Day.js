import React, {Component} from "react";
import DaysActivity from "./DaysActivity";
import {Button, Cell, Grid, ProgressBar} from "react-mdl";
import axios from 'axios';
import {Redirect} from "react-router";

class Day extends Component {

    state = {
        progress: "",
        redirect: false
    };

    formatDate = (date) => {
        return date.substring(0, date.indexOf(","));
    };

    async componentDidMount() {
        axios.get(`http://localhost:8080/activity/progress`, {
            params: {
                date: this.props.localdate
            }
        }).then(response => this.setState({progress: response.data}))
            .catch(error => {
                console.log(error);
            })
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({redirect: true});
    };

    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to="/categories"/>
        }
    };

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Grid style={{
                    background: 'white',
                    width: '25%',
                    textAlign: 'center',
                    justifyContent: 'center',
                }}>
                    <Cell col={12}>
                        <h3 style={{fontFamily: 'Anton'}}>{this.formatDate(this.props.date)}</h3>
                    </Cell>
                    <p style={{width: '50%', fontFamily: 'Anton', fontSize: '20px'}}>{this.props.progress}%</p>
                    <p style={{paddingTop: '5px', width: '100%'}}><ProgressBar style={{height: '10px'}} progress={this.props.progress}/></p>
                    {this.props.activities.map((activity) => (
                        <Cell col={12} style={{alignSelf: 'center'}}>
                            <DaysActivity activity={activity}/>
                        </Cell>
                    ))}
                    <Button raised accent ripple onClick={this.onClick}>Add New</Button>
                </Grid>
            </div>
        );
    }
}

export default Day;