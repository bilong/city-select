import Utils from './Utils.js';

class FilterModel {
  constructor(cities) {
    this.cities = cities;
    this.categories = Utils.getCategories(cities);
    this.onCategoryChange("全选");
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

  onToggleSelect(toggle, selectedCities) {
    return Utils.selectAll(toggle, selectedCities, this.filteredCities);
  }

}

export default FilterModel;
