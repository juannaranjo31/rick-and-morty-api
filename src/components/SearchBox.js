import React from "react";
// eslint-disable-next-line
import { ResidentInfo } from "./ResidentInfo";

export const SearchBox = ({ filter, setFilter }) => {
  const handleInput = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <section className="filter">
      <input
        type="text"
        placeholder="Location ID"
        name="Search"
        onChange={handleInput}
        value={filter}
      />
      <button className="searchButton">Search</button>
    </section>
  );
};

export default SearchBox;
