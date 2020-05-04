import React from "react";

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
  const seasonIcon = season === 'winter' ? '❄️':'🌞';
  return <div> Season:{seasonIcon} </div>;
};

export default SeasonDisplay;
