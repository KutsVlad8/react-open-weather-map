import React from 'react';
import { SearchForm, SearchFormInput } from './SearchBar.styled';

const Searchbar = ({ onSearch }) => {
  const searchSubmit = event => {
    event.preventDefault();
    const query = event.currentTarget.elements.city.value;

    if (!query) return;
    onSearch(query);
  };
  return (
    <SearchForm onSubmit={searchSubmit}>
      <SearchFormInput name="city" placeholder="Enter city" />
    </SearchForm>
  );
};

export default Searchbar;
