import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import WebDev from "../../assets/web_development42.svg";
import WebDevWhite from "../../assets/web_development4_white.svg";
import Mobile from "../../assets/mobile_development2.svg";
import MobileWhite from "../../assets/mobile_development8_white.svg";
import UxUiDesign from "../../assets/design2.svg";
import UxUiDesignWhite from "../../assets/design2-white.svg";
import DedicatedTeam from "../../assets/dedicated-team.svg";
import DedicatedTeamWhite from "../../assets/dedicated-team-white.svg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
  flexRow: {
    paddingTop: "70px"
  },
  mobileCardBlock: {
    width: "100%",
    minWidth: "270px",
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > div": {
      "@media (min-width: 768px)": {
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    "@media (min-width: 768px)": {
      width: "45%",
      "&:nth-child(2n)": {
        marginLeft: "10%"
      }
    }
  },
  subtitle: {
    margin: "120px 0 0",
    color: "#9b9b9b",
    fontSize: "16px",
    fontWeight: "400"
  },
  mdUp: {
    marginTop: "30px"
  },
  title: {
    fontSize: "55px",
    fontWeight: "400",
    color: "#2f29d0",
    marginTop: "29px",
    "@media (max-width: 1023)": {
      fontSize: "45px"
    },
    "@media (max-width: 599px)": {
      fontSize: "25px"
    }
  },
  cardsBlock: {
    marginTop: "70px !important",
    minHeight: "400px",
    "@media (max-width: 1023px)": {
      maxWidth: "661px",
      width: "auto",
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardMobile: {
    width: "calc(100% - 20px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)",
    borderRadius: "6px",
    height: "290px",
    padding: "20px",
    marginRight: "0",
    marginBottom: "26px",
    maxWidth: "380px",
    "@media (min-width: 768px)": {
      maxWidth: "220px"
    },
    "& > img, & > span": {
      "@media (min-width: 768px)": {
        fontSize: "14px"
      },
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "16px"
    }
  },
  card: {
    "&.MuiPaper-root": {
      transition: "margin 0.3s ease",
      minHeight: "295px"
    },
    margin: 0,
    height: "max-content",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)",
    // borderRadius: "6px",
    padding: "30px",
    color: "#4a4a4a",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "-0.70px",
    lineHeight: "25px",
    cursor: "pointer",
    overflow: "hidden",
    "@media (max-width: 959px)": {
      justifyContent: "center"
    }
  },
  activeCard: {
    backgroundColor: "#7f0cda",
    marginTop: "-30px",
    background: "linear-gradient(to bottom, #7d0cda 0%, #a16ccc 100%)",
    "&.MuiPaper-root": {
      color: "#ffffff"
    }
  },
  cardList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    "&>li": {
      textAlign: "center"
    },
    "&>li:first-child": {
      fontSize: "22px !important",
      "@media (max-width: 959px)": {
        fontSize: "20px !important"
      },
      fontWeight: "600",
      letterSpacing: "-0.83px",
      lineHeight: "27px",
      margin: "8px 0 10px",
      textAlign: "center",
      "@media (max-width: 768px)": {
        fontSize: "20px"
      }
    }
  },
  gridItem: {
    minHeight: "428px",
    paddingTop: "50px"
  }
});

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: "card1"
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ mdWidth: window.innerWidth >= 960 });
  }

  setActiveCard = e => {
    if (!this.state.mdWidth) {
      return;
    }
    this.setState({
      activeCard: e.currentTarget.id.toString()
    });
  };

  render() {
    const { activeCard, mdWidth } = this.state;
    const { classes } = this.props;
    return (
      <section id="services">
        <Container className={classes.services}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <h2 className={classes.title}>Our Services</h2>
            </Grid>
            <Grid item md={6}>
              <Hidden smDown>
                <p
                  style={"card1" !== activeCard ? { display: "none" } : {}}
                  className={classes.subtitle}
                >
                  1Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
                <p
                  style={"card2" !== activeCard ? { display: "none" } : {}}
                  className={classes.subtitle}
                >
                  2Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
                <p
                  style={"card3" !== activeCard ? { display: "none" } : {}}
                  className={classes.subtitle}
                >
                  3Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
                <p
                  style={"card4" !== activeCard ? { display: "none" } : {}}
                  className={classes.subtitle}
                >
                  4Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
              </Hidden>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            className={classes.flexRow}
            className={classes.gridItem}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                id="card1"
                className={classNames(classes.card, {
                  [classes.activeCard]: mdWidth && "card1" == activeCard
                })}
                onClick={this.setActiveCard}
              >
                <img
                  className={classes.cardImg}
                  src={mdWidth && activeCard === "card1" ? WebDevWhite : WebDev}
                  width="100px"
                  alt="Web Development"
                />
                <ul className={classes.cardList}>
                  <li>Web Development</li>
                  <li>Prototype and design</li>
                  <li>Web Aplications</li>
                  <li>Websites and Portals</li>
                  <li>Social Network Aplications</li>
                  <li>APIs</li>
                  <li>Quality assurance</li>
                </ul>
              </Paper>
              <Hidden mdUp>
                <p className={classNames(classes.subtitle, classes.mdUp)}>
                  1Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
              </Hidden>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
              <Paper
                id="card2"
                className={classNames(classes.card, {
                  [classes.activeCard]: mdWidth && "card2" == activeCard
                })}
                onClick={this.setActiveCard}
              >
                <img
                  className={classes.cardImg}
                  width="100px"
                  src={mdWidth && activeCard === "card2" ? MobileWhite : Mobile}
                  alt="Mobile development"
                />
                <ul className={classes.cardList}>
                  <li>Mobile development</li>
                  <li>UX/UI App Design</li>
                  <li>Cross-Platform Appt</li>
                  <li>iOS Native App</li>
                  <li>Androind Native App</li>
                  <li>Quality assurance</li>
                </ul>
              </Paper>
              <Hidden mdUp>
                <p className={classNames(classes.subtitle, classes.mdUp)}>
                  2Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
              </Hidden>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
              <Paper
                id="card3"
                className={classNames(classes.card, {
                  [classes.activeCard]: mdWidth && "card3" == activeCard
                })}
                onClick={this.setActiveCard}
              >
                <img
                  className={classes.cardImg}
                  width="100px"
                  src={
                    mdWidth && activeCard === "card3"
                      ? UxUiDesignWhite
                      : UxUiDesign
                  }
                  alt="Ux/Ui Design"
                />
                <ul className={classes.cardList}>
                  <li>Ux/Ui Design</li>
                  <li>Concept</li>
                  <li>User experience design</li>
                  <li>User interface design</li>
                  <li>Brand identity</li>
                </ul>
              </Paper>
              <Hidden mdUp>
                <p className={classNames(classes.subtitle, classes.mdUp)}>
                  3Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
              </Hidden>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
              <Paper
                id="card4"
                className={classNames(classes.card, {
                  [classes.activeCard]: mdWidth && "card4" == activeCard
                })}
                onClick={this.setActiveCard}
              >
                <img
                  className={classes.cardImg}
                  width="100px"
                  src={
                    mdWidth && activeCard === "card4"
                      ? DedicatedTeamWhite
                      : DedicatedTeam
                  }
                  alt="Dedicated team"
                />
                <ul className={classes.cardList}>
                  <li>Dedicated team</li>
                  <li>Prototype and design</li>
                  <li>Web Aplications</li>
                  <li>Websites and Portals</li>
                  <li>Social Network Aplications</li>
                  <li>APIs</li>
                  <li>Quality assurance</li>
                </ul>
              </Paper>
              <Hidden mdUp>
                <p className={classNames(classes.subtitle, classes.mdUp)}>
                  4Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default injectSheet(styles)(Services);
