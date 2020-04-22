import React from 'react';
import './App.css';
import {Content, Header} from "react-mdl";
import Main from "./components/Main";
import {Layout} from "react-mdl";
import {Link} from "react-router-dom";
import AppHeader from "./components/AppHeader";
import axios from "axios";


function App() {
    axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };
    return (
        <div className="App">
            <Layout>
                <Header className="header" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Advent Pro', fontSize: '40px', fontWeight: 'bold'}} to="/">Brave New World</Link>} scroll>
                    <AppHeader/>
                </Header>
                <Content style={{width: '100%', height: '100%'}}>
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
}

export default App;
