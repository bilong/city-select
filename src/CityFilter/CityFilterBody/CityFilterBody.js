import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import './CityFilterBody.css'

class FilteredCityItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    let select = this.props.className !== "active";
    this.props.onSelect(this.props.city.id, select);
  }

  render() {

    return (
      <li>
        <Tooltip placement="bottom" overlay={<span>{this.props.province}</span>}>
          <a onClick={this.handleClick} className={this.props.className}>
            {this.props.city.name}
          </a>
        </Tooltip>
      </li>
    );
  }
}

class CityFilterBody extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(cityId, select) {
    this.props.onSelect(cityId, select);
  }

  render() {

    let filteredCities = [];
    this.props.filteredCities.forEach((province) => {
      province.cities.forEach((city) => {
        let className = this.props.selectedCities.indexOf(city.id) > -1 ? "active" : "";
        filteredCities.push(<FilteredCityItem key={city.name} onSelect={this.handleSelect} className={className} city={city} province={province.name}/>);
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
