## Step1: Break The UI Into A Component hierarchy

1. CitySelect: contains the entirety of the component
2. CitySelectHeader: receives radio selection
3. CityFilter: contains the main body of selection of the cities
4. CityFilterHeader: contains the cities' category filer and the search bar
5. CityFilterBar: contains the letter filter and the toggle selection
6. CityFilterBody: contains the filtered cities
7. CategoryFilter: the category filter
8. SearchBar: the search bar
9. LetterFilter: the letter filter
10. ToggleFilter: the toggle filter

## Step2: Build A Static Version in React

## Step3: Identify The Minimal (but complete) Representation Of UI State

- searchText
- currentLetter
- currentCategory

## Identify Where Your State Should Live

- CityFilter

## Add Inverse Data Flow
