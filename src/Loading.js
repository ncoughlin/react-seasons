import React from "react";

const Loading = (props) => {
  return (
    <div class="ui segment centering-container">
      <div class="ui active dimmer">
        <div class="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  );
};

export default Loading;
