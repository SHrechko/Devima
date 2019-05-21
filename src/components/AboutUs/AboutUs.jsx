import React, { Component } from "react";
import injectSheet from "react-jss";
import Background from "../../assets/about-us.svg";
import Rectangle from "../../assets/Rectangle.svg";
import classNames from "classnames";

const styles = {
  contentTitle: {
    display: "flex",
    alignItems: "center",
    color: "#5535b8",
    fontSize: "14px",
    fontWeight: "700"
  },
  vector: {
    width: "2px",
    background:
      "linear-gradient(rgba(0,0,0,0) 0%, #ffffff 20%, #ffffff 80%, rgba(0,0,0,0) 100%)",
    backgroundSize: "cover",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "calc(50% - 1px)"
  },
  circle: {
    width: "20px",
    height: "20px",
    border: "2px solid #ffffff",
    borderRadius: "50%",
    position: "absolute",
    top: "calc(50% - 10px)",
    right: "-42px",
    backgroundColor: "#5535b8"
  },
  numberCircle: {
    marginRight: "3px",
    width: "27px",
    height: "27px",
    borderRadius: "50%",
    color: "#ffffff",
    backgroundColor: "#5535b8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "400"
  },
  leftCircle: {
    left: "-42px"
  },
  contentText: {
    margin: "5px 0"
  },
  aboutUs: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 150px)",
    width: "100%"
  },
  body: {
    position: "relative",
    backgroundImage: `url(${Background})`,
    backgroundPositionY: "top",
    backgroundPositionX: "center",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    boxSizing: "boder-box",
    backgroundSize: "cover",
    paddingBottom: "50px"
  },
  bodyWrapper: {
    height: "100%",
    width: "max-content",
    margin: "0 auto"
  },
  aboutUsTitle: {
    position: "relative",
    width: "363px",
    height: "74px",
    color: "#ffffff",
    fontSize: "55px",
    fontWeight: "400",
    marginTop: "0"
  },
  contentBlocks: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "max-content",
    margin: "0 100px"
  },
  aboutUsContent: {
    position: "relative",
    width: "346px",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    boxShadow: "0 20px 25px -15px rgba(0, 0, 0, 0.3)",
    marginRight: "476px",
    padding: "10px 35px",
    "&:not(:nth-child(2n))": {
      marginRight: "0",
      marginLeft: "476px"
    }
  },
  satistic: {
    position: "relative",
    backgroundImage: `url(${Rectangle})`,
    backgroundPositionY: "top",
    backgroundPositionX: "center",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    boxSizing: "boder-box",
    backgroundSize: "cover",
    padding: "50px 0 80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    minHeight: "150px"
  },
  statisticBlock: {
    padding: "0 50px",
    "&:not(:last-child)": {
      borderRight: "1px solid #ffffff"
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  statisticName: {
    color: "#2e25cf",
    fontSize: "25px",
    fontWeight: "300",
    lineHeight: "22px"
  },
  statisticNumbers: {
    position: "relative",
    backgroundImage:
      "-webkit-linear-gradient(180deg, #4762e2 0%, #2611c9 100%)",
    WebkitBackgroundClip: "text",
    color: "#4a4a4a",
    WebkitTextFillColor: "transparent",
    fontSize: "40px",
    fontWeight: "500",
    letterSpacing: "-1.5px",
    lineHeight: "29px",
    minHeight: "39px"
  }
};

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="about_us" className={classes.aboutUs}>
        <div id="about_us" className={classes.body}>
          <div className={classes.bodyWrapper}>
            <h1 className={classes.aboutUsTitle}>Our Approach</h1>
            <div className={classes.contentBlocks}>
              <div className={classes.vector} />

              <div className={classes.aboutUsContent}>
                <div className={classes.circle} />
                <div className={classes.contentTitle}>
                  <span className={classes.numberCircle}>01</span>
                  <span>Individual approach to the client</span>
                </div>
                <p className={classes.contentText}>
                  Our company delivers a personalized approach, which is based
                  on understanding the customer desires and the required
                  resource. That's helping us to build long-term relationships
                  with our client.
                </p>
              </div>

              <div className={classes.aboutUsContent}>
                <div
                  className={classNames(classes.circle, classes.leftCircle)}
                />
                <div className={classes.contentTitle}>
                  <span className={classes.numberCircle}>02</span>
                  <span>Full project control</span>
                </div>
                <p className={classes.contentText}>
                  Our company does full quality control at all stages of project
                  development. It helps to create the best product for our
                  clients.
                </p>
              </div>
              <div className={classes.aboutUsContent}>
                <div className={classes.circle} />
                <div className={classes.contentTitle}>
                  <span className={classes.numberCircle}>01</span>
                  <span>Professional and motivated team</span>
                </div>
                <p className={classes.contentText}>
                  We deliver a team of professionals who can meet the needs of
                  our clients to the smallest details and timely perform their
                  work. We love non-standard and difficult challenging projects
                  which help us to grow.
                </p>
              </div>
              <div className={classes.aboutUsContent}>
                <div
                  className={classNames(classes.circle, classes.leftCircle)}
                />
                <div className={classes.contentTitle}>
                  <span className={classes.numberCircle}>02</span>
                  <span>The latest technologies</span>
                </div>
                <p className={classes.contentText}>
                  We use only the newest technologies during the work process to
                  create a product that fully satisfied the client and meet the
                  latest trends on the marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.satistic}>
          <div className={classes.statisticBlock}>
            <h1 className={classes.statisticNumbers}>22</h1>
            <span className={classes.statisticName}>Completed Projects</span>
          </div>
          <div className={classes.statisticBlock}>
            <h1 className={classes.statisticNumbers}>15</h1>
            <span className={classes.statisticName}>Hours per month</span>
          </div>
          <div className={classes.statisticBlock}>
            <h1 className={classes.statisticNumbers}>59</h1>
            <span className={classes.statisticName}>Greate ideas</span>
          </div>
          <div className={classes.statisticBlock}>
            <h1 className={classes.statisticNumbers}>99%</h1>
            <span className={classes.statisticName}>Clients satisfied</span>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(AboutUs);
