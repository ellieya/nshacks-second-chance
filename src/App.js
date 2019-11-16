import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Results from "./pages/Results";
import SupportersLanding from "./pages/SupportersLanding";
import SupportersHome from "./pages/SupportersHome";
import SupportersLogin from "./pages/SupportersLogin";
import SupportersHelp from "./pages/SupportersHelp";
import SupportersRewards from "./pages/SupportersRewards";
import SupportersComingSoon from "./pages/SupportersComingSoon";
import Dictaphone from "./components/Dictaphone";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActivePage: "Home",
    }
  }

  processAction = (newPageName) => {
    console.log("also run");
    console.log(newPageName);
    this.setState({
      currentActivePage: newPageName
    })
  }

  decideRenderedPage = () => {
    switch (this.state.currentActivePage) {
      case "Home":
        return <Home action={this.processAction} />
      case "Results": //needs to be worked on
        return <Results action={this.processAction} />
      case "SupportersLanding":
        return <SupportersLanding action={this.processAction} />
      case "SupportersLogin":
        return <SupportersLogin action={this.processAction} />
      case "SupportersHome":
        return <SupportersHome action={this.processAction} />
      case "SupportersHelp":
        return <SupportersHelp action={this.processAction} />
      case "SupportersRewards": //needs to be worked on
        return <SupportersRewards action={this.processAction} />
      case "SupportersComingSoon":
        return <SupportersComingSoon action={this.processAction} />
      default:
        return <Home action={this.processAction} />
    }
  }

  render() {
    return (
      <div className="App">
        {this.decideRenderedPage()}
      </div>
    );
  }
}

export default App;
