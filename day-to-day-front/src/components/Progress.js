import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Progress extends Component {
    state = {};

    render() {
        return (
            <Grid className="progresscircle" style={{alignment: 'center'}}>
                <Cell col={2}>
                    <div className="circular-progress">
                        <CircularProgressbar value={this.props.progress} maxValue={100} text={`${this.props.progress}%`}
                            styles={buildStyles({
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: '#43C6AC',
                                textColor: '#43C6AC',
                                backgroundColor: '#F8FFAE'
                            })}
                        />
                    </div>
                </Cell>
            </Grid>
        );
    }
}

export default Progress;