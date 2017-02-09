import React, { Component } from 'react';
import CityFilterHeader from './CityFilterHeader/CityFilterHeader.js';
import CityFilterBar from './CityFilterBar/CityFilterBar.js';
import CityFilterBody from './CityFilterBody/CityFilterBody.js';
import './CityFilter.css';

class CityFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      letter: "All",
      toggle: false
    };
  }

  render() {
    const cities = this.props.cities;

    let filteredCities = cities.list.filter((province) => {
      return true;
    });

    return (
      <div className="city-filter">
        <div className="arrow"></div>
        <CityFilterHeader cities={cities} selectedCount={filteredCities.length} searchText={this.state.searchText}/>
        <CityFilterBar letter={this.state.letter} toggle={this.state.toggle}/>
        <CityFilterBody cities={filteredCities}/>
      </div>
    );
  }
}

export default CityFilter;
