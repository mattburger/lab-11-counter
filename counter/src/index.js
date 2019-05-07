import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));
class Incrementer extends React.Component {
  render(){
    return <App />
  }
}

const daRoot = document.getElementById('root');
ReactDOM.render(<Incrementer />, daRoot);