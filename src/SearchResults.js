import React from 'react';

function SearchResults({ ads }) {
  return (
    <div className="grid">
      {ads.map((ad) => (
        <div key={ad._id} className="card">
          <h3>{ad.companyName}</h3>
          <p>{ad.primaryText}</p>
          <p>{ad.headline}</p>
          <p>{ad.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;