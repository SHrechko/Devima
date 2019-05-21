import React, { Component } from "react";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contacts from "./components/Contacts/Contacts";
import { ThemeProvider } from "react-jss";
import theme from "./theme";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentMenuTarget: NavigationStore.getState().currentMenuTarget
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div id="general_block_page" style={{ height: "3000px" }}>
          <Home />
          <Services />
          <AboutUs />
          <Portfolio />
          <Testimonials />
          <Contacts />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
