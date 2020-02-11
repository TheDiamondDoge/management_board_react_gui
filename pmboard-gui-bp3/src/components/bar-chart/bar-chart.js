import React from "react";
import Chart from "chart.js";
import "chartjs-plugin-annotation";
import PropTypes from "prop-types";

export default class BarChart extends React.Component {
    chartRef = React.createRef();
    barChart = null;

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.barChart) {
            this.barChart.destroy();
        }
        this.createChart(this.props.data);
    }

    render() {
        return (
            <div>
                <canvas id="myChart" ref={this.chartRef}/>
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
}

BarChart.propTypes = {
    data: PropTypes.object.isRequired,
};