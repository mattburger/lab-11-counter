import React from 'react';
// import { ReactComponent } from '*.svg';

const Header = () => {
  return(
    <header>
      <h1>Lab-11-React-Counter</h1>
    </header>
  );
};

class Counter extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      clicks: 0,
    };
  }

  handleClickMinus = e => {
    e.preventDefault();
    let counter = this.state.counter - 1;
    let clicks = this.state.clicks + 1;
    this.setState({counter});
    this.setState({clicks});
  }
  handleClickPlus = el => {
    el.preventDefault();
    let counter = this.state.counter + 1;
    let clicks = this.state.clicks + 1;
    this.setState({counter});
    this.setState({clicks});
  }

  render(){
    return(
      <div>
        <p>Number of Clicks: {this.state.clicks}<br/>Current Value: {this.state.counter}</p>
        <button onClick={this.handleClickMinus}>-</button>
        <button onClick={this.handleClickPlus}>+</button>
      </div>
    );
  }
}

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
