import React, { Component } from 'react';
import './CityFilterBar.css'


class LetterItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.letter);
  }

  render() {

    return (
      <li><a className={this.props.className} onClick={this.handleClick}>{this.props.letter}</a></li>
    );
  }
}

class LetterFilter extends Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(letter) {
    this.props.onLetterFilter(letter);
  }

  render() {
    const currentLetter = this.props.currentLetter;
    let letters = [];
    this.props.letters.forEach((letter) => {
      let className = letter === currentLetter ? "active" : "";
      letters.push(<LetterItem key={letter} onClick={this.handleFilter} className={className} letter={letter}/>);
    });

    return (
      <div className="letter-filter">
        <ul>
          {letters}
        </ul>
      </div>
    );
  }
}

class ToggleFilter extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSelect(e) {
    e.preventDefault();
    this.props.onClick(true);
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.onClick(false);
  }

  render() {

    return (
      <div className="toggle-filter">
        <ul>
          <li><a key="true" onClick={this.handleSelect}>全选当前</a></li>
          <li><a key="false" onClick={this.handleCancel}>清空当前</a></li>
        </ul>
      </div>
    );
  }
}

class CityFilterBar extends Component {
  constructor(props) {
    super(props);

    this.handleLetterFilter = this.handleLetterFilter.bind(this);
    this.handleSelectFilteredCities = this.handleSelectFilteredCities.bind(this);
  }

  handleLetterFilter(letter) {
    this.props.onLetterFilter(letter);
  }

  handleSelectFilteredCities(select) {
    this.props.onSelectFilteredCities(select);
  }

  render() {

    return (
      <div className="city-filter-bar">
        <LetterFilter onLetterFilter={this.handleLetterFilter} letters={this.props.letters} currentLetter={this.props.currentLetter}/>
        <ToggleFilter onClick={this.handleSelectFilteredCities}/>
      </div>
    );
  }
}

export default CityFilterBar;
