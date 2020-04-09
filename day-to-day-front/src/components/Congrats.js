import React, {Component} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "react-mdl";


const style = {
    dialogStyle: {
        height: '200px',
        width: '400px',
        fontFamily: 'Oxygen',
        fontSize: '24px',
        textAlign: 'center',
        backgroundColor: '#f46b45'
    },
    buttonStyle: {
        position: 'absolute',
        top: '70%',
        left: '40%'
    },
    buttonDiv: {
        textAlign: 'center'
    }
};

class Congrats extends Component{

    render() {
        return (
            <div className="congrats-dialog">
                <Dialog open={this.props.open} style={style.dialogStyle}>
                    <DialogTitle>
                        Congratulations!
                    </DialogTitle>
                    <DialogContent>
                        <p>You've already did something for youself today!</p>
                        <p style={{fontWeight: "bold", fontSize: '20px'}}>Be proud!</p>
                    </DialogContent>
                    <DialogActions style={style.buttonDiv}>
                        <Button className="button" onClick={this.props.handler} style={style.buttonStyle} class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Thanks!</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Congrats;