import React, { useState } from "react";

import "./index.css";

function SearchForm({handleSearch}) {
  const [getUser, setGetUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(getUser);
  }

  function updateInput(e) {
    const input = e.target.value;
    setGetUser(input);
  }

  return (
    <div className="searchForm">
      <form role="form" onSubmit={handleSubmit} aria-label="search">
        <label htmlFor="getUser">Input User here</label>
        <input id="getUser" type="text" value={getUser} onChange={updateInput}/>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SearchForm;
