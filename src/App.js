import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Mission from './components/Mission';
import About from './components/About'
import Location from './components/Location';
import News from './components/News';
// import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


class App extends Component {
  
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    console.log(baseUrl);
    AOS.init();
    return (
      // <div>
      //   <NavBar />
      //   <Carousel />
      //   <Mission />
      //   <Footer />
      // </div>
        // <BrowserRouter>

          
          <div>
          <Route path='/' component={NavBar} />
          
          
          <Route exact path='/' component={Carousel} />
          <Route exact path='/' component={Mission} />
          <Route path='/about' component={About} />
          <Route path='/location' component={Location} />
          <Route path='/news' component={News} />
          
          
          <Route path='/' component={Footer} />
          </div>
          
          
        // </BrowserRouter>

    );
  }
}

export default App;
