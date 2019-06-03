import React, { Component } from "react";
import "../../css/AppBar.css";
import injectSheet from "react-jss";
import Link from "../link/link";
import devimaWhite from "../../assets/devima_white.svg";
import devimaGrey from "../../assets/devima_grey.svg";
import classNames from "classnames";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { link } from "fs";

library.add(faAlignJustify);

const styles = theme => ({
  headerLinks: {
    boxSizing: "border-box",
    display: "flex",
    width: "auto",
    alignItems: "center",
    position: "absolute",
    right: "40px",
    "@media (min-width: 1024px)": {
      left: "calc(50% - 50px)"
    },
    "@media (max-width: 768px)": {
      display: "none",
      top: "25%",
      width: "100%",
      flexDirection: "column",
      right: 0
    },
    "& > *": {
      "@media (max-width: 768px)": {
        marginRight: 0,
        width: "100%",
        padding: "10px 25px"
      }
    },
    "@media (min-width: 769px)": {
      "& > *:not(:last-child)": {
        marginRight: `${theme.default.space * 8}px`,
        "@media (max-width: 1360px)": {
          marginRight: `${theme.default.space * 5}px`
        }
      }
    }
  },
  menuButton: {
    width: "56px",
    height: "58px",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    left: "48px",
    top: "16px",
    "& > *": { fontWeight: "900", fontSize: "26px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width: 769px)": {
      display: "none"
    },
    color: "#ffffff",
    "&::before,&::after": {
      boxSizing: "border-box"
    }
  },
  linkScroll: {
    textAlign: "center",
    color: "white",
    fontFamily: "Roboto",
    fontSize: "17px",
    fontWeight: "400"
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
    top: "30px",
    backgroundSize: "contain",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    boxSizing: "boder-box",
    "@media (max-width: 1024px)": {
      left: "100px"
    },
    "@media (max-width: 768px)": {
      left: "137px"
    }
  }
});

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      fixed: false
    };
  }

  headerFixer = () => {
    const header = document.getElementById("header");
    const services = document.getElementById("services");
    if (window.pageYOffset >= header.offsetHeight + 50) {
      header.classList.add("hidden");
    }
    if (window.pageYOffset >= services.offsetTop - 100) {
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

  openClick = () => {
    if (!this.state.opened) {
      document.getElementById("root").style.height = "100vh";
      document.getElementById("root").style.overflow = "hidden";
    } else {
      document.getElementById("root").style.height = "";
      document.getElementById("root").style.overflow = "";
    }
    this.setState(state => ({
      opened: !state.opened
    }));
  };
  closeMenu = () => {
    document.getElementById("root").style.height = "";
    document.getElementById("root").style.overflow = "";
    this.setState({
      opened: false
    });
  };

  componentDidMount() {
    document.addEventListener("scroll", this.headerFixer);
    const links = document.querySelectorAll("#links > span");
    for (let i = 0; i < links.length; i++) {
      console.log(links[i]);
      links[i].addEventListener("click", this.closeMenu);
    }
  }
  componentWillUnmount() {
    const links = document.querySelectorAll("#links > span");
    for (let i = 0; i < links.length; i++) {
      links[i].removeEventListener("click", this.closeMenu);
    }
    document.removeEventListener("scroll", this.headerFixer);
  }

  render() {
    const { opened, fixed } = this.state;
    const { classes } = this.props;
    return (
      <div
        id="header"
        style={
          opened
            ? {
                height: "100vh",
                width: "100vw",
                bottom: "0",
                position: "fixed",
                zIndex: "1000",
                backgroundColor: "#5535b8"
              }
            : {}
        }
        className="appBar"
      >
        <div onClick={this.openClick} className={classes.menuButton}>
          <FontAwesomeIcon
            style={{ color: fixed ? "black" : "#ffffff" }}
            icon="align-justify"
          />
        </div>
        <div
          className={classNames(classes.deveemaIcon, {
            [classes.devimaGrey]: fixed,
            [classes.devimaWhite]: !fixed
          })}
        />
        <div
          id="links"
          style={opened ? { display: "flex" } : {}}
          className={classes.headerLinks}
        >
          <Link className={classes.linkScroll} href="#home">
            Home
          </Link>
          <Link className={classes.linkScroll} href="#services">
            Services
          </Link>
          <Link className={classes.linkScroll} href="#about_us">
            About us
          </Link>
          <Link className={classes.linkScroll} href="#portfolio">
            Portfolio
          </Link>
          <Link className={classes.linkScroll} href="#testimonials">
            Testimonials
          </Link>
          <Link className={classes.linkScroll} href="#contacts">
            Contacts
          </Link>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(AppBar);
