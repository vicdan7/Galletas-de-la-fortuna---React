import React from "react";

const Phrase = ({ phraseRandom }) => {
  return (
    <div className="content">
      <p className="phrase_style">
        {phraseRandom.phrase} 
        <br/>
        <img className="com_style" src="/backgrounds/images-fortuna/comillas.png" alt="" />
      </p>
    </div>
  );
};

export default Phrase;
