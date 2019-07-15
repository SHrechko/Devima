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

import styles from "./ServisesStyles";

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
                  We deliver our clients a variety of web development services
                  using the latest and proven web technologies. That's why we
                  can perfectly fit the client's requirements.
                </p>
                <p
                  style={"card2" !== activeCard ? { display: "none" } : {}}
                  className={classes.subtitle}
                >
                  We offer customized Blockchain solutions, ICO services,
                  consulting for your business security and growth. No matter
                  what you need, multi-currency transactions or ICO campaign,
                  you’re at the right place.
                </p>
                <p
                  style={"card3" !== activeCard ? { display: "none" } : {}}
                  className={classes.subtitle}
                >
                  Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
                <p
                  style={"card4" !== activeCard ? { display: "none" } : {}}
                  className={classes.subtitle}
                >
                  We can provide You with the team of experienced developers who
                  will meet the requirements of the particular project and allow
                  to bring the services to our remote customers.
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
                  className={classNames(classes.cardImg, {
                    [classes.visible]: mdWidth && activeCard === "card1"
                  })}
                  src={WebDevWhite}
                  width="100px"
                  alt="Web Development"
                />
                <img
                  className={classNames(classes.cardImg, {
                    [classes.visible]: !mdWidth || activeCard !== "card1"
                  })}
                  src={WebDev}
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
                  We deliver our clients a variety of web development services
                  using the latest and proven web technologies. That's why we
                  can perfectly fit the client's requirements.
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
                  className={classNames(classes.cardImg, {
                    [classes.visible]: mdWidth && activeCard === "card2"
                  })}
                  src={MobileWhite}
                  width="100px"
                  alt="Mobile development"
                />
                <img
                  className={classNames(classes.cardImg, {
                    [classes.visible]: !mdWidth || activeCard !== "card2"
                  })}
                  src={Mobile}
                  width="100px"
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
                  We offer customized Blockchain solutions, ICO services,
                  consulting for your business security and growth. No matter
                  what you need, multi-currency transactions or ICO campaign,
                  you’re at the right place.
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
                  className={classNames(classes.cardImg, {
                    [classes.visible]: mdWidth && activeCard === "card3"
                  })}
                  src={UxUiDesignWhite}
                  width="100px"
                  alt="Ux/Ui Design"
                />
                <img
                  className={classNames(classes.cardImg, {
                    [classes.visible]: !mdWidth || activeCard !== "card3"
                  })}
                  src={UxUiDesign}
                  width="100px"
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
                  Want to build your product with a team that establishes a
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
                  className={classNames(classes.cardImg, {
                    [classes.visible]: mdWidth && activeCard === "card4"
                  })}
                  src={DedicatedTeamWhite}
                  width="100px"
                  alt="Dedicated team"
                />
                <img
                  className={classNames(classes.cardImg, {
                    [classes.visible]: !mdWidth || activeCard !== "card4"
                  })}
                  src={DedicatedTeam}
                  width="100px"
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
                  We can provide You with the team of experienced developers who
                  will meet the requirements of the particular project and allow
                  to bring the services to our remote customers.
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
