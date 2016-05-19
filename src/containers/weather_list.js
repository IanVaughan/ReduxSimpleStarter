import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Pres</th>
            <th>Humididy</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    )
  }
}

function mapDispatchToProps({ weather }) {
  return { weather };
}

export default connect(mapDispatchToProps)(WeatherList);
