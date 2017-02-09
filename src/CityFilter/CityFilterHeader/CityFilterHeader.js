import React, { Component } from 'react';
import './CityFilterHeader.css';

class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.category;

    return (
      <li><a>{category.name}</a></li>
    );
  }
}

class CategoryFilter extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let ul = document.getElementById('categories');
    let navLeft = parseInt(ul.style.left) || 0;
    if (e.target.className === "category-prev") {
      ul.style.left = navLeft >= 0 ? ul.style.left : navLeft + 500 + "px";
    } else {
      ul.style.left = navLeft <= -1500 ? ul.style.left : navLeft - 500 + "px";
    }
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
        <nav>
          <ul id="categories">
            {categories}
          </ul>
        </nav>
        <a className="category-prev" onClick={this.handleClick} href="#"> &lt; </a>
        <a className="category-next" onClick={this.handleClick} href="#"> &gt; </a>
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
          当前选中: <span className="selectedCount">{this.props.selectedCount}</span>个
        </span>
        <span>
          <input className="searchInput" type="text" value={this.props.searchText}/>
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
