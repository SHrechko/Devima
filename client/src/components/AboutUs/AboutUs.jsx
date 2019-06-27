import React, { Component } from "react";
import injectSheet from "react-jss";
import Background from "../../assets/about-us.svg";
import Rectangle from "../../assets/Rectangle.svg";
import classNames from "classnames";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  contentTitle: {
    display: "flex",
    alignItems: "center",
    color: "#5535b8",
    fontSize: "14px",
    fontWeight: "700",
    "@media screen and (max-width: 767px)": {
      height: "max-content !important"
    }
  },
  vector: {
    width: "2px",
    background:
      "linear-gradient(rgba(0,0,0,0) 0%, #ffffff 20%, #ffffff 80%, rgba(0,0,0,0) 100%)",
    backgroundSize: "cover",
    position: "absolute",
    top: "0",
    bottom: "0",
    "@media screen and (min-width: 1024px)": { left: "calc(50% - 1px)" },
    "@media screen and (max-width: 1024px)": {
      left: " ",
      right: "-31px"
    }
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
    "@media (min-width: 1024px)": {
      left: "-42px"
    }
  },
  contentText: {
    margin: "5px 0",
    "@media (max-width: 767px)": {
      height: "max-content"
    }
  },
  aboutUs: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  body: {
    width: "100%",
    display: "inline-block",
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
    margin: "0 auto",
    "@media screen and (max-width: 1023px)": {
      marginLeft: "auto"
    },
    "@media screen and (max-width: 767px)": {
      margin: "0 20px",
      width: "auto"
    }
  },
  aboutUsTitle: {
    position: "relative",
    width: "363px",
    height: "74px",
    color: "#ffffff",
    fontSize: "55px",
    fontWeight: "400",
    marginTop: "35px",
    marginLeft: "75px",
    "@media (max-width: 1024)": {
      fontSize: "45px"
    },
    "@media (max-width: 767px)": {
      fontSize: "25px",
      marginLeft: "20px"
    }
  },
  contentBlocks: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "max-content",
    margin: "0",
    "@media (max-width: 767px)": {
      display: "none"
    }
  },
  aboutUsContent: {
    position: "relative",
    width: "346px",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    boxShadow: "0 20px 25px -15px rgba(0, 0, 0, 0.3)",
    marginRight: "auto",
    padding: "10px 35px",
    "@media screen and (max-width: 767px)": {
      margin: "0",
      height: "calc(100% - 20px) !important",
      margin: "0",
      maxWidth: "calc(100% - 70px)"
    },
    "@media (max-width: 1023px)": {
      "&:not(:last-child)": {
        marginBottom: "20px"
      }
    },
    "@media (min-width: 1024px) and (max-width: 1360px)": {
      width: "321px",
      marginRight: "450px"
    },
    "@media (min-width: 1024px)": {
      "&:not(:nth-child(2n))": {
        marginRight: "0",
        marginLeft: "476px",
        "@media (min-width: 1024px) and (max-width: 1360px)": {
          marginLeft: "450px"
        }
      }
    }
  },
  statistic: {
    position: "relative",

    padding: "50px 20px 80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    minHeight: "150px",
    "@media (max-width: 767px)": {
      maxWidth: "463px",
      flexWrap: "wrap",
      margin: "0 auto",
      paddingTop: "25px"
    },
    "@media (min-width: 768px)": {
      backgroundImage: `url(${Rectangle})`,
      backgroundPositionY: "top",
      backgroundPositionX: "center",
      backgroundRepeatX: "no-repeat",
      backgroundRepeatY: "no-repeat",
      boxSizing: "boder-box",
      backgroundSize: "cover"
    }
  },
  statisticBlock: {
    "@media (min-width: 768px)": {
      padding: "0 50px",
      "&:not(:last-child)": {
        borderRight: "1px solid #ffffff"
      }
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 455px)": {
      padding: "0",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      border: "none"
    },
    "@media (min-width: 456px) and (max-width: 767px)": {
      width: "182px",

      "&:nth-child(2n-1)": {
        borderRight: "1px solid #ededed",
        paddingRight: "25px"
      },
      "&:nth-child(2n)": {
        paddingLeft: "25px"
      }
    }
  },
  statisticName: {
    color: "#2e25cf",
    fontSize: "25px",
    fontWeight: "300",
    lineHeight: "22px",
    textAlign: "center"
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
    minHeight: "39px",
    "@media (max-width: 455px)": {
      margin: "20px 10px 20px 10px"
    }
  },
  carousel: {
    height: "230px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (min-width: 768px)": {
      display: "none"
    },
    "@media (min-width: 600px)": {
      height: "130px",
      paddingBottom: "20px",
      "& div": {
        maxHeight: "130px"
      }
    },
    "& div": {
      height: "230px",
      width: "100%"
    }
  },
  dotsClass: {
    width: "100%",
    bottom: "-37px",
    "& > li.slick-active button:before": {
      opacity: 1,
      color: "#ffffff"
    },
    "& > li > button::before": {
      fontSize: "20px",
      color: "#ffffff",
      opacity: 0.1
    }
  }
};

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      arrows: false,
      className: classes.carousel,
      adaptiveHeight: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: classNames("slick-dots", classes.dotsClass)
    };
    return (
      <div id="about_us" className={classes.aboutUs}>
        <div id="about_us" className={classes.body}>
          <h1 className={classes.aboutUsTitle}>Our Approach</h1>
          <div className={classes.bodyWrapper}>
            <Slider {...settings}>
              <div className={classes.aboutUsContent}>
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
                <div className={classes.contentTitle}>
                  <span className={classes.numberCircle}>02</span>
                  <span>Individual approach to the client</span>
                </div>
                <p className={classes.contentText}>
                  Our company does full quality control at all stages of project
                  development. It helps to create the best product for our
                  clients.
                </p>
              </div>
              <div className={classes.aboutUsContent}>
                <div className={classes.contentTitle}>
                  <span className={classes.numberCircle}>03</span>
                  <span>Individual approach to the client</span>
                </div>
                <p className={classes.contentText}>
                  We deliver a team of professionals who can meet the needs of
                  our clients to the smallest details and timely perform their
                  work. We love non-standard and difficult challenging projects
                  which help us to grow.
                </p>
              </div>
              <div className={classes.aboutUsContent}>
                <div className={classes.contentTitle}>
                  <span className={classes.numberCircle}>04</span>
                  <span>Individual approach to the client</span>
                </div>
                <p className={classes.contentText}>
                  We use only the newest technologies during the work process to
                  create a product that fully satisfied the client and meet the
                  latest trends on the marketplace.
                </p>
              </div>
            </Slider>
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
                  <span className={classes.numberCircle}>03</span>
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
                  <span className={classes.numberCircle}>04</span>
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
        <div className={classes.statistic}>
          <div className={classes.statisticBlock}>
            <h1 className={classes.statisticNumbers}>22</h1>
            <span className={classes.statisticName}>Completed Projects</span>
          </div>
          <div className={classes.statisticBlock}>
            <h1 className={classes.statisticNumbers}>480</h1>
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
