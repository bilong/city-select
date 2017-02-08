import React, { Component } from 'react';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let categories = [];
    this.props.cities.filter.forEach((category) => {
      categories.push(<li> {category.name} </li>);
    });
    this.props.cities.list.forEach((category) => {
      categories.push(<li> {category.name} </li>);
    });

    return (
      <div className="category-filter">
        <button> &lt; </button>
        <ul>
          {categories}
        </ul>
        <button> &gt; </button>
      </div>
    );
  }
}


class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.selectedCount);
    return (
      <div className="search-bar">
        <span>
          Already choose: {this.props.selectedCount}ge
        </span>
        <span>
          <input type="text" value={this.props.searchText}/>
        </span>
      </div>
    );
  }

}

class CityFilterHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cities = this.props.cities;
    console.log(this.props.selectedCount);
    return (
      <div className="city-filter-header">
        <CategoryFilter cities={cities}/>
        <SearchBar selectedCount={this.props.selectedCount} searchText={this.props.searchText}/>
      </div>
    );
  }
}

export default CityFilterHeader;
