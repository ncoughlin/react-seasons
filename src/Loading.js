import React from "react";

const Loading = (props) => {
  return (
    <div class="ui segment centering-container">
      <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

Loading.defaultProps = {
  message: "Loading...",
};

export default Loading;
