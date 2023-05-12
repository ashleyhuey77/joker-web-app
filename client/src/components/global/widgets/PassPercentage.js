import {Component} from "react";
import { AgChartsReact } from 'ag-charts-react';
import {getData} from "./Data.js";

export class PassPercentage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                data,
                series: [
                    {
                        type: 'pie',
                        angleKey: 'count',
                        fills: ['#33da27', '#ea0015'],
                        strokeWidth: 0,
                        innerRadiusOffset: -12,
                        highlightStyle: {
                          item: {
                            fill: '#939393',
                          },
                        },
                        innerLabels: [
                            {
                                text: percentage(data[0].count),
                                color: '#33da27',
                                fontSize: 25,
                            },
                            {
                                text: 'Passing',
                                fontSize: 14,
                                margin: 4,
                                color: '#212529'
                            },
                        ],
                        innerCircle: {
                            fill: '#dff3ea',
                        },
                    },
                ],
                background: {
                  fill: 'transparent',
                },
            },
        };
    }

    componentDidMount() {}

    render() {
        return <AgChartsReact options={this.state.options} />;
    }
}

const data = getData();
const total = data.reduce((sum, d) => sum + d.count, 0);
const percentage = (value) => `${((value / total) * 100).toFixed()}%`;

