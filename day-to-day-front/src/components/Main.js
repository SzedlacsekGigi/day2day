import React from "react";
import {Route, Switch} from 'react-router-dom';
import Landing from "./Landing";
import Categories from "./Categories";
import Subcategories from "./Subcategories";
import Activities from "./Activities";
import Today from "./Today";
import Calendar from "./Calendar";
import Stats from "./Stats";
import Registration from "./Registration";
import Login from "./Login";


const Main = () => (
    <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/categories" render={props => (
                <Categories/>
            )}/>
            <Route path="/subcategory/" render={props => (
                <Subcategories/>
            )}/>
            <Route path="/activities" render={props => (
                <Activities/>
            )}/>
            <Route path="/today" render={props => (
                <Today/>
            )}/>
            <Route path="/calendar" render={props => (
                <Calendar/>
            )}/>
            <Route path="/statistics" render={props => (
                <Stats/>
            )}/>
            <Route path="/registration" render={props => (
                <Registration/>
            )}/>
            <Route path="/login" render={props => (
                <Login/>
            )}/>
    </Switch>
)
;

export default Main;