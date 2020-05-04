import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
  summer: {
    text: "It is summer.",
    emoji: "🌞",
  },
  winter: {
    text: "It is Winter.",
    emoji: "❄️",
  },
};

// depending on the month and latitude determine if it is summer or winter
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  // deconstruct seasonConfig object
  const{text, emoji} = seasonConfig[season]; 

  return (
    <div className={`season-display ${season}`}>
      <div> Icon: {emoji} </div>
      <div> Text: {text} </div>
    </div>
  );
};

export default SeasonDisplay;
