import React, {Component} from "react";
import context from "../DataProvider";
import AddButton from "./AddButton";
import axios from "axios";

class Landing extends Component {

    state = {
        offer: "",
        buttonStyle : {
            height: '200px',
            width: '200px',
            margin: '0 auto'
        },
        buttonTextStyle: {
            fontFamily: 'Oxygen',
            fontWeight: 'bold',
            fontSize: '30px',
            padding: '90px 0',
            textAlign: 'center'
        },
        offerStyle: {
            textAlign: 'center',
            fontFamily: 'Advent Pro',
            fontSize: '40px',
            color: 'white'
        }
    };

    componentDidMount() {
        axios.get(`http://localhost:8080/activity/offer`)
            .then(response => {
                this.setState({offer: response.data});
            }).catch(error => {
                console.log(error);
        });
    }

    render() {
        return (
            <div className="landing-page">
                <h2 style={this.state.offerStyle}>Do something you haven't done in a long time</h2>
                <h2 style={this.state.offerStyle}>{this.state.offer}, maybe?</h2>
                <AddButton
                    buttonStyle={this.state.buttonStyle}
                    buttonTextStyle={this.state.buttonTextStyle}
                />
            </div>
        );
    }
}

Landing.contextType = context;
export default Landing;