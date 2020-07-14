//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';

//Including the chart type
import Column2D from 'fusioncharts/viz/column2d';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
  type: 'column2d', // The chart type
  width: '700', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subCaption: 'In MMbbl = One Million barrels',
      xAxisName: 'Country',
      yAxisName: 'Reserves (MMbbl)',
      numberSuffix: 'K',
      theme: 'fusion',
    },
    // Chart Data
    data: [
      {
        label: 'Venezuela',
        value: '290',
      },
      {
        label: 'Saudi',
        value: '260',
      },
      {
        label: 'Canada',
        value: '180',
      },
      {
        label: 'Iran',
        value: '140',
      },
      {
        label: 'Russia',
        value: '115',
      },
      {
        label: 'UAE',
        value: '100',
      },
      {
        label: 'US',
        value: '30',
      },
      {
        label: 'China',
        value: '30',
      },
    ],
  },
};

//Your react component
class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = chartConfigs;
    this.updateData = this.updateData.bind(this);
  }

  //This function generates random number.
  getRandomNumber() {
    var max = 290,
      min = 30;
    return Math.round((max - min) * Math.random() + min);
  }

  //Handler for update button.
  //Randomly updates the values of the chart.
  updateData() {
    var prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[2].value = this.getRandomNumber();
    prevDs.data[3].value = this.getRandomNumber();
    this.setState({
      dataSource: prevDs,
    });
  }

  //Create the button
  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <center>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={this.updateData}>
            Change Chart Data
          </button>
        </center>
      </div>
    );
  }
}

//DOM element to pass the react-fusioncharts component
ReactDOM.render(<Chart />, document.getElementById('root'));
