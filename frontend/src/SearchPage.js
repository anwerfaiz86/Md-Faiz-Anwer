import React, { useState } from "react";
import axios from "axios";

const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [ads, setAds] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/ads?keyword=${keyword}`
      );
      setAds(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Search Ads</h1>
      <input
        type="text"
        placeholder="Search ads..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="ad-grid">
        {ads &&
          ads.map((ad) => (
            <div key={ad.id} className="ad-card">
              <img src={ad.image} alt={ad.headline} />
              <h3>{ad.companyName}</h3>
              <p>{ad.primaryText}</p>
              <p>{ad.headline}</p>
              <p>{ad.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPage;