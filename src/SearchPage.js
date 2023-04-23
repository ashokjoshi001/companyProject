import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function SearchPage() {
  const [ads, setAds] = useState([]);

  const handleSearch = async (keyword) => {
    const response = await fetch(`http://localhost:4000/search?keyword=${keyword}`);
    const data = await response.json();
    setAds(data);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <SearchResults ads={ads} />
    </div>
  );
}

export default SearchPage;