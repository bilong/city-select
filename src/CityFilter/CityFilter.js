import React, { Component } from 'react';
import CityFilterHeader from './CityFilterHeader/CityFilterHeader.js';
import CityFilterBar from './CityFilterBar/CityFilterBar.js';
import CityFilterBody from './CityFilterBody/CityFilterBody.js';
import './CityFilter.css';

class CityFilter extends Component {
  constructor(props) {
    super(props);

    this.categories = ["全选"];
    props.cities.filter.forEach((category) => {
      this.categories.push(category.name);
    });
    props.cities.list.forEach((category) => {
      this.categories.push(category.name);
    });

    this.handleCategoryFilter = this.handleCategoryFilter.bind(this);

    this.state = {
      currentCategory: "全选",
      searchText: "",
      currentLetter: "All",
      toggle: false
    };
  }

  handleCategoryFilter(category) {
    this.setState({
      currentCategory: category
    });
  }

  render() {
    const cities = this.props.cities;

    let filteredCities = cities.list.filter((province) => {
      return true;
    });

    return (
      <div className="city-filter">
        <div className="arrow"></div>
        <CityFilterHeader onCategoryFilter={this.handleCategoryFilter} categories={this.categories} selectedCount={filteredCities.length} currentCategory={this.state.currentCategory} searchText={this.state.searchText}/>
        <CityFilterBar currentLetter={this.state.currentLetter} toggle={this.state.toggle}/>
        <CityFilterBody cities={filteredCities}/>
      </div>
    );
  }
}

export default CityFilter;
