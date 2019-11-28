import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Chart} from 'primereact/chart';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export class PieChartDemo extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				type: 'line',
				label: 'Dataset 1',
				borderColor: '#2196F3',
				borderWidth: 2,
				fill: false,
				data: [
					50,
					25,
					12,
					48,
					56,
					76,
					42
				]
			}, {
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: '#4CAF50',
				data: [
					21,
					84,
					24,
					75,
					37,
					65,
                    34
                ],
				borderColor: 'white',
				borderWidth: 2
			}, {
				type: 'bar',
				label: 'Dataset 3',
				backgroundColor: '#FFC107',
				data: [
					41,
					52,
					24,
					74,
					23,
					21,
					32
				]
            }]
        };

        const options = {
            responsive: true,
            title: {
                display: true,
                text: 'Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        };

        return (
            <div>
                <div className="content-section implementation">
                    <Chart type="bar" data={data} options={options} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
	<PieChartDemo/>,
  document.getElementById('root')
);