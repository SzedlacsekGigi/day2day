import React, {Component} from "react";
import {Button, Cell, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "react-mdl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Congrats from "./Congrats";

const style = {
    buttonStyle: {
        height: '200px',
        width: '200px',
        fontFamily: 'Anton'
    },
    buttonTextStyle: {
        fontSize: '30px',
        paddingTop: '25px'
    },
    iconStyle: {
        fontSize: '45px',
        top: '50%',
        left: '45%'
    },
    submitButton: {
        position: 'absolute',
        top: '90%',
        left: '50%',
    },
    closeButton: {
        position: 'absolute',
        top: '90%',
        right: '50%'
    },
    formButtons : {
        textAlign: 'center'
    }
};

class Subcategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            openDialog: false,
            showCongrats: false
        };
        this.closeCongratsDialog = this.closeCongratsDialog.bind(this);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    state = {
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        description: "",
        subcategory: "",
        activity: ""
    };

    chooseIcon(categoryName) {
        if (categoryName === "Meditation") {
            return "spa"
        } else if (categoryName === "Journaling") {
            return "edit"
        } else if (categoryName === "Giving Gratitude") {
            return "favorite"
        } else if (categoryName === "Planning") {
            return "event"
        } else if (categoryName === "Writing") {
            return "edit"
        } else if (categoryName === "Create") {
            return "brush"
        } else if (categoryName === "Breathing exercises") {
            return "eco"
        } else if (categoryName === "Workout") {
            return "fitness_center"
        } else if (categoryName === "Took vitamins") {
            return "healing"
        } else if (categoryName === "Yoga") {
            return "accessibility_new"
        } else if (categoryName === "Stretching") {
            return "emoji_people"
        } else if (categoryName === "Pamper yourself") {
            return "bubble_chart"
        } else if (categoryName === "SMR Foam Rolling") {
            return "rotate_right"
        } else if (categoryName === "Dog walking") {
            return "pets"
        } else if (categoryName === "Learned something new") {
            return "school"
        } else if (categoryName === "Reading") {
            return "menu_book"
        } else if (categoryName === "Watching a movie/show") {
            return "videocam"
        } else if (categoryName === "Reading") {
            return "menu_book"
        } else if (categoryName === "Playing a game") {
            return "videogame_asset"
        } else if (categoryName === "Reading") {
            return "menu_book"
        } else if (categoryName === "Video chat") {
            return "voice_chat"
        } else if (categoryName === "Phone call") {
            return "call"
        } else if (categoryName === "Boardgaming") {
            return "casino"
        } else if (categoryName === "Online gaming") {
            return "sports_esports"
        } else if (categoryName === "Reading") {
            return "menu_book"
        } else if (categoryName === "Cleaning the house") {
            return "house"
        } else if (categoryName === "Watering the plants") {
            return "local_florist"
        } else if (categoryName === "Cooking") {
            return "local_dining"
        } else if (categoryName === "Organizing") {
            return "view_module"
        } else if (categoryName === "Do the laundry") {
            return "all_out"
        } else if (categoryName === "Ironing") {
            return "near_me"
        } else if (categoryName === "Studying") {
            return "school"
        } else if (categoryName === "Work") {
            return "work"
        }
    }

    handleDateChange = date => {
        this.setState({date: date});
        console.log(this.state.date);
    };

    handleStartTimeChange = time => {
        this.setState({startTime: time});
    };

    handleEndTimeChange = time => {
        this.setState({endTime: time});
    };

    onMouseEnterHandler() {
        this.setState({isHovered: true});
    }

    onMouseLeaveHandler() {
        this.setState({isHovered: false});
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({openDialog: true});
        this.setState({subcategory: this.props.subcategory.subcategoryName});
    };

    handleDialogClose = () => {
        this.setState({openDialog: false});
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    openCongratsDialog = () => {
        this.setState({showCongrats: true});
    };

    closeCongratsDialog = () => {
        this.setState({showCongrats: false});
    };


    onSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/activity/add/`, {
            subcategory: this.state.subcategory,
            activityName: this.state.activity,
            description: this.state.description,
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime
        });
        console.log("Activity submission sent");
        this.handleDialogClose();
        this.openCongratsDialog();
        this.setState({subcategory: ""});
        this.setState({activityName: ""});
        this.setState({description: ""});
        this.setState({date: ""});
        this.setState({startTime: ""});
        this.setState({endTime: ""});
    };

    render() {
        return (
            <div className="subcategory">
                <Grid>
                    <Cell col={4}>
                        <div className="icon">
                            <button
                                className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
                                style={style.buttonStyle}
                                onMouseEnter={this.onMouseEnterHandler}
                                onMouseLeave={this.onMouseLeaveHandler}
                                onClick={this.onClick}>
                                {this.state.isHovered ?
                                    <p style={style.buttonTextStyle}>{this.props.subcategory.subcategoryName}</p> :
                                    <i style={style.iconStyle}
                                       className="material-icons">{this.chooseIcon(this.props.subcategory.subcategoryName)}</i>
                                }
                            </button>
                        </div>
                    </Cell>
                </Grid>
                <div className="add-dialog">
                    <Dialog open={this.state.openDialog} style={{width: '400px'}}
                            aria-labelledby="form-dialog-title" className="form-dialog">
                        <DialogTitle
                            id="form-dialog-title" style={{
                            fontFamily: "Oxygen",
                            fontWeight: "bold",
                            textAlign: "center",
                            color: 'white'
                        }}>{this.props.subcategory.subcategoryName}
                        </DialogTitle>
                        <DialogContent>
                            <form className="form-content">
                                <p>Title</p>
                                <p><input style={{width: 300, textAlign: 'center'}} type="text" name="activity"
                                          value={this.state.activity} onChange={this.onChange}/></p>
                                <p style={{
                                    fontFamily: 'Oxygen',
                                    textAlign: "center"
                                }}>{this.props.subcategory.relevantQuestion}</p>
                                <p><textarea style={{height: 100, width: 300, textAlign: 'center'}} name="description"
                                             value={this.state.description} onChange={this.onChange}/></p>
                                <p><label>Date</label></p>
                                <p><DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleDateChange}
                                /></p>
                                <p><label>Start Time</label></p>
                                <p><DatePicker
                                    selected={this.state.startTime}
                                    onChange={this.handleStartTimeChange}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                /></p>
                                <p><label>End Time</label></p>
                                <p><DatePicker
                                    selected={this.state.endTime}
                                    onChange={this.handleEndTimeChange}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                /></p>
                            </form>
                        </DialogContent>
                        <DialogActions className="form-buttons" style={style.formButtons}>
                            <Button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                                    type="submit" onClick={this.onSubmit} style={style.submitButton}>Submit</Button>
                            <Button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                                    type="button" onClick={this.handleDialogClose} style={style.closeButton}>Close</Button>
                        </DialogActions>
                    </Dialog>
                    <Congrats open={this.state.showCongrats} handler={this.closeCongratsDialog}/>
                </div>
            </div>
        );
    }
}

export default Subcategory;