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
  
  componentDidMount() {
    document.addEventListener('readystatechange', (event) => {
      document.getElementById('root').style.visibility = "visible";
  });
  }
  render() {
    if (document.readyState === 'loading') {
      document.getElementById('root').style.visibility = "hidden";
    } 

    AOS.init();
    return (
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
