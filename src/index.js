import React from 'react';
import ReactDOM from 'react-dom';
import CitySelect from './CitySelect';
import './index.css';
import data from '../data.json';

let selectedCities;

function handleResult(result){
  selectedCities = result;
  console.log(selectedCities);
}

ReactDOM.render(
  <CitySelect onResult={handleResult} data={data}/>,
  document.getElementById('root')
);
