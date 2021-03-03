import React, { useState, useContext } from "react";
// import PropTypes from 'prop-types'
import "./SearchBar.scss";
// import Content from "../Content/Content";
import { ScrollContext } from "../../contexts/ScrollProvider";

const SearchBar = () => {
  const { test } = useContext(ScrollContext);
  const [search, setSearch] = useState("");

  const searchContent = (e) => {
    setSearch(e.target.value);
  };

  console.log(test);

  return (
    <div className="SearchBar">
      <div className="SearchBar__top">
        Searchbar, Field
        <input
          type="text"
          placeholder="Search Countries"
          onChange={searchContent}
          value={search}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;

// fliter & map with content component?
// https://codesandbox.io/embed/react-hooks-search-filter-4gnwc
// https://codesandbox.io/s/m4x9qx1z8?file=/src/SearchInput.js
