import { useState } from 'react';

function MapContainer() {
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    const searchQuery = encodeURIComponent(search.trim());
    const url = `https://maps.google.com/maps?q=${searchQuery}&output=embed`;
    document.getElementById('map').src = url;
   
  }
  

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search location:</label>
        <input type="text" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <iframe
        id="map"
        title="Map"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=marrakech&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
}

export default MapContainer;
