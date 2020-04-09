import React, {Component} from "react";
import axios from "axios";
import CanvasJSReact from './canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Stats extends Component {
    state = {
        week: [],
        month: []
    };

    async componentDidMount() {
        axios.get(`http://localhost:8080/activity/statistics/week`)
            .then(response => this.setState({week: response}))
            .catch(error => {
                console.log(error);
            });
        axios.get(`http://localhost:8080/activity/statistics/month`)
            .then(response => this.setState({month: response}))
            .catch(error => {
                console.log(error);
            });
    }

    showStats = () => {
        console.log("Weekly statistics");
        console.log(this.state.week);
        console.log("Monthly statistics");
        console.log(this.state.month);
    };

    render() {
        const options1 = {
            theme: "dark1",
            animationEnabled: true,
            title: {text: 'Statistics of the week'},
            data: [{
                type: "pie",
                showInLegend: true,
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: this.state.week.data
            }]
        };
        const options2 = {
            theme: "dark1",
            animationEnabled: true,
            title: {text: 'Statistics of the month'},
            data: [{
                type: "pie",
                showInLegend: true,
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: this.state.month.data
            }]
        };
        return (
            <div className="stats">
                <p><CanvasJSChart options={options1}/></p>
                <p><CanvasJSChart options={options2}/></p>
            </div>
        );
    }
}

export default Stats;