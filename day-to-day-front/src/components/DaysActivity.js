import React, {Component} from "react";
import {Cell} from "react-mdl";

class DaysActivity extends Component{

    formatTime = (time) => {
        return time.substring(0, 5);
    };

    render() {
        return (
            <div>
                <Cell col={12}>
                    <p style={{margin: '0px', fontFamily: 'Oxygen'}}>{this.formatTime(this.props.activity.fromTime)} - {this.formatTime(this.props.activity.toTime)}</p>
                    <h4 style={{margin: '0px', fontFamily: 'Anton'}}>{this.props.activity.activityName}</h4>
                    <p style={{fontFamily: 'Oxygen'}}>{this.props.activity.description}</p>
                </Cell>
                <hr style={{borderTop: '3px dotted #e22947' }}/>
            </div>
        );
    }
}

export default DaysActivity;