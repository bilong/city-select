class Utils {
  static getCategories(cities) {
    let categories = ["全选"];
    cities.filter.forEach((category) => {
      categories.push(category.name);
    });
    cities.list.forEach((category) => {
      categories.push(category.name);
    });

    return categories;
  }

  static getLetters(list) {
    let letters = [];
    list.forEach((province) => {
      province.cities.forEach((city) => {
        if (letters.indexOf(city.letter) < 0)
          letters.push(city.letter);
      });
    });

    return ["All"].concat(letters.sort());
  }

  static categoryFilter(cities, category) {
    if (category === "全选")
      return cities.list;

    let options;
    cities.filter.forEach((e) => {
      if(e.name === category)
        options = e.options;
    });

    let result = options ? this.findCities(cities.list, (city) => { return options.indexOf(city.id) > -1;}) : [];
    if (result.length > 0)
      return result;

    cities.list.forEach((province) => {
      if (province.name === category)
        result.push(province);
    });
    return result;
  }

  static letterFilter(list, letter) {
    if (letter === "All")
      return list;

    return this.findCities(list, (city) => {return letter === city.letter;});
  }

  static findCities(list, callback) {
    let result = [];
    list.forEach((province) => {
      let cities = [];
      province.cities.forEach((city) => {
        if (callback(city))
          cities.push(city);
      });
      if (cities.length > 0) {
        result.push({
          cities: cities,
          id: province.id,
          letter: province.letter,
          name: province.name
        });
      }
    });

    return result;
  }

  static selectAll(select, selectedCities, filteredCities) {
    if (select) {
      filteredCities.forEach((province) => {
        province.cities.forEach((city) => {
          if(selectedCities.indexOf(city.id) < 0)
            selectedCities.push(city.id);
        });
      });
    } else {
      filteredCities.forEach((province) => {
        province.cities.forEach((city) => {
          selectedCities = this.deleteArrayElement(selectedCities, city.id);
        });
      });
    }
    return selectedCities;
  }

  static deleteArrayElement(array, element) {
    let index = array.indexOf(element);
    if (index > -1)
      array.splice(index, 1);
    return array;
  }

  //static walkCities(list, callback)

}

export default Utils;
