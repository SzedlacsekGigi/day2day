import React, {Component} from "react";
import {Redirect} from "react-router";

class BackButton extends Component {

    state = {
        redirect: false
    };

    handleBack = () => {
        this.setState({redirect: true});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/categories"/>
        }
    };

    render() {
        return (
            <div className="back-button">
                {this.renderRedirect()}
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
                        onClick={this.handleBack}>
                    <i className="material-icons">keyboard_backspace</i>
                </button>
            </div>
        );
    }
}

export default BackButton;
