import './App.scss';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrementGood = () => {
    this.setState({
      good: this.state.good + 1,
    })
  }
  handleIncrementNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    })
  }
  handleIncrementBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Please leave feedback</h1>
        <button onClick={this.handleIncrementGood}>Good</button>
        <button onClick={this.handleIncrementNeutral}>Neutral</button>
        <button onClick={this.handleIncrementBad}>Bad</button>
        <h2>Statistics</h2>
        <span>Good: { this.state.good } </span>
        <span>Neutral: { this.state.neutral } </span>
        <span>Bad: {this.state.bad} </span>
        <span>Total: </span>
      </div>
    )
  }
}

export default App;
