import React, { Component } from 'react';
import CityFilterHeader from './CityFilterHeader/CityFilterHeader.js';
import CityFilterBar from './CityFilterBar/CityFilterBar.js';
import CityFilterBody from './CityFilterBody/CityFilterBody.js';
import FilterModel from '../FilterModel.js';
import './CityFilter.css';

class CityFilter extends Component {
  constructor(props) {
    super(props);

    this.filterModel = new FilterModel(props.cities);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleLetterChange = this.handleLetterChange.bind(this);
    this.handleToggleSelect = this.handleToggleSelect.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);

    this.state = {
      searchText: "",
      selectedCities: [],
      currentLetter: "All",
      currentCategory: "全选"
    };
  }

  handleCategoryChange(category) {
    this.filterModel.onCategoryChange(category);
    this.setState({
      currentLetter: "All",
      currentCategory: category
    });
  }

  handleUserInput(searchText) {
    this.filterModel.onUserInput(searchText);
    this.setState({
      currentLetter: "All",
      searchText: searchText,
      currentCategory: "全选"
    });
  }

  handleLetterChange(letter) {
    this.filterModel.onLetterChange(letter);
    this.setState({
      currentLetter: letter
    });
  }

  handleSelect(cityId, select) {
    let selectedCities = this.state.selectedCities;
    select ? selectedCities.push(cityId) : selectedCities.splice(selectedCities.indexOf(cityId), 1);
    this.setState({
      selectedCities: selectedCities
    });
  }

  handleToggleSelect(toggle) {
    let selectedCities = this.filterModel.onToggleSelect(toggle, this.state.selectedCities);
    this.setState({
      selectedCities: selectedCities
    });
  }

  render() {

    let letters = this.filterModel.letters;
    let categories = this.filterModel.categories;
    let filteredCities = this.filterModel.filteredCities;

    return (
      <div className="city-filter">
        <div className="arrow"></div>
        <CityFilterHeader
          categories={categories}
          onUserInput={this.handleUserInput}
          onCategoryChange={this.handleCategoryChange}
          selectedCount={this.state.selectedCities.length}
          currentCategory={this.state.currentCategory}
          searchText={this.state.searchText}
        />
        <CityFilterBar
          letters={letters}
          onToggleSelect={this.handleToggleSelect}
          onLetterChange={this.handleLetterChange}
          currentLetter={this.state.currentLetter}
        />
        <CityFilterBody
          onSelect={this.handleSelect}
          filteredCities={filteredCities}
          selectedCities={this.state.selectedCities}
        />
      </div>
    );
  }
}

export default CityFilter;
