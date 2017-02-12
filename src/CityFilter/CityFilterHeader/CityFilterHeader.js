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
      <li>
        <a className={this.props.className} onClick={this.handleClick}>
          {this.props.category}
        </a>
      </li>
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
    this.props.onCategoryChange(category);
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
    if (currentCategory === "全选" && this.ul) {
      this.ul.style.left = "0";
    }
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.searchTextInput.value);
  }

  render() {
    return (
      <div className="search-bar">
        <span>
          已选中：<span className="selectedCount">{this.props.selectedCount}</span>个
        </span>
        <span>
          <input
            className="searchInput"
            type="text"
            ref={(input) => this.searchTextInput = input}
            onChange={this.handleChange}
            value={this.props.searchText}
          />
        </span>
      </div>
    );
  }
}

class CityFilterHeader extends Component {
  constructor(props) {
    super(props);

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(category) {
    this.props.onCategoryChange(category);
  }

  handleUserInput(searchText) {
    this.props.onUserInput(searchText);
  }

  render() {
    return (
      <div className="city-filter-header">
        <CategoryFilter
          onCategoryChange={this.handleCategoryChange}
          categories={this.props.categories}
          currentCategory={this.props.currentCategory}
        />
        <SearchBar
          onUserInput={this.handleUserInput}
          selectedCount={this.props.selectedCount}
          searchText={this.props.searchText}
        />
      </div>
    );
  }
}

export default CityFilterHeader;
