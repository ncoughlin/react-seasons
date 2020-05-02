import React from "react";
import ReactDOM from "react-dom";

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
    if (this.state.errorMessage && !this.state.lat) {
      return (
      <div className="ui container">
      <div className="ui card">
        <div className="content">
          <div className="header">Current Position:</div>
          <div className="description">Error: {this.state.errorMessage}</div>
        </div>
      </div>
      </div>
      )
      
    } else if (!this.state.errorMessage && this.state.lat){
        return (
        <div className="ui container">
        <div className="ui card">
          <div className="content">
            <div className="header">Current Position:</div>
              <div className="description">Latitude: {this.state.lat}</div>
              <div className="description">Longitude: {this.state.long}</div>
          </div>
        </div>
      </div>
      )
        
    } else {
        return (
        <div className="ui container">
        <div className="ui card">
          <div className="content">
            <div className="header">Current Position:</div>
            <div className="description">Loading Location...</div>
          </div>
        </div>
      </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
