import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router";
import {Button} from 'react-mdl';

const style = {
    registrationForm: {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Anton',
        color: 'white',
        border: 'solid',
        width: '200px',
        margin: 'auto'
    }
};

class Registration extends Component {
    state = {
        username: "",
        password: "",
        confirmPassword: "",
        redirect: false,
        warning: false,
        userWarning: false
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.username !== "" && this.state.password !== "" && this.state.confirmPassword !== ""){
            if (this.state.password === this.state.confirmPassword) {
                axios.post(`http://localhost:8080/validation/registration`, {
                    username: this.state.username,
                    password: this.state.password
                });
                this.setState({redirect: true})
            } else if (this.state.password === this.state.confirmPassword && this.state.username === "") {
                this.setState({userWarning: true})
            }
        } else {
            this.setState({warning: true});
        }
    };

    renderuserWarning = () => {
        if (this.state.userWarning) {
            return <p style={{color: 'red', fontFamily: 'Oxygen'}}>Please provide a username!</p>
        }
    };

    renderWarning = () => {
        if (this.state.warning) {
            return <p style={{color: 'red', fontFamily: 'Oxygen'}}>Check your password, it seems to be mismatched!</p>
        }
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/login"/>
        }
    };


    render() {
        return (
            <div className="registration" style={style.registrationForm}>
                {this.renderRedirect()}
                <form className="registration-form" onSubmit={this.onSubmit}>
                    <p style={{fontFamily: 'Advent Pro', fontWeight: 'bold', fontSize: '28px'}}>Registration</p>
                    <p><input type="text" name="username" onChange={this.onChange} value={this.state.user}
                              placeholder="Username"/></p>
                    <p><input type="password" name="password" onChange={this.onChange} value={this.state.password}
                              placeholder="Password"/></p>
                    <p><input type="password" name="confirmPassword" onChange={this.onChange}
                              value={this.state.confirmPassword} placeholder="Confirm Password"/></p>
                    <p><Button onClick={this.onSubmit}
                               style={{fontFamily: 'Advent Pro', fontWeight: 'bold', fontSize: '20px'}} value="Submit"
                               raised colored ripple>Submit</Button></p>
                    {this.renderWarning()}
                    {this.renderuserWarning()}
                </form>
            </div>
        );
    }
}

export default Registration;