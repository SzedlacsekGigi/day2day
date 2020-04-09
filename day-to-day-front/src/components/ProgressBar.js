import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";

class ProgressBar extends Component{

    render() {
        return (
            <div className="progress-bar">
                <Grid>
                    <Cell col={12}>
                        <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress}/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default ProgressBar;