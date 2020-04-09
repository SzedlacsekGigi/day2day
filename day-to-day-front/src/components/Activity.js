import React, {Component} from "react";
import {Card, CardActions, CardText, CardTitle, FABButton, Icon} from "react-mdl";
import axios from "axios";
const style = {
    activityCard: {
        width: '250px',
        height: '300px',
        fontFamily: 'Reem Kufi',
        marginLeft: '60px',
        marginTop: '20px'
}
};

class Activity extends Component{

    delete = () => {
        axios.delete(`http://localhost:8080/activity/${this.props.activity.id}`)
        window.location.reload();
    };

    render() {
        return(
            <div className="activity">
                <Card className="activities" style={style.activityCard}>
                    <CardTitle style={{
                        background: 'url(https://static1.squarespace.com/static/5b69ea5c36099b109a53265d/t/5e3c9473e6146d336270d5c4/1581028467588/Chevron.png) center  / cover',
                        fontFamily: 'Reem Kufi', height: '90px', fontSize: '30px', fontWeight: 'bold', color: 'black'
                    }}>{this.props.activity.activityName}
                        <p style={{fontFamily: 'Reem Kufi'}}>{this.props.activity.date}</p>
                    </CardTitle>
                    <CardText>
                        <p>{this.props.activity.description}</p>
                    </CardText>
                    <CardActions border>
                        <p>This activity took you {this.props.activity.activityLength} minutes</p>
                        <FABButton mini colored ripple onClick={this.delete}>
                            <Icon name="delete"/>
                        </FABButton>
                    </CardActions>
                </Card>
            </div>
        )
    }

}

export default Activity;