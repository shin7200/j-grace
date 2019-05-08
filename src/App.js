import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Mission from './components/Mission';
import About from './components/About'
import Location from './components/Location';
import News from './components/News';
// import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


class App extends Component {
  
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    AOS.init();
    return (
      <React.Fragment>
        {/* <NavBar />
        <Carousel />
        <Mission />
        <Footer /> */}
        <BrowserRouter>
          {/* <NavBar /> */}
          <Route path={baseUrl + '/j-grace/'} component={NavBar} />
          <Route exact path={baseUrl + '/j-grace/'} component={Carousel} />
          <Route exact path={baseUrl + '/j-grace/'} component={Mission} />
          
          
          <Route exact path={baseUrl + '/j-grace/about'} component={About} />
          <Route exact path={baseUrl + '/j-grace/location'} component={Location} />
          <Route exact path={baseUrl + '/j-grace/news'} component={News} />
          {/* <Route exact path="/:params" component={ErrorPage} /> */}
          <Route path={baseUrl + '/j-grace/'} component={Footer} />
          {/* <Footer /> */}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
