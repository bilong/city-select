import React, { Component } from 'react';
import CityFilterHeader from './CityFilterHeader/CityFilterHeader.js';
import CityFilterBar from './CityFilterBar/CityFilterBar.js';
import CityFilterBody from './CityFilterBody/CityFilterBody.js';
import FilterModel from '../FilterModel.js';
import './CityFilter.css';

class CityFilter extends Component {
  constructor(props) {
    super(props);

    this.filterModel = new FilterModel(props.data);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleLetterChange = this.handleLetterChange.bind(this);
    this.handleToggleSelect = this.handleToggleSelect.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);

    this.state = {
      searchText: "",
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

  handleLetterChange(letter) {
    this.filterModel.onLetterChange(letter);
    this.setState({
      currentLetter: letter
    });
  }

  handleUserInput(searchText) {
    this.filterModel.onUserInput(searchText);
    this.setState({
      currentLetter: "All",
      currentCategory: "全选",
      searchText: searchText
    });
  }

  handleSelect(cityId, select) {
    this.filterModel.onSelect(cityId, select);
    this.props.onResult(this.filterModel.selectedCities);
    this.forceUpdate();
  }

  handleToggleSelect(toggle) {
    this.filterModel.onToggleSelect(toggle);
    this.props.onResult(this.filterModel.selectedCities);
    this.forceUpdate();
  }

  render() {

    let letters = this.filterModel.letters;
    let categories = this.filterModel.categories;
    let filteredCities = this.filterModel.filteredCities;
    let selectedCities = this.filterModel.selectedCities;

    return (
      <div className="city-filter">
        <div className="arrow"></div>
        <CityFilterHeader
          categories={categories}
          onUserInput={this.handleUserInput}
          onCategoryChange={this.handleCategoryChange}
          selectedCount={selectedCities.length}
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
          selectedCities={selectedCities}
        />
      </div>
    );
  }
}

export default CityFilter;
