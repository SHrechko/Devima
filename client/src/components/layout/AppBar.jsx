import React, { Component } from "react";
import "../../css/AppBar.css";
import injectSheet from "react-jss";
import Link from "../link/link";
import devimaWhite from "../../assets/devima_white.svg";
import devimaGrey from "../../assets/devima_grey.svg";
import classNames from "classnames";
import Container from "@material-ui/core/Container";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

library.add(faAlignJustify);

const styles = theme => ({
  openedAppBar: {
    height: "100vh",
    width: "100%",
    bottom: "0",
    position: "fixed",
    zIndex: "1300",
    backgroundColor: "#5535b8"
  },
  headerLinks: {
    boxSizing: "border-box",
    display: "flex",
    width: "auto",
    top: "50%",
    right: "20px",
    transform: "translate(0%, -50%)",
    position: "absolute",
    alignItems: "center",
    "@media (min-width: 1024px)": {
      left: "calc(50% - 50px)"
    },
    "@media (max-width: 959px)": {
      display: "none",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      right: 0
    },
    "& > *": {
      "@media (max-width: 959px)": {
        marginRight: 0,
        width: "100%",
        padding: "10px 25px"
      }
    },
    "@media (min-width: 960px)": {
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginLeft: "20px",
    "& > *": { fontWeight: "900", fontSize: "26px" },
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width: 960px)": {
      display: "none"
    },
    color: "#ffffff",
    "&::before,&::after": {
      boxSizing: "border-box"
    }
  },
  linkScroll: {
    textAlign: "center",
    boxSizing: "border-box",
    transition: "border .5s",
    color: "white",
    fontSize: "17px",
    fontWeight: "400",
    width: "max-content",
    minWidth: "max-content",
    borderTop: "1px solid rgba(0,0,0,0)",
    borderBottom: "1px solid rgba(0,0,0,0)",
    "@media (min-width: 960px)": {
      padding: "5px 0"
    },
    "&:hover": {
      "@media (max-width: 959px)": {
        borderTop: "1px solid #ffffff"
      },
      borderBottom: "1px solid #ffffff"
    }
  },
  devimaWhite: {
    backgroundImage: `url(${devimaWhite})`
  },
  devimaGrey: {
    backgroundImage: `url(${devimaGrey})`
  },
  deveemaIcon: {
    height: "30px",
    marginTop: "30px",
    marginLeft: "0",
    display: "inline-block",
    "@media (max-width: 959px)": {
      marginLeft: "20px"
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
    // if (window.pageYOffset >= services.offsetTop - 100) {
    if (window.pageYOffset >= 200) {
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
    window.addEventListener("resize", this.resize.bind(this));
    const links = document.querySelectorAll("#links > span");
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", this.closeMenu);
    }
    this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
    const links = document.querySelectorAll("#links > span");
    for (let i = 0; i < links.length; i++) {
      links[i].removeEventListener("click", this.closeMenu);
    }
    document.removeEventListener("scroll", this.headerFixer);
  }

  resize() {
    if (window.innerWidth >= 960) {
      document
        .getElementById("header")
        .classList.remove(this.props.classes.openedAppBar);
    }
  }
  render() {
    const { opened, fixed } = this.state;
    const { classes } = this.props;
    return (
      <header
        id="header"
        className={classNames("appBar", { [classes.openedAppBar]: opened })}
      >
        <Container style={{ position: "relative", height: "100%" }}>
          <div onClick={this.openClick} className={classes.menuButton}>
            <FontAwesomeIcon
              style={{ color: fixed ? "#5535b8" : "#ffffff" }}
              icon="align-justify"
            />
          </div>
          <img
            src={fixed ? devimaGrey : devimaWhite}
            className={classes.deveemaIcon}
          />
          <nav
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
          </nav>
          <div style={{ clear: "both" }} />
        </Container>
      </header>
    );
  }
}

export default injectSheet(styles)(AppBar);
