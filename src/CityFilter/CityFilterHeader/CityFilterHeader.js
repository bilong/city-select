import React, { Component } from 'react';
import './CityFilterHeader.css';

class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.category);
  }

  render() {
    return (
      <li><a className={this.props.className} onClick={this.handleClick}>{this.props.category}</a></li>
    );
  }
}

class CategoryFilter extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(category) {
    this.props.onCategoryFilter(category);
  }

  handleClick(e) {
    e.preventDefault();
    let ul = this.ul;
    let navLeft = parseInt(ul.style.left) || 0;
    if (e.target.className === "category-prev") {
      ul.style.left = navLeft >= 0 ? ul.style.left : navLeft + 500 + "px";
    } else {
      ul.style.left = navLeft <= -1500 ? ul.style.left : navLeft - 500 + "px";
    }
  }

  render() {
    const currentCategory = this.props.currentCategory;
    let categories = [];
    this.props.categories.forEach((category) => {
      let className = category === currentCategory ? "active" : "";
      categories.push(<CategoryItem key={category} onClick={this.handleFilter} category={category} className={className}/>);
    });

    return (
      <div className="category-filter">
        <nav>
          <ul ref={(ul) => { this.ul = ul; }}>
            {categories}
          </ul>
        </nav>
        <a className="category-prev" onClick={this.handleClick}> &lt; </a>
        <a className="category-next" onClick={this.handleClick}> &gt; </a>
      </div>
    );
  }
}


class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar">
        <span>
          已选中: <span className="selectedCount">{this.props.selectedCount}</span>个
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

    this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
  }

  handleCategoryFilter(category) {
    this.props.onCategoryFilter(category);
  }

  render() {
    return (
      <div className="city-filter-header">
        <CategoryFilter onCategoryFilter={this.handleCategoryFilter} categories={this.props.categories} currentCategory={this.props.currentCategory}/>
        <SearchBar selectedCount={this.props.selectedCount} searchText={this.props.searchText}/>
      </div>
    );
  }
}

export default CityFilterHeader;
