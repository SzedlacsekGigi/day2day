import React, {Component} from "react";
import {Dialog, DialogContent, DialogTitle, Grid} from "react-mdl";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker} from '@material-ui/pickers';


class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleClosedDialog = this.handleClosedDialog.bind(this);
    }


    async componentDidMount() {
        this.handleOpenDialog();
    }

    handleOpenDialog() {
        this.setState(
            {openDialog: true}
        );
    }

    handleClosedDialog() {
        this.setState(
            {openDialog: false}
        );
    };


    state = {
        activityName: "",
        subcategoryName: "",
        fromTime: "",
        toTime: "",
        description: "",
        date: ""
    };

    render() {
        return (
            <div className="add-form">
                <Dialog open={this.state.openDialog}>
                    <DialogTitle>Add new Activity</DialogTitle>
                    <DialogContent>
                        <form className="activity-from" noValidate>
                            <input type="text" name="activity-description">Activity </input>
                            <TextField id="from-time"
                                       label="From"
                                       type="time"
                                       defaultValue="7:30"
                                       inputLabelProps={{shrink: true}}
                                       inputProps={{step: 300}}
                            />
                            <TextField id="to-time"
                                       label="To"
                                       type="time"
                                       defaultValue="8:30"
                                       inputLabelProps={{shrink: true}}
                                       inputProps={{step: 300}}/>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default AddForm;