import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import './CityFilterBody.css'

class FilteredCityItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li><Tooltip placement="bottom" overlay={<span>{this.props.province}</span>}><a>{this.props.city.name}</a></Tooltip></li>
    );
  }
}

class CityFilterBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let filteredCities = [];
    this.props.cities.forEach((province) => {
      province.cities.forEach((city) => {
        filteredCities.push(<FilteredCityItem key={city.name} city={city} province={province.name}/>);
      });
    });

    return (
      <div className="city-filter-body">
        <nav>
          <ul>
            {filteredCities}
          </ul>
        </nav>
      </div>
    );
  }
}

export default CityFilterBody;
