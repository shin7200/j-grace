import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Mission from './components/Mission';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Carousel />
        <Mission />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
