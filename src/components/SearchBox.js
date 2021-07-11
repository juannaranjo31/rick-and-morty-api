import React from "react";
import {residentInfo} from './ResidentInfo';

export const SearchBox = ({ filter, setFilter }) => {
  const handleInput = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <section className="filter">
      <input
        type="text"
        placeholder="Character Name"
        name="Search"
        onChange={handleInput}
        value={filter}
      />
    </section>
  );
};


export default SearchBox;