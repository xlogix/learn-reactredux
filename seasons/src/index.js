import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMsg] = useLocation();
  let content;
  if (errorMsg && !lat) {
    content = <div>Error: {errorMsg}</div>;
  } else if (!errorMsg && lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }
  return <div className="border red">{content}</div>;
};

// class App extends React.Component {
//   //or could do this.state inside constructor
//   state = { lat: null, errorMsg: "" };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({ lat: position.coords.latitude }),
//       err => this.setState({ errorMsg: err.message })
//     );
//     console.log("rendered!");
//   }

//   componentDidUpdate() {
//     console.log("updated!");
//   }

//   renderContent() {
//     if (this.state.errorMsg && !this.state.lat) {
//       return <div>Error: {this.state.errorMsg}</div>;
//     } else if (!this.state.errorMsg && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     } else {
//       return <Spinner message="Please accept location request" />;
//     }
//   }

//   render() {
//     return <div className="border red">{this.renderContent()}</div>;
//   }
// }

ReactDOM.render(<App />, document.querySelector("#root"));
