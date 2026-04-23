import { useState, useCallback } from 'react';
import SearchInput from './SearchInput';
import ResultList from './ResultList';
import useDebounce from '../hooks/useDebounce';

const data = ['React', 'Vue','Angular','Svelte','Ember','Backbone','Preact','Alpine.js','Lit','Solid','Ruby on Rails','Django','Flask','Express','Spring'];

function SearchApp() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const handleChange = useCallback((value) => {
    setQuery(value);
  }, []);

  return (
    <div className="search-app">
      <h1>Search Frameworks</h1>
      <SearchInput value={query} onChange={handleChange} />
      <ResultList results={data} query={debouncedQuery} />
    </div>
  )
}

export default SearchApp;