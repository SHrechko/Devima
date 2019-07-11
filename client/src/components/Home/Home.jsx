import React, { Component } from "react";
import Background from "../../assets/7-layers_crooped.svg";
import FillSvg from "../../assets/fill_1.svg";
import FB from "../../assets/fb.svg";
import UP from "../../assets/up.svg";
import LN from "../../assets/ln.svg";
import AppBar from "../layout/AppBar";
import injectSheet from "react-jss";
import Link from "../link/link";
import styled, { css, keyframes } from "styled-components";
import classNames from "classnames";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

const pointScrollFrame = keyframes`
0% {
  margin-top: 15%;
  opacity: 1;
  }
100% { 
  margin-top: 75%;
    opacity: 0;
}
`;

const animationPoint = () =>
  css`
    ${pointScrollFrame} 2s ease 0s infinite;
  `;

const ScrollPoint = styled.div`
  width: 1px;
  height: 8px;
  border-radius: 2px;
  background-color: #2b1dcd;
  display: block;
  margin: 15% auto auto;
  animation: ${animationPoint};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;

const styles = theme => ({
  home: {
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${Background})`,
    backgroundPositionX: "left",
    backgroundPositionY: "bottom",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    boxSizing: "boder-box",
    backgroundSize: "cover",
    position: "relative",
    minHeight: "670px"
  },
  flexCenter: {
    height: "calc(100% - 140px)",
    display: "flex",
    // paddingTop: "90px",
    justifyContent: "center",
    alignItems: "center"
  },
  bodyHome: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    margin: `0`,
    position: "relative",
    "@media (max-width: 767px)": {
      margin: "0 20px",
      position: "initial "
    }
  },
  bodyLinks: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    margin: `auto ${theme.default.space * 2}px 0`
  },
  link: {
    margin: `${theme.default.space * 3}px auto 0`
  },
  bodyContent: {
    height: "max-content",
    width: "100%",
    margin: `0 ${theme.default.space * 2}px`,
    color: "white",
    "@media (max-width: 767px)": {
      width: "auto",
      margin: "0"
    }
  },
  title: {
    fontSize: "45px",
    lineHeight: "50px",
    letterSpacing: "-1.69px",
    fontWeight: 400,
    "@media (max-width: 768px)": {
      maxWidth: "429px"
    }
  },
  subTitle: {
    fontSize: "16px",
    lineHeight: "25px",
    fontWeight: "400",
    width: "400px",
    paddingTop: theme.default.space * 4,
    "@media (max-width: 768px)": {
      width: "auto"
    }
  },
  startButton: {
    color: "#ffffff",
    width: "175px",
    height: "60px",
    backgroundColor: "#56d7a5",
    borderRadius: "5px",
    border: "1px solid white",
    marginTop: theme.default.space * 11,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "50px",
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.27)",
    background:
      "linear-gradient(to right, #9edbc3 0%, #56d7a5 51%, #95dbbf 100%)",
    transition: "0.5s",
    backgroundSize: "200% auto",
    "&:active": {
      boxShadow: "none"
    },
    "&:hover": {
      backgroundPosition: "right center"
    }
  },
  serviceLink: {
    display: "block",
    height: "50px",
    width: "22px",
    height: "32px",
    borderRadius: "10px",
    border: "1px solid #2716ca",
    margin: "0 auto",
    position: "relative",
    zIndex: "900",
    backgroundColor: "#ffffff"
  },
  scrollDown: {
    transform: "translate(0, -50%) rotate(90deg)",
    color: "#979797",
    width: "max-content",
    height: "max-content",
    position: "absolute",
    top: "50%",
    right: "0",
    "@media (max-width: 1024px)": {
      color: "#ffffff",
      right: "-70px"
    },
    "@media (max-width: 767px)": {
      top: "100px",
      right: "-50px",
      zIndex: "1200"
    }
  },
  downLink: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "4.29px",
    lineHeight: "24px"
  },
  linear: {
    marginTop: "3px",
    width: "50px",
    height: "1px",
    backgroundColor: "#979797",
    "@media (max-width: 1024px)": {
      backgroundColor: "#ffffff"
    }
  },
  arrow: {
    backgroundImage: `url(${FillSvg})`,
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    boxSizing: "boder-box",
    width: "19px",
    height: "12px",
    marginLeft: theme.default.space * 4
  },
  fb: {
    backgroundImage: `url(${FB})`
  },
  up: {
    backgroundImage: `url(${UP})`
  },
  ln: {
    backgroundImage: `url(${LN})`
  },
  container: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <section id="home" className={classes.home}>
        <AppBar />
        <Container className={classes.container}>
          <div className={classes.flexCenter}>
            <div className={classes.bodyHome}>
              <Hidden xsDown>
                <ul className={classes.bodyLinks}>
                  <li className={classes.link}>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/DevimaSolutions"
                    >
                      <img src={FB} />
                    </a>
                  </li>
                  <li className={classes.link}>
                    <a
                      target="_blank"
                      href="https://www.upwork.com/o/companies/_~012ce16d31fde250a8/"
                    >
                      <img src={UP} />
                    </a>
                  </li>
                  <li className={classes.link}>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/devima-solutions/"
                    >
                      <img src={LN} />
                    </a>
                  </li>
                </ul>
              </Hidden>
              <div className={classes.bodyContent}>
                {/* <div className={classes.upTitle}>-What we do</div> */}
                <h1 className={classes.title}>
                  Implement Your great ideas <br />
                  into real life
                </h1>
                <p className={classes.subTitle}>
                  We combine our experience and modern technologies to provide a
                  quality product for our customers
                </p>
                <Link
                  href="#contacts"
                  component="button"
                  className={classes.startButton}
                >
                  <span>Get Started</span>
                  <span className={classes.arrow} />
                </Link>
              </div>
              <div className={classes.scrollDown}>
                <Link href="#services" className={classes.downLink}>
                  Scroll down
                  <span className={classes.linear} />
                </Link>
              </div>
            </div>
          </div>
          <Hidden smDown>
            <Link href="#services" className={classes.serviceLink}>
              <ScrollPoint />
            </Link>
          </Hidden>
        </Container>
      </section>
    );
  }
}

export default injectSheet(styles)(Home);
