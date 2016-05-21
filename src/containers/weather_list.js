import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const { lat, lon } = cityData.city.coord;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="red" /></td>
        <td><Chart data={pressure} color="blue" /></td>
        <td><Chart data={humidity} color="green" /></td>
      </tr>
    )
  }

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
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapDispatchToProps({ weather }) {
  return { weather };
}

export default connect(mapDispatchToProps)(WeatherList);
