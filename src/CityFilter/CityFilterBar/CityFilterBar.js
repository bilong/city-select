import React, { Component } from 'react';
import './CityFilterBar.css'


class LetterItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li><a>{this.props.letter}</a></li>
    );
  }
}

class LetterFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let letters = [];
    ["All", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"].forEach((letter) => {
      letters.push(<LetterItem key={letter} letter={letter}/>);
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
  }

  render() {

    return (
      <div className="city-filter-bar">
        <LetterFilter letter={this.props.currentLetter}/>
        <ToggleFilter toggle={this.props.toggle}/>
      </div>
    );
  }
}

export default CityFilterBar;
