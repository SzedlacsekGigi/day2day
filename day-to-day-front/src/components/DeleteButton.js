import React, {Component} from "react";
import {FABButton, Icon} from "react-mdl";
import axios from "axios";

class DeleteButton extends Component{

    delete = (props) => {
        axios.delete(`http://localhost:8080/activity/${props}`);
        window.location.reload();
    };

    render() {
        return (
            <div>
                <FABButton mini colored ripple onClick={this.delete(this.props.activity)}>
                    <Icon name="delete"/>
                </FABButton>
            </div>
        );
    }
}

export default DeleteButton;