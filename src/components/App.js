import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Preview from './Preview';
import './styles.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Preview />
      </div>
    )
  }
}


export default App;
