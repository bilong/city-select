import React, { Component } from 'react';
import './CitySelect.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const select = this.props.select;

    return (
      <div className="city-select-hearder">
        <span>省份/城市：</span>
        <form>
          {select ? (
            <input type="radio" value={!select} /> 不限
            <input type="radio" value={select} /> 自定义
          ) : (
            <input type="radio" value={!select} /> 不限
            <input type="radio" value={select} /> 自定义
          )}
        </form>
      </div>
    );
  }

}

class CitySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {select: true};
  }

  render() {
    const cities = this.props.cities;
    console.log(cities);
    return (
      <div className="city-select">
        <Header select={this.state.select}/>
      </div>
    );
  }
}

export default CitySelect;
