import React from "react";

const LatLongCard = (props) => {
  return (
    <div className="ui container">
      <div className="ui card">
        <div className="content">
          <div className="header">Current Position:</div>
          <div className="description"> {props.children} </div>
        </div>
      </div>
    </div>
  );
};

export default LatLongCard;
