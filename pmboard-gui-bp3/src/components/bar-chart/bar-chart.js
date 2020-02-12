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
        this.onChange = this.handleChange();
    }

    chartRef = React.createRef();
    barChart = null;
    onChange = null;

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.shouldChartUpdate) {
            if (this.barChart) {
                this.barChart.destroy();
            }
            const data = this.filterData(this.props.data);
            this.filtered = data;
            this.createChart(data);
        }
    }

    render() {
        let initialRange;
        if (!this.props.data.labels) {
            initialRange = [0, 0];
        } else {
            const {labels} = this.props.data;
            const min = labels[0];
            const max = labels[labels.length - 1];
            initialRange = [Number(min), Number(max)];
        }
        return (
            <div>
                <canvas id="myChart" className={styles.canvas} ref={this.chartRef}/>
                <RangeSlider
                    min={initialRange[0]}
                    max={initialRange[1]}
                    stepSize={1}
                    labelStepSize={5}
                    onChange={this.onChange}
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

    handleChange() {
        let timeout;
        return (range) => {
            this.setState({shouldChartUpdate: false});
            this.setState({range});
            clearTimeout(timeout);
            timeout = setTimeout(() => this.setState({shouldChartUpdate: true}), 300)
        }
    }

    filterData(data) {
        const range = this.state.range;
        if (!range) return data;

        const {labels} = data;
        const startIndex = labels.findIndex((item) => item == range[0]);
        const endIndex = labels.findIndex((item) => item == range[1]);

        let filtered = {};
        filtered.dev = data.dev.slice(startIndex, endIndex + 1);
        filtered.in = data.in.slice(startIndex, endIndex + 1);
        filtered.newIssues = data.newIssues.slice(startIndex, endIndex + 1);
        filtered.out = data.out.slice(startIndex, endIndex + 1);
        filtered.qa = data.qa.slice(startIndex, endIndex + 1);
        filtered.qaDone = data.qaDone.slice(startIndex, endIndex + 1);
        filtered.labels = data.labels.slice(startIndex, endIndex + 1);
        return filtered;
    }
}

BarChart.propTypes = {
    data: PropTypes.object.isRequired,
};