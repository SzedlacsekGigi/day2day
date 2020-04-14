import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import Landing from "./Landing";
import {Button} from 'react-mdl';

const style = {
    loginStyle : {
        textAlign: 'center',
        marginTop: '10%',
        padding: '20px',
        color: 'white',
        border: 'solid',
        width: '200px',
        margin: 'auto'
    }
};

class Login extends Component{
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            auth: false,
            redirect: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

  /*  state = {
        username: "",
        password: "",
        auth: false,
        redirect: false
    }; */

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/validation/login`,{
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            window.location.reload();
        })
            .catch(error => {
                console.log(error);
            });
    };

    renderRedirect = () => {
        if (this.state.redirect){
            return <Redirect to="/"/>
        }
    };

    render() {
        return (
            <div className="login" style={style.loginStyle}>
                {this.renderRedirect()}
                <form className="login-form">
                    <p style={{fontFamily: 'Advent Pro', fontWeight: 'bold', fontSize: '28px'}}>Login</p>
                    <p><input type="text" name="username" value={this.state.username} onChange={this.onChange} placeholder="Username"/></p>
                    <p><input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password"/></p>
                    <p><Button type="submit" style={{fontFamily: 'Advent Pro', fontWeight: 'bold', fontSize: '20px'}} onClick={this.onSubmit} value={this.props.auth} raised ripple colored accent>Login</Button></p>
                </form>
            </div>
        );
    }
}

export default Login;