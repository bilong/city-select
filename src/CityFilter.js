import React, { Component } from 'react';
import CityFilterHeader from './CityFilterHeader.js';
import CityFilterBar from './CityFilterBar.js';
import CityFilterBody from './CityFilterBody.js';

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

    let filteredCities = cities.list.filter((city) => {
      return true;
    });

    return (
      <div className="city-filter">
        <CityFilterHeader cities={cities} selectedCount={filteredCities.length} searchText={this.state.searchText}/>
        <CityFilterBar letter={this.state.letter} toggle={this.state.toggle}/>
        <CityFilterBody cities={filteredCities}/>
      </div>
    );
  }
}

export default CityFilter;
