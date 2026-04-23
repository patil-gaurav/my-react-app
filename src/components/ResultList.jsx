import { useMemo } from 'react';

function ResultList({ results, query }) {

  const filteredResults = useMemo(() => {
    debugger
    console.log('Filtering results...');
    return results.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    )
  }, [results, query]);
  
  return (
    <div className="result-list">
      <h3>Results</h3>
      <ul>
        {filteredResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  )
}

export default ResultList;