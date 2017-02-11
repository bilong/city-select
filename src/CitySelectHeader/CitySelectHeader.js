import React, { Component } from 'react';
import './CitySelectHeader.css';

class CitySelectRadio extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value !== "true") {
      this.props.onChange();
    }
  }

  render() {
    const select = this.props.select;

    return (
      <label>
        <input type="radio" onChange={this.handleChange} value={select} checked={select} /> {this.props.text}
      </label>
    );
  }
}

class CitySelectHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onChange(!this.props.select);
  }

  render() {
    const select = this.props.select;

    return (
      <div className="city-select-hearder">
        <span>省份\城市：</span>
        <span>
          <CitySelectRadio key={!select} select={!select} text={"不限"} onChange={this.handleChange} />
          <CitySelectRadio key={select} select={select} text={"自定义"} onChange={this.handleChange} />
        </span>
      </div>
    );
  }

}

export default CitySelectHeader;
