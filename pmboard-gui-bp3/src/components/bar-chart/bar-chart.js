import React from "react";
import Chart from "chart.js";
import "chartjs-plugin-annotation";
import PropTypes from "prop-types";
import styles from "./bar-chart.module.css";
import {RangeSlider} from "@blueprintjs/core";

export default class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldChartUpdate: true,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    chartRef = React.createRef();
    barChart = null;
    timer = null;

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.shouldChartUpdate) {
            if (this.barChart) {
                this.barChart.destroy();
            }
            this.createChart(this.props.data);
        }
    }

    render() {
        let labelCount;
        let initialRange;
        if (!this.props.data.labels) {
            labelCount = 0;
        } else {
            labelCount = this.props.data.labels.length;
            initialRange = [0, labelCount];
        }
        return (
            <div>
                <canvas id="myChart" className={styles.canvas} ref={this.chartRef}/>
                <RangeSlider
                    min={0}
                    max={labelCount}
                    stepSize={1}
                    labelStepSize={1}
                    onChange={
                        this.handleChange
                    }
                    value={this.state.range || initialRange}
                />
            </div>
        );
    }

    createChart(data) {
        let myChartRef = this.chartRef.current.getContext("2d");
        this.barChart = new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: "New",
                        backgroundColor: "red",
                        data: data.newIssues,
                        stack: "1"
                    },
                    {
                        label: "Development",
                        backgroundColor: "orange",
                        data: data.dev,
                        stack: "1"
                    },
                    {
                        label: "QA",
                        backgroundColor: "yellow",
                        data: data.qa,
                        stack: "1"
                    },
                    {
                        label: "QA-done",
                        backgroundColor: "brown",
                        data: data.qaDone,
                        stack: "1"
                    },
                    {
                        label: "IN",
                        backgroundColor: "violet",
                        data: data.in,
                        stack: "2"
                    },
                    {
                        label: "OUT",
                        backgroundColor: "green",
                        data: data.out,
                        stack: "3"
                    }
                ]

            },
            options: {
                scales: {
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Number of CRs (severity ECMA)"
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Week “yyww”"
                        }

                    }]
                },
                annotation: {
                    annotations: [{
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: 250,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 4,
                        label: {
                            enabled: true,
                            content: "Test"
                        }
                    }]
                }
            }
        });
    }

    handleChange(range) {
        this.setState({shouldChartUpdate: false});
        this.setRange(range)
        console.log("ON CHANGE", this.timer);
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.setState({shouldChartUpdate: true}), 300)
    }

    setRange(range) {
        this.setState({range});
    }
}

BarChart.propTypes = {
    data: PropTypes.object.isRequired,
};