import React, {Component} from "react";
import axios from "axios";
import Subcategory from "./Subcategory";
import {Cell, Grid} from "react-mdl";
import BackButton from "./BackButton";

class Subcategories extends Component {
    state = {
        subcategories: []
    };

    async componentDidMount() {
        const currentUrl = window.location.href;
        const callUrl = currentUrl.replace("3000", "8080");
        console.log(callUrl);
        axios.get(callUrl)
            .then(response => {
                this.setState({subcategories: Array.from(response.data)});
            }).catch(error => {
            console.log(error);
        })
    };

    render() {
        return (
            <div className="subcategory-page" style={{margin: 'auto', align: 'center'}}>
                <Grid className="back-button">
                    <BackButton/>
                </Grid>
                <Grid>
                    {this.state.subcategories.map((subcategory) => (
                        <Cell col={3} className="subcategory-cell">
                            <Subcategory subcategory={subcategory}/>
                        </Cell>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default Subcategories;