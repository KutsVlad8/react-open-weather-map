import React from 'react';
import { SearchForm, SearchFormInput } from './SearchBar.styled';

const Searchbar = () => {
  const searchSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget.elements.city.value; // или event.target
    // const value = form.elements.city?.value?.trim(); // name="city"
    console.log('search value:', form);
  };
  return (
    <SearchForm onSubmit={searchSubmit}>
      <SearchFormInput name="city" placeholder="Enter city" />
      {/* <button type="submit">Search</button> */}
    </SearchForm>
  );
};

export default Searchbar;
