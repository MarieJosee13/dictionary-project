import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiKey = "f6b43f078o010195155a4d3f220t84be";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "Aulm3XJ7rL6qhxuoPMyuDvW95zxU5EeqTBcIPTP47HIx2qIOxdZSBKQ9";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary-header">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="type in a word . . ."
            onChange={handleKeyword}
          />
          <div className="hint">suggested words: sunset, yoga, plant...</div>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
