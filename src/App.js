import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import About from "./components/About";
import Location from "./components/Location";
import News from "./components/News";
import Sermon from "./components/Sermon";
import CarouselPopup from "./components/CarouselPopup";
import EMPS from "./components/EMPS";
import BibleAudio from "./components/BibleAudio";
// import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {
  state = {
    carouselPopup: true,
  };

  componentDidMount() {
    window.onload = function () {
      document.getElementById("root").style.visibility = "visible";
    };
    //   document.addEventListener('readystatechange', (event) => {
    //     document.getElementById('root').style.visibility = "visible";
    // });
  }
  popupClose = () => {
    this.setState({ carouselPopup: !this.state.carouselPopup });
  };

  render() {
    if (document.readyState === "loading") {
      document.getElementById("root").style.visibility = "hidden";
    }

    AOS.init();
    return (
      <div>
        <Route path="/" component={NavBar} />
        {this.state.carouselPopup && (
          <CarouselPopup popupClose={this.popupClose} />
        )}

        <Route exact path="/" component={Carousel} />
        <Route exact path="/" component={Mission} />
        <Route path="/about" component={About} />
        <Route path="/location" component={Location} />
        <Route path="/news" component={News} />
        <Route path="/sermon" component={Sermon} />
        <Route path="/bibleaudio" component={BibleAudio} />
        {/* <Route path='/emps' component={EMPS} /> */}

        <Route path="/" component={Footer} />
      </div>

      // </BrowserRouter>
    );
  }
}

export default App;
