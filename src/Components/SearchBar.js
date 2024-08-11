import { useState } from 'react';
import useDebounce from '../Components/useDebounce';
import styles from '../Styles/SearchBar.css';
import suggestionsData from '../Data/SearchData.json'; // Import the JSON data

const SearchBar = ({ setResult, suggestionKey }) => {
  const [value, setValue] = useState(''); // Value of the search bar
  const [suggestions, setSuggestions] = useState([]); // Store for the suggestions
  const [hideSuggestions, setHideSuggestions] = useState(true); // Flag for hiding / showing suggestions

  const fetchData = async (value) => {
    try {
      const response = await fetch('/Data/SearchData.json');
      const suggestionsData = await response.json();
  
      // Filter suggestions based on the search value
      const filteredSuggestions = suggestionsData.filter(suggestion =>
        suggestion[suggestionKey].toLowerCase().includes(value.toLowerCase())
      );
      return filteredSuggestions;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  

  const findResult = (value) => {
    // Retrieves result from the suggestions given a value
    setResult(
      suggestions.find((suggestion) => suggestion[suggestionKey] === value)
    );
  };

  useDebounce(
    async () => {
      // Fetches data with debounce delay of 1000ms
      try {
        const suggestions = await fetchData(value);
        setSuggestions(suggestions || []);
      } catch (error) {
        console.log(error);
      }
    },
    1000,
    [value]
  );

  return (
    <>
      <div className={styles.container}>
        <input
          onFocus={() => setHideSuggestions(false)}
          onBlur={() => {
            setTimeout(() => {
              setHideSuggestions(true);
            }, 200);
          }}
          type="text"
          className={styles.textbox}
          placeholder="Search data..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div
          className={`${styles.suggestions} ${
            hideSuggestions && styles.hidden
          }`}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={styles.suggestion}
              onClick={() => findResult(suggestion[suggestionKey])}
            >
              {suggestion[suggestionKey]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
