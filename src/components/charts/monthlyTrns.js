import * as React from 'react';
//import { render } from "react-dom";
import { Chart } from 'react-google-charts';
import './styles.scss';

export default class Chart1 extends React.Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Month', 'No. of Transactions'],
            ['Feb-2019', 63144251],
            ['Mar-2019', 63774075],
            ['Apr-2019', 55820373],
            ['May-2019', 40043199],
            ['Jun-2019', 34087902],
            ['July-2019', 48383075],
            ['Aug-2019', 45272426],
            ['Sept-2019', 40094406],
            ['Oct-2019', 43803221],
            ['Nov-2019', 33307892],
            ['Dec-2019', 27849518],
            ['Jan-2020', 35669895],
            ['Feb-2020', 35243344],
            ['Mar-2020', 53307589],
          ]}
          rootProps={{ 'data-testid': '6' }}
          chartPackages={['corechart', 'controls']}
          render={({ renderControl, renderChart }) => {
            return (
              <div style={{ display: 'flex' }}>
                <div style={{ width: '35%' }}>{renderControl(() => true)}</div>
                <div style={{ width: '70%' }}>{renderChart()}</div>
              </div>
            );
          }}
          controls={[
            {
              controlType: 'CategoryFilter',
              controlID: 'select-month',
              options: {
                height: 1000,
                width: 500,
                filterColumnIndex: 0,
                ui: {
                  labelStacking: 'vertical', // | "vertical"
                  label: 'Filter By Month:',
                  allowTyping: false,
                  allowMultiple: true,
                },
              },
            },
            {
              controlType: 'NumberRangeFilter',
              controlID: 'range-filter',
              options: {
                filterColumnIndex: 1,
                ui: {
                  labelStacking: 'vertical',
                  label: 'Range Selection:',
                  allowTyping: false,
                  allowMultiple: false,
                },
              },
            },
          ]}
        />
      </div>
    );
  }
}
//render(<App />, document.querySelector("#app"));
