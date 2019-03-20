import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
