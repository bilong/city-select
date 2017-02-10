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
  }

  render() {

    return (
      <div className="toggle-filter">
        <ul>
          <li><a>全选当前</a></li>
          <li><a>清空当前</a></li>
        </ul>
      </div>
    );
  }
}

class CityFilterBar extends Component {
  constructor(props) {
    super(props);

    this.handleLetterFilter = this.handleLetterFilter.bind(this);
  }

  handleLetterFilter(letter) {
    this.props.onLetterFilter(letter);
  }

  render() {

    return (
      <div className="city-filter-bar">
        <LetterFilter onLetterFilter={this.handleLetterFilter} letters={this.props.letters} currentLetter={this.props.currentLetter}/>
        <ToggleFilter toggle={this.props.toggle}/>
      </div>
    );
  }
}

export default CityFilterBar;
