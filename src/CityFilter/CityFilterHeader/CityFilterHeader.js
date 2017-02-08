import React, { Component } from 'react';
import './CityFilterHeader.css'

class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.category;

    return (
      <li>{category.name}</li>
    );
  }
}

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let category = {"name": "全选"};
    let categories = [];
    categories.push(<CategoryItem key={category.name} category={category} />);

    this.props.cities.filter.forEach((category) => {
      categories.push(<CategoryItem key={category.name} category={category} />);
    });
    this.props.cities.list.forEach((category) => {
      categories.push(<CategoryItem key={category.name} category={category} />);
    });

    return (
      <div className="category-filter">
        <a href="#"> &lt; </a>
        <ul>
          {categories}
        </ul>
        <a href="#"> &gt; </a>
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
