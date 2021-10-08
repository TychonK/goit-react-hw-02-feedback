import './App.scss';
import { Component } from 'react';
import {Statistics} from './components/Statistics/Statistics'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrementGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      }
    })
  }

handleIncrementNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  }
  
  handleIncrementBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      }
    })
  }

  render() {
    const total = this.state.bad + this.state.good + this.state.neutral;
    const percentage = Math.floor(this.state.good / total * 100);
    return (
      <div className="App">
        <h1>Please leave feedback</h1>
        <button onClick={this.handleIncrementGood}>Good</button>
        <button onClick={this.handleIncrementNeutral}>Neutral</button>
        <button onClick={this.handleIncrementBad}>Bad</button>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={ this.state.bad} total={total} percentage={percentage} />
      </div>
    )
  }
}

export default App;
