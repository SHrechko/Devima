import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import WebDev from "../../assets/web_development42.svg";
import WebDevWhite from "../../assets/web_development4_white.svg";
import Mobile from "../../assets/mobile_development2.svg";
import MobileWhite from "../../assets/mobile_development8_white.svg";
import UxUiDesign from "../../assets/design2.svg";
import UxUiDesignWhite from "../../assets/design2-white.svg";
import DedicatedTeam from "../../assets/12-layers.svg";
import DedicatedTeamWhite from "../../assets/11-layers-white.svg";

const styles = theme => ({
  services: {
    padding: "75px",
    "@media (max-width: 767px)": {
      padding: "75px 20px"
    }
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
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
    margin: "60px 0 0",
    color: "#9b9b9b",
    fontSize: "16px",
    fontWeight: "400",
    "@media (max-width: 1023px)": {
      marginRight: "0",
      marginTop: "26px",
      marginBottom: "40px"
    }
  },
  title: {
    minWidth: "calc(50% + 15px)",
    fontSize: "55px",
    fontWeight: "400",
    color: "#2f29d0",
    "@media (max-width: 1023)": {
      fontSize: "45px"
    },
    "@media (max-width: 767px)": {
      fontSize: "25px"
    }
  },
  cardsBlock: {
    marginTop: "70px",
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
    width: "250px",
    height: "max-content",
    transition: "margin 0.3s",
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
    overflow: "hidden",
    "& > span": {
      textAlign: "center"
    },
    "&:not(:last-child)": {
      marginRight: "32px",
      "@media (max-width: 1359px)": {
        marginRight: "22px"
      }
    }
  },
  activeCard: {
    backgroundColor: "#7f0cda",
    marginTop: "-30px",
    background: "linear-gradient(to bottom, #7d0cda 0%, #a16ccc 100%)",
    color: "#ffffff"
  },
  cardTitle: {
    fontSize: "22px !important",
    "@media (max-width: 1023px)": {
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
    this.setState({ hideNav: window.innerWidth >= 1024 });
  }

  setActiveCard = e => {
    console.log(e.currentTarget.id);
    this.setState({
      activeCard: e.currentTarget.id.toString()
    });
  };

  render() {
    const { activeCard, hideNav } = this.state;
    const { classes } = this.props;
    return (
      <div id="services" className={classes.services}>
        <div className={classes.flexRow}>
          <h1 className={classes.title}>Our Services</h1>
          {hideNav && (
            <React.Fragment>
              <p
                style={"card1" !== activeCard ? { display: "none" } : {}}
                className={classes.subtitle}
              >
                1Want to build your product with a team that establishes a clear
                design process, meets deadlines, and delivers a spot-on end
                result? Our design team will help you build an engaging product
                easily and quickly in accordance with the latest trends and
                technologies.
              </p>
              <p
                style={"card2" !== activeCard ? { display: "none" } : {}}
                className={classes.subtitle}
              >
                2Want to build your product with a team that establishes a clear
                design process, meets deadlines, and delivers a spot-on end
                result? Our design team will help you build an engaging product
                easily and quickly in accordance with the latest trends and
                technologies.
              </p>
              <p
                style={"card3" !== activeCard ? { display: "none" } : {}}
                className={classes.subtitle}
              >
                3Want to build your product with a team that establishes a clear
                design process, meets deadlines, and delivers a spot-on end
                result? Our design team will help you build an engaging product
                easily and quickly in accordance with the latest trends and
                technologies.
              </p>
              <p
                style={"card4" !== activeCard ? { display: "none" } : {}}
                className={classes.subtitle}
              >
                4Want to build your product with a team that establishes a clear
                design process, meets deadlines, and delivers a spot-on end
                result? Our design team will help you build an engaging product
                easily and quickly in accordance with the latest trends and
                technologies.
              </p>
            </React.Fragment>
          )}
        </div>
        {hideNav ? (
          <React.Fragment>
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
                  width="100px"
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
                  width="100px"
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
                  width="100px"
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
                  width="100px"
                  src={
                    activeCard === "card4" ? DedicatedTeamWhite : DedicatedTeam
                  }
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
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={classNames(classes.flexRow, classes.cardsBlock)}>
              <div className={classes.mobileCardBlock}>
                <div id="card1" className={classes.cardMobile}>
                  <img
                    className={classes.cardImg}
                    src={WebDev}
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
                <p className={classes.subtitle}>
                  1Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
              </div>
              <div className={classes.mobileCardBlock}>
                <div id="card2" className={classes.cardMobile}>
                  <img
                    className={classes.cardImg}
                    width="75px"
                    height="75px"
                    src={Mobile}
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
                <p className={classes.subtitle}>
                  2Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
              </div>
              <div className={classes.mobileCardBlock}>
                <div id="card3" className={classes.cardMobile}>
                  <img
                    className={classes.cardImg}
                    width="75px"
                    height="75px"
                    src={UxUiDesign}
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
                <p className={classes.subtitle}>
                  3Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
              </div>
              <div className={classes.mobileCardBlock}>
                <div id="card4" className={classes.cardMobile}>
                  <img
                    className={classes.cardImg}
                    width="75px"
                    height="75px"
                    src={DedicatedTeam}
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
                <p className={classes.subtitle}>
                  4Want to build your product with a team that establishes a
                  clear design process, meets deadlines, and delivers a spot-on
                  end result? Our design team will help you build an engaging
                  product easily and quickly in accordance with the latest
                  trends and technologies.
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(Services);
