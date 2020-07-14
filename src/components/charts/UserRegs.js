import React from 'react';
import Sunburst from 'sunburst-chart';
export default class SbChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: 'IBM User Profiles',
        color: 'mediumblue',
        children: [
          {
            name: 'Test ID',
            color: 'yellow',
            size: 1,
          },
          {
            name: 'User ID',
            color: 'red',
            children: [
              {
                name: 'Customer ID',
                color: 'orange',
                children: [
                  {
                    name: 'IEM',
                    color: 'palevioletred',
                    size: 1,
                  },
                ],
              },
              {
                name: 'Federated ID',
                color: 'blue',
                children: [
                  {
                    name: 'NG Profile',
                    color: 'green',
                    size: 1,
                  },
                  {
                    name: 'APIM',
                    color: 'pink',
                    size: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
      ready: false,
    };
  }
  componentDidMount() {
    this.setState({ ready: true });
  }
  render() {
    return (
      <div id="chart">
        {this.state.ready
          ? Sunburst()
              .data(this.state.data)
              .size('size')
              .color('color')
              .width(500)
              .height(500)(document.getElementById('chart'))
          : console.log('-')}
      </div>
    );
  }
}
