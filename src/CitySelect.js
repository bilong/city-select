import React, { Component } from 'react';
import CitySelectHeader from './CitySelectHeader/CitySelectHeader.js';
import CityFilter from './CityFilter/CityFilter.js';
import './CitySelect.css';

class CitySelect extends Component {
  constructor(props) {
    super(props);
    this.handleResult = this.handleResult.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      select: true
    };
  }

  handleResult(result) {
    this.props.onResult(result);
  }

  handleSelectChange(value) {
    this.props.onResult([]);
    this.setState({
      select: value
    });
  }

  render() {
    const select = this.state.select;

    return (
      <div className="city-select">
        <CitySelectHeader select={select} onChange={this.handleSelectChange} />
        {select && <CityFilter onResult={this.handleResult} data={this.props.data} />}
      </div>
    );
  }
}

export default CitySelect;
