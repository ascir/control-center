import * as React from 'react';
//import { render } from "react-dom";
import { Chart } from 'react-google-charts';

export default class RegUsers extends React.Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
          width={'500px'}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['x', 'IBMids'],
            ["TOTAL Registered IBMid's at end of April 2020", 24374124],
            ["NEW IBMid's created in month of April 2020", 24374124 + 610052],
            ["IBMid's removed in the month of April 2020", 24374124 - 75608],
            ['NET IBMid growth for April 2020', 24374124 + 534444],
          ]}
          options={{
            hAxis: {
              title: 'Time',
            },
            vAxis: {
              title: 'IBMid Growth',
            },
            // colors: ['palevioletred'],
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }
}
