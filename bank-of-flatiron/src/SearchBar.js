import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="input-group flex-nowrap bg- m-2" >
    <span class="input-group-text" id="addon-wrapping">Search</span>
    <input id="Search"
      type="text"
      placeholder="Search your recent transactions!"
      value={searchTerm}
      onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
