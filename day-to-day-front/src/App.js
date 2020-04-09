import React from 'react';
import './App.css';
import {Content, Header, Navigation} from "react-mdl";
import Main from "./components/Main";
import {Layout} from "react-mdl";
import {Link} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Layout>
                <Header className="header" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Advent Pro', fontSize: '40px', fontWeight: 'bold'}} to="/">Brave New World</Link>} scroll>
                    <Navigation className="nav-header">
                        <Link className="nav-link" to="/activities">My Activities</Link>
                        <Link className="nav-link" to="/today">Today</Link>
                        <Link className="nav-link" to="/calendar">Calendar</Link>
                        <Link className="nav-link" to="/statistics">Stats</Link>
                        <Link className="nav-link" to="registration">Registration</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                    </Navigation>
                </Header>
                <Content style={{width: '100%', height: '100%'}}>
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
}

export default App;
