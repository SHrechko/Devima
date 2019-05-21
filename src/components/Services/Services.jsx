import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import WebDev from "../../assets/10-layers.svg";
import WebDevWhite from "../../assets/9-layers-white.svg";
import Mobile from "../../assets/mobile-development.svg";
import MobileWhite from "../../assets/mobile-development-white.svg";
import UxUiDesign from "../../assets/14-layers.svg";
import UxUiDesignWhite from "../../assets/14-layers-white.svg";
import DedicatedTeam from "../../assets/12-layers.svg";
import DedicatedTeamWhite from "../../assets/11-layers-white.svg";

const styles = theme => ({
  services: {
    minHeight: "calc(100vh - 150px)",
    padding: "75px 75px 75px"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subtitle: {
    margin: "60px 150px 0 0",
    color: "#9b9b9b",
    fontSize: "16px",
    fontWeight: "400"
  },
  title: {
    minWidth: "calc(50% + 15px)",
    fontSize: "55px",
    fontWeight: "400",
    color: "#2f29d0"
  },
  cardsBlock: {
    marginTop: "70px"
  },
  card: {
    width: "250px",
    height: "max-content",
    transition: "margin 1s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)",
    borderRadius: "6px",
    padding: "30px",
    color: "#4a4a4a",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "-0.70px",
    lineHeight: "25px",
    cursor: "pointer",
    overflow: "hidden"
  },
  activeCard: {
    backgroundColor: "#7f0cda",
    marginTop: "-30px",
    background: "linear-gradient(to bottom, #7d0cda 0%, #a16ccc 100%)",
    color: "#ffffff"
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "600",
    letterSpacing: "-0.83px",
    lineHeight: "27px",
    margin: "8px 0 10px"
  }
});

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: "card1"
    };
  }

  setActiveCard = e => {
    console.log(e.currentTarget.id);
    this.setState({
      activeCard: e.currentTarget.id.toString()
    });
  };

  render() {
    const { activeCard } = this.state;
    const { classes } = this.props;
    return (
      <div id="services" className={classes.services}>
        <div className={classes.flexRow}>
          <h1 className={classes.title}>Our Services</h1>
          <p className={classes.subtitle}>
            Want to build your product with a team that establishes a clear
            design process, meets deadlines, and delivers a spot-on end result?
            Our design team will help you build an engaging product easily and
            quickly in accordance with the latest trends and technologies.
          </p>
        </div>
        <div className={classNames(classes.flexRow, classes.cardsBlock)}>
          <div
            id="card1"
            className={classNames(classes.card, {
              [classes.activeCard]: "card1" == activeCard
            })}
            onClick={this.setActiveCard}
          >
            <img
              className={classes.cardImg}
              src={activeCard === "card1" ? WebDevWhite : WebDev}
              width="75px"
              height="75px"
              alt="Web Development"
            />
            <span className={classes.cardTitle}>Web Development</span>
            <span>Prototype and design</span>
            <span>Web Aplications</span>
            <span>Websites and Portals</span>
            <span>Social Network Aplications</span>
            <span>APIs</span>
            <span>Quality assurance</span>
          </div>
          <div
            id="card2"
            className={classNames(classes.card, {
              [classes.activeCard]: "card2" == activeCard
            })}
            onClick={this.setActiveCard}
          >
            <img
              className={classes.cardImg}
              width="75px"
              height="75px"
              src={activeCard === "card2" ? MobileWhite : Mobile}
              alt="Mobile development"
            />
            <span className={classes.cardTitle}>Mobile development</span>
            <span>Prototype and design</span>
            <span>Web Aplications</span>
            <span>Websites and Portals</span>
            <span>Social Network Aplications</span>
            <span>APIs</span>
            <span>Quality assurance</span>
          </div>
          <div
            id="card3"
            className={classNames(classes.card, {
              [classes.activeCard]: "card3" == activeCard
            })}
            onClick={this.setActiveCard}
          >
            <img
              className={classes.cardImg}
              width="75px"
              height="75px"
              src={activeCard === "card3" ? UxUiDesignWhite : UxUiDesign}
              alt="Ux/Ui Design"
            />
            <div className={classes.cardTitle}>Ux/Ui Design</div>
            <span>Prototype and design</span>
            <span>Web Aplications</span>
            <span>Websites and Portals</span>
            <span>Social Network Aplications</span>
            <span>APIs</span>
            <span>Quality assurance</span>
          </div>
          <div
            id="card4"
            className={classNames(classes.card, {
              [classes.activeCard]: "card4" == activeCard
            })}
            onClick={this.setActiveCard}
          >
            <img
              className={classes.cardImg}
              width="75px"
              height="75px"
              src={activeCard === "card4" ? DedicatedTeamWhite : DedicatedTeam}
              alt="Dedicated team"
            />
            <span className={classes.cardTitle}>Dedicated team</span>
            <span>Prototype and design</span>
            <span>Web Aplications</span>
            <span>Websites and Portals</span>
            <span>Social Network Aplications</span>
            <span>APIs</span>
            <span>Quality assurance</span>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Services);
