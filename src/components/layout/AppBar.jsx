import React, { Component } from "react";
import "../../css/AppBar.css";
import injectSheet from "react-jss";
import Link from "../link/link";
import devimaWhite from "../../assets/devima_white.svg";
import devimaGrey from "../../assets/devima_grey.svg";
import classNames from "classnames";

const styles = theme => ({
  headerLinks: {
    boxSizing: "border-box",
    display: "flex",
    width: "auto",
    alignItems: "center",
    position: "relative",
    left: "calc(50% - 50px)",
    "& > *": {
      marginRight: theme.default.space * 8
    }
  },
  colorWhite: {
    color: "white"
  },
  devimaWhite: {
    backgroundImage: `url(${devimaWhite})`
  },
  devimaGrey: {
    backgroundImage: `url(${devimaGrey})`
  },
  deveemaIcon: {
    position: "absolute",
    left: "144px",
    width: "103px",
    height: "32px",
    backgroundSize: "contain",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    boxSizing: "boder-box"
  }
});

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    };
  }

  headerFixer = () => {
    const header = document.getElementById("header");
    const services = document.getElementById("services");
    if (window.pageYOffset >= header.offsetHeight + 50) {
      header.classList.add("hidden");
    }
    if (window.pageYOffset >= services.offsetTop - 90) {
      header.classList.add("fixed");
      this.setState({
        fixed: true
      });
    } else if (window.pageYOffset < header.offsetHeight + 50) {
      header.classList.remove("hidden");
      header.classList.remove("fixed");
      this.setState({
        fixed: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.headerFixer);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.headerFixer);
  }

  render() {
    const { fixed } = this.state;
    const { classes } = this.props;
    return (
      <div id="header" className="appBar">
        <div
          className={classNames(classes.deveemaIcon, {
            [classes.devimaGrey]: fixed,
            [classes.devimaWhite]: !fixed
          })}
        />
        <div className={classes.headerLinks}>
          <Link className={classes.colorWhite} href="#home">
            Home
          </Link>
          <Link className={classes.colorWhite} href="#services">
            Services
          </Link>
          <Link className={classes.colorWhite} href="#about_us">
            About us
          </Link>
          <Link className={classes.colorWhite} href="#portfolio">
            Portfolio
          </Link>
          <Link className={classes.colorWhite} href="#testimonials">
            Testimonials
          </Link>
          <Link className={classes.colorWhite} href="#contacts">
            Contacts
          </Link>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(AppBar);
