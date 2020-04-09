import React, {Component} from "react";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {Redirect} from "react-router-dom";

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        };
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    };

    state = {
        redirect: false
    };


    onMouseEnterHandler() {
        this.setState({isHovered: true});
    }

    onMouseLeaveHandler() {
        this.setState({isHovered: false});
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({redirect: true});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/categories"/>
        }
    };

    render() {
        return (
            <div className="add-button">
                {this.renderRedirect()}
                <div className="icon" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}
                     onClick={this.onClick}>
                    <Fab color="secondary" style={this.props.buttonStyle} className="add-button">
                        {this.state.isHovered ? <p style={this.props.buttonTextStyle}>Add New</p> : <AddIcon/>}
                    </Fab>
                </div>
            </div>
        );
    }

}

export default AddButton;