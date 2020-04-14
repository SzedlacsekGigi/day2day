import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Navigation} from "react-mdl";

class AppHeader extends Component{
    logout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        this.props.history.push("/");
    };

    render() {
        const regLink = (
            <Link className="nav-link" to="registration">Registration</Link>
        );
        const loginLink = (
            <Link className="nav-link" to="/login">Login</Link>
        );
        const regLoginLink = (
            regLink, loginLink
        );
        const logoutLink = (
            <Link className="nav-link" to="/" onClick={this.logout.bind(this)}>Logout</Link>
        );

        return (
            <div>
                <Navigation className="nav-header">
                    <Link className="nav-link" to="/activities">My Activities</Link>
                    <Link className="nav-link" to="/today">Today</Link>
                    <Link className="nav-link" to="/calendar">Calendar</Link>
                    <Link className="nav-link" to="/statistics">Stats</Link>
                    {localStorage.token ? logoutLink : regLoginLink}
                </Navigation>
            </div>
        );
    }
}

export default AppHeader;