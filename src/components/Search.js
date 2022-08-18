import React from "react";

function Search({ searchTerm, onSearch }) {
  function handleSearch(e) {
    onSearch(e.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchTerm} onChange={handleSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
