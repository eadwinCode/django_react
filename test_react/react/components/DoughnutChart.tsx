import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import ReactDOM from 'react-dom';

export class DoughnutChartDemo extends Component {

    render() {
        const data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            };

        return (
            <div>
                <div className="">
                    <div className="">
                        <h1>DoughnutChart</h1>
                        <p>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</p>
                    </div>
                </div>

                <div className="">
                    <Chart type="doughnut" data={data} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
	<DoughnutChartDemo/>,
  document.getElementById('root')
);