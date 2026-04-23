import { useRef } from 'react';

function SearchInput( { value, onChange}) {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default SearchInput;