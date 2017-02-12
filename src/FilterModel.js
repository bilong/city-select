import Utils from './Utils.js';

class FilterModel {
  constructor(cities) {
    this.cities = cities;
    this.categories = Utils.getCategories(cities);
    this.onCategoryChange("全选");
    this.selectedCities = [];
  }

  onCategoryChange(category) {
    this.categoryFilteredCities = Utils.categoryFilter(this.cities, category);
    this.letters = Utils.getLetters(this.categoryFilteredCities);
    this.onLetterChange("All");
  }

  onLetterChange(letter) {
    this.filteredCities = Utils.letterFilter(this.categoryFilteredCities, letter);
  }

  onUserInput(searchText) {
    this.onCategoryChange("全选");
    this.filteredCities = Utils.findCities(this.cities.list, (city) => {
      return city.name.indexOf(searchText) > -1;
    });
  }

  onSelect(cityId, select) {
    select ? this.selectedCities.push(cityId) : this.selectedCities.splice(this.selectedCities.indexOf(cityId), 1);
  }

  onToggleSelect(toggle) {
    this.selectedCities = Utils.selectAll(toggle, this.selectedCities, this.filteredCities);
  }

}

export default FilterModel;
