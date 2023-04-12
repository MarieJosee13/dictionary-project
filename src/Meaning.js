import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <strong>{props.meaning.partOfSpeech}</strong>
      </h4>
      <div>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
          <br />
          <em>{props.meaning.example}</em>
          <br />
        </p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
