import React from 'react';
import { ReactComponent } from '*.svg';

const Header = () => {
  return(
    <header>
      <h1>Lab-11-React-Counter</h1>
    </header>
  );
};

class Content extends ReactComponent {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleClickMinus = e => {
    e.preventDefault();
    let counter = this.state.counter--;

    this.setState({counter});
  }
  handleClickPlus = el => {
    el.preventDefault();
    let counter = this.state.counter++;

    this.setState({counter});
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClickMinus}>-</button>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClickPlus}>+</button>
      </div>
    );
  }
}

class App extends ReactComponent {
  render(){
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
