import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(keyword);
    console.log(keyword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;