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
            <Route path="/categories" component={Categories}/>
            <Route path="/subcategory/" component={Subcategories}/>
            <Route path="/activities" component={Activities}/>
            <Route path="/today" component={Today}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/statistics" component={Stats}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login}/>
    </Switch>
)
;

export default Main;