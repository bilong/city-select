import React, { Component } from 'react';
import CityFilterHeader from './CityFilterHeader/CityFilterHeader.js';
import CityFilterBar from './CityFilterBar/CityFilterBar.js';
import CityFilterBody from './CityFilterBody/CityFilterBody.js';
import Utils from '../Utils.js'
import './CityFilter.css';

class CityFilter extends Component {
  constructor(props) {
    super(props);

    this.categories = Utils.getCategories(props.cities);
    this.categoryFileteredCities = Utils.categoryFilter(props.cities, "全选");
    this.filteredCities = Utils.letterFilter(this.categoryFileteredCities, "All");
    this.letters = Utils.getLetters(this.categoryFileteredCities);

    this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
    this.handleLetterFilter = this.handleLetterFilter.bind(this);

    this.state = {
      currentCategory: "全选",
      searchText: "",
      currentLetter: "All",
      selectedCities: []
    };
  }

  handleCategoryFilter(category) {
    this.categoryFileteredCities = Utils.categoryFilter(this.props.cities, category);
    this.letters = Utils.getLetters(this.categoryFileteredCities);
    this.filteredCities = Utils.letterFilter(this.categoryFileteredCities, "All");
    this.setState({
      currentCategory: category,
      currentLetter: "All"
    });
  }

  handleLetterFilter(letter) {
    this.filteredCities = Utils.letterFilter(this.categoryFileteredCities, letter);
    this.setState({
      currentLetter: letter
    });
  }

  render() {

    return (
      <div className="city-filter">
        <div className="arrow"></div>
        <CityFilterHeader onCategoryFilter={this.handleCategoryFilter} categories={this.categories} selectedCount={this.state.selectedCities.length} currentCategory={this.state.currentCategory} searchText={this.state.searchText}/>
        <CityFilterBar onLetterFilter={this.handleLetterFilter} letters={this.letters} currentLetter={this.state.currentLetter} toggle={this.state.toggle}/>
        <CityFilterBody filteredCities={this.filteredCities}/>
      </div>
    );
  }
}

export default CityFilter;
