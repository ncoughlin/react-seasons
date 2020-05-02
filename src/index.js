import React from "react";
import ReactDOM from "react-dom";
import LatLongCard from "./LatLongCard";

class App extends React.Component {
  // javascript class that initializes state
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setstate!
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }


  // react requires us to define render
  render() {
    // if there is an error message and no position data
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <LatLongCard>
          <div className="description">Error: {this.state.errorMessage}</div>
        </LatLongCard>
      );
      // if there is no error message and there IS position data
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <LatLongCard>
          <div className="description">Latitude: {this.state.lat}</div>
          <div className="description">Longitude: {this.state.long}</div>
        </LatLongCard>
      );
      // if no error message and no position data
    } else {
      return (
        <LatLongCard>
          <div className="header">Current Position:</div>
          <div className="description">Loading Location...</div>
        </LatLongCard>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
