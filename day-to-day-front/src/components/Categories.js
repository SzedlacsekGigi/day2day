import React, {Component} from "react";
import Category from "./Category";
import axios from "axios";
import {Cell, Grid} from "react-mdl";

class Categories extends Component {
    state = {
        categories: []
    };

    async componentDidMount() {
        axios.get(`http://localhost:8080/category/all`)
            .then(response => {
                this.setState({categories: Array.from(response.data)});
            }).catch(error => {
            console.log(error);
        })
    };

    render() {
        return (
            <div className="categories-page" style={{width: '80%', margin: 'auto', alignItems: 'center'}}>
                <Grid>
                    {this.state.categories.map((category) => (
                        <Cell col={2}>
                            <Category category={category}/>
                        </Cell>
                    ))}
                </Grid>
            </div>
        )
    }

}

export default Categories;