import React, { Component } from 'react';
import CitySelectHeader from './CitySelectHeader/CitySelectHeader.js';
import CityFilter from './CityFilter/CityFilter.js';
import './CitySelect.css';

class CitySelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      select: true
    };
  }

  handleSelectChange(value) {
    this.setState({
      select: value
    });
  }

  render() {
    const cities = this.props.cities;
    const select = this.state.select;

    return (
      <div className="city-select">
        <CitySelectHeader select={select} onChange={this.handleSelectChange} />
        {select && <CityFilter cities={cities} />}
      </div>
    );
  }
}

export default CitySelect;
