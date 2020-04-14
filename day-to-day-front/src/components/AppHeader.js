import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {Navigation} from "react-mdl";

class AppHeader extends Component {
    state = {
        redirect: false
    };

    logout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        this.setState({redirect: true});
    };

    renderRedirect() {
        if (this.state.redirect) {
            return (
                <Redirect to="/"/>
            )
        }
    }

    render() {
        const regLoginLink = (
            <Navigation className="nav-header">
                <Link className="nav-link" to="/activities">My Activities</Link>
                <Link className="nav-link" to="/today">Today</Link>
                <Link className="nav-link" to="/calendar">Calendar</Link>
                <Link className="nav-link" to="/statistics">Stats</Link>
                <Link className="nav-link" to="registration">Registration</Link>
                <Link className="nav-link" to="/login">Login</Link>
            </Navigation>
        );

        const logoutLink = (
            <Navigation className="nav-header">
                <Link className="nav-link" to="/activities">My Activities</Link>
                <Link className="nav-link" to="/today">Today</Link>
                <Link className="nav-link" to="/calendar">Calendar</Link>
                <Link className="nav-link" to="/statistics">Stats</Link>
                <Link className="nav-link" to="/" onClick={this.logout.bind(this)}>Hello, {}Logout</Link>
            </Navigation>
        );

        return (
            <div>
                {this.renderRedirect()}
                {localStorage.token ? logoutLink : regLoginLink}
            </div>
        );
    }
}

export default AppHeader;