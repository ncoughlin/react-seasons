import React from "react";
import ReactDOM from "react-dom";
import LatLongCard from "./LatLongCard";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // initialize state
  state = { lat: null, long: null, errorMessage: "" };


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
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
          <SeasonDisplay lat={this.state.lat} />
        </LatLongCard>
      );
      // if no error message and no position data
    } else {
      return (
        <LatLongCard>
          <div className="description">Loading Location...</div>
        </LatLongCard>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
