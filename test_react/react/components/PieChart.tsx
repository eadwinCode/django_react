import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import ReactDOM from 'react-dom';

export class PieChartDemo extends Component {

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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>PieChart</h1>
                        <p>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="pie" data={data} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
	<PieChartDemo/>,
  document.getElementById('root')
);