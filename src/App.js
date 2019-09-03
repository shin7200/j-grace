import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Mission from './components/Mission';
import About from './components/About'
import Location from './components/Location';
import News from './components/News';
import Sermon from './components/Sermon';
// import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from './images/about.jpeg';
// import image9 from './images/location.png';
// import image10 from './images/locationSmall.png';
// import image11 from './images/locationSmaller.png';
// import image12 from './images/newFamily.jpg';
// import image13 from './images/news.jpeg';
// import image14 from './images/newsSmall.jpeg';
// import image15 from './images/newsSmaller.jpeg';


class App extends Component {
  
  componentDidMount() {
    window.onload = function() {
      document.getElementById('root').style.visibility = "visible";
    }
  //   document.addEventListener('readystatechange', (event) => {
  //     document.getElementById('root').style.visibility = "visible";
  // });
  }
  render() {
    
    if (document.readyState === 'loading') {
      document.getElementById('root').style.visibility = "hidden";
    } 

    AOS.init();
    return (
          <div>
          <img src={image1} style={{display: 'none'}} />
          {/* <img src={image2} style={{display: 'none'}} />
          <img src={image3} style={{display: 'none'}} />
          <img src={image4} style={{display: 'none'}} />
          <img src={image5} style={{display: 'none'}} />
          <img src={image6} style={{display: 'none'}} />
          <img src={image7} style={{display: 'none'}} />
          <img src={image8} style={{display: 'none'}} /> */}
          {/* <img src={image9} style={{display: 'none'}} />
          <img src={image10} style={{display: 'none'}} />
          <img src={image11} style={{display: 'none'}} /> */}
          {/* <img src={image12} style={{display: 'none'}} /> */}
          {/* <img src={image13} style={{display: 'none'}} /> */}
          {/* <img src={image14} style={{display: 'none'}} />
          <img src={image15} style={{display: 'none'}} /> */}
          
        

          <Route path='/' component={NavBar} />
          
          
          <Route exact path='/' component={Carousel} />
          <Route exact path='/' component={Mission} />
          <Route path='/about' component={About} />
          <Route path='/location' component={Location} />
          <Route path='/news' component={News} />
          <Route path='/sermon' component={Sermon} />
          
          
          <Route path='/' component={Footer} />
          </div>
          
          
        // </BrowserRouter>

    );
  }
}

export default App;
