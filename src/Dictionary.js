import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "f6b43f078o010195155a4d3f220t84be";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary-header">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="type in a word.."
          onChange={handleKeyword}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
