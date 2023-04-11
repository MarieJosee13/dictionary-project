import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
          <br />
          <em>{props.meaning.example}</em>

          <br />
          <strong>Synonyms:</strong>
        </p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
