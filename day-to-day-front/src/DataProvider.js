import React, {Component} from "react";
import axios from "axios";

const context = React.createContext({
    categories: [],
    subcategories: [],
    activities: [],
    fetchData: (url, stateName) => {},
    errors :[],
    user : null,
    setUser: () => {}
});

export class DataProvider extends Component {
    state = {
        fetchData: (url, stateName) => {
            axios.get(url).then(response => {
                this.setState({[stateName]: Array.from(response.data)});
            }).catch(reason => {
                console.log(reason);
                this.setState({"errors":[reason]})
            })
        }
    };

    render(){
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        );
    }
}

export default context;