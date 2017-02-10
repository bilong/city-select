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
        letters.indexOf(city.letter) < 0 ? letters.push(city.letter) : "";
      });
    });

    return ["All"].concat(letters.sort());
  }

  static categoryFilter(cities, category) {
    if (category === "全选") return cities.list;

    let options;
    cities.filter.forEach((e) => {
      if(e.name === category) options = e.options;
    });

    let result = options ? this.findCities(cities.list, (city) => { return options.indexOf(city.id) >= 0;}) : [];
    if (result.length > 0) return result;

    cities.list.forEach((province) => {
      province.name === category ? result.push(province) : "";
    });
    return result;
  }

  static letterFilter(list, letter) {
    if (letter === "All") return list;

    let result = this.findCities(list, (city) => {return letter === city.letter;});
    return result;
  }

  static findCities(list, callback) {
    let result = [];
    list.forEach((province) => {
      let cities = [];
      province.cities.forEach((city) => {
        callback(city) ? cities.push(city) : "";
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

}

export default Utils;
