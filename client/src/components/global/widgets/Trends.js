import { Component } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import {getTrendsData} from "./Data.js";
import '../../../styles/Dashboard.css';

export class Trends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        theme: {
          palette: {
            fills: ['#f3342d', '#2df35b'],
            strokes: ['#ea0015', '#2cc001'],
          },
        },
        title: {
          text: 'Trend',
          textAlign: 'left',
          color: '#fff'
        },
        subtitle: {
          text: 'Pass/Fail trends over the length of runs',
          color: '#fff'
        },
        data: getTrendsData(),
        series: [
          {
            type: 'area',
            xKey: 'run',
            yKey: 'failed',
            yName: 'Failed',
          },
          {
            type: 'area',
            xKey: 'run',
            yKey: 'passed',
            yName: 'Passed',
          },
        ],
        axes: [
          {
            type: 'category',
            position: 'bottom',
            label: {
              color: '#fff'
            },
          },
          {
            type: 'number',
            position: 'left',
            label: {
              color: '#fff'
            },
          },
        ],
        legend: {
          enabled: true,
          position: 'top',
          item: {
            label: {
              color: '#fff'
            }
          }
        },
        background: {
          fill: '#212529',
        },
        foreground: {
          fill: '#fff',
        },
      },
    };
  }

  componentDidMount() {}

  render() {
    return <AgChartsReact options={this.state.options} />;
  }
}
