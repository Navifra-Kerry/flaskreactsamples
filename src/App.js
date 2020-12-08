import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends React.Component {
  state = {
    currenTime: Date(),
  };

  timer;

  constructor(Props) {
    super(Props);

    this.handleUpdateTimer = this.handleUpdateTimer.bind(this);
  }

  handleUpdateTimer() {
    this.timer = setTimeout(this.handleUpdateTimer, 1000);

    fetch("/api/time").then(async (response) => {
      const data = await response.json();
      this.setState({
        currenTime: new Date(data.now),
      });
    });
  }

  componentDidMount() {
    this.timer = setTimeout(this.handleUpdateTimer, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.currenTime.toLocaleString()}
          </a>
        </header>
      </div>
    );
  }
}
