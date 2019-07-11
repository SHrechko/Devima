import React, { Component } from "react";
import injectSheet from "react-jss";
import Background from "../../assets/about-us.svg";
import Rectangle from "../../assets/Rectangle.svg";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  contentTitle: {
    margin: 0,
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
    "@media screen and (min-width: 960px)": { left: "calc(50% - 3px)" },
    "@media screen and (max-width: 959px)": {
      left: " ",
      right: "20px"
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
    minWidth: "27px",
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
    "@media (min-width: 960px)": {
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
    position: "relative",
    padding: "70px 0",
    "@media screen and (max-width: 959px)": { padding: "40px 0" },
    "@media screen and (max-width: 599px)": { padding: "20px 0" }
  },
  aboutUsTitle: {
    position: "relative",
    color: "#ffffff",
    fontSize: "55px",
    fontWeight: "400",
    margin: 0,
    padding: "50px 0 20px",
    "@media (max-width: 959px)": {
      fontSize: "45px"
    },
    "@media (max-width: 599px)": {
      padding: "29px 0",
      fontSize: "25px"
    }
  },
  contentBlocks: {
    // position: "relative",
    // display: "flex",
    // flexDirection: "column",
    // width: "max-content",
    // margin: "0",
    // "@media (max-width: 767px)": {
    //   display: "none"
    // }
  },
  aboutUsContent: {
    position: "relative",
    padding: "10px 35px",
    display: "block !important",
    // width: "90%",
    // height: "100%",
    margin: "0 auto"
  },
  statistic: {
    // position: "relative",
    padding: "50px 0 80px",
    "@media (max-width: 599px)": {
      padding: "20px 0"
    }
  },
  statisticBlock: {
    "&.MuiGrid-item": {
      "@media (min-width: 600px) and (max-width: 959px)": {
        marginTop: "30px"
      }
    },

    "@media (min-width: 960px)": {
      "&:not(:last-child)": {
        borderRight: "1px solid #ededed"
      }
    },
    "@media (min-width: 600px)": {
      "&:nth-child(2n + 1)": {
        borderRight: "1px solid #ededed"
      }
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 599px)": {
      flexDirection: "row"
      // width: "230px",
      // "&:nth-child(2n-1)": {
      //   // borderRight: "1px solid #ededed",
      //   paddingRight: "30px"
      // },
      // "&:nth-child(2n)": {
      //   paddingLeft: "30px"
      // }
    }
  },
  statisticName: {
    color: "#2e25cf",
    fontSize: "25px",
    fontWeight: "300",
    lineHeight: "22px",
    textAlign: "center",
    "@media (max-width: 579px)": {
      minWidth: "max-content"
    }
  },
  statisticNumbers: {
    margin: 0,
    padding: "40px 0",
    width: "max-content",
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
    "@media (max-width: 599px)": {
      padding: "20px 10px 20px 10px"
    }
  },
  carousel: {
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    "& .slick-slide": {
      borderRadius: "5px"
    },
    "& .MuiPaper-root": {
      width: "90% !important",
      height: "100%"
    },
    "& > div": {
      boxSizing: "border-box",
      height: "100% !important",
      width: "100%",
      "& div": {
        width: "100%",
        boxSizing: "border-box",
        height: "100%"
      }
    },
    "@media (max-width: 500px)": {
      height: "185px"
    },
    "@media (max-width: 430px)": {
      height: "210px"
    },
    "@media (max-width: 370px)": {
      height: "250px"
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
  },
  mdGrid: {
    "&.MuiGrid-container": {
      width: "550px",
      margin: "0 auto"
    },

    "& > *": {
      paddingTop: "20px",
      paddingBottom: "20px"
    }
  }
};

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = { mdWidth: null };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ mdWidth: window.innerWidth >= 960 });
  }

  render() {
    const { classes } = this.props;
    const { mdWidth } = this.state;
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
      <section id="about_us" className={classes.aboutUs}>
        <Container maxWidth={false} id="about_us" className={classes.body}>
          <Container style={{ padding: 0 }}>
            <h2 className={classes.aboutUsTitle}>Our Approach</h2>
            <div>
              <Hidden smUp>
                <Slider {...settings}>
                  <Paper className={classes.aboutUsContent}>
                    <h3 className={classes.contentTitle}>
                      <span className={classes.numberCircle}>01</span>
                      <span>Individual approach to the client</span>
                    </h3>
                    <p className={classes.contentText}>
                      Our company delivers a personalized approach, which is
                      based on understanding the customer desires and the
                      required resource. That's helping us to build long-term
                      relationships with our client.
                    </p>
                  </Paper>
                  <Paper className={classes.aboutUsContent}>
                    <h3 className={classes.contentTitle}>
                      <span className={classes.numberCircle}>02</span>
                      <span>Individual approach to the client</span>
                    </h3>
                    <p className={classes.contentText}>
                      Our company does full quality control at all stages of
                      project development. It helps to create the best product
                      for our clients.
                    </p>
                  </Paper>
                  <Paper className={classes.aboutUsContent}>
                    <h3 className={classes.contentTitle}>
                      <span className={classes.numberCircle}>03</span>
                      <span>Individual approach to the client</span>
                    </h3>
                    <p className={classes.contentText}>
                      We deliver a team of professionals who can meet the needs
                      of our clients to the smallest details and timely perform
                      their work. We love non-standard and difficult challenging
                      projects which help us to grow.
                    </p>
                  </Paper>
                  <Paper className={classes.aboutUsContent}>
                    <h3 className={classes.contentTitle}>
                      <span className={classes.numberCircle}>04</span>
                      <span>Individual approach to the client</span>
                    </h3>
                    <p className={classes.contentText}>
                      We use only the newest technologies during the work
                      process to create a product that fully satisfied the
                      client and meet the latest trends on the marketplace.
                    </p>
                  </Paper>
                </Slider>
              </Hidden>
              <Hidden xsDown>
                <Grid
                  className={classNames(classes.bodyWrapper, {
                    [classes.mdGrid]: !mdWidth
                  })}
                  direction={"column"}
                  container
                >
                  <div className={classes.vector} />
                  <Grid container spacing={8}>
                    <Grid item xs={11} md={6}>
                      <Paper className={classes.aboutUsContent}>
                        <div className={classes.circle} />
                        <h3 className={classes.contentTitle}>
                          <span className={classes.numberCircle}>01</span>
                          <span>Individual approach to the client</span>
                        </h3>
                        <p className={classes.contentText}>
                          Our company delivers a personalized approach, which is
                          based on understanding the customer desires and the
                          required resource. That's helping us to build
                          long-term relationships with our client.
                        </p>
                      </Paper>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justify={mdWidth ? "flex-end" : "flex-start"}
                    spacing={7}
                  >
                    <Grid item xs={11} md={6}>
                      <Paper className={classes.aboutUsContent}>
                        <div
                          className={classNames(
                            classes.circle,
                            classes.leftCircle
                          )}
                        />
                        <h3 className={classes.contentTitle}>
                          <span className={classes.numberCircle}>02</span>
                          <span>Full project control</span>
                        </h3>
                        <p className={classes.contentText}>
                          Our company does full quality control at all stages of
                          project development. It helps to create the best
                          product for our clients.
                        </p>
                      </Paper>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={8}>
                    <Grid item xs={11} md={6}>
                      <Paper className={classes.aboutUsContent}>
                        <div className={classes.circle} />
                        <h3 className={classes.contentTitle}>
                          <span className={classes.numberCircle}>03</span>
                          <span>Professional and motivated team</span>
                        </h3>
                        <p className={classes.contentText}>
                          We deliver a team of professionals who can meet the
                          needs of our clients to the smallest details and
                          timely perform their work. We love non-standard and
                          difficult challenging projects which help us to grow.
                        </p>
                      </Paper>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={7}
                    justify={mdWidth ? "flex-end" : "flex-start"}
                  >
                    <Grid item xs={11} md={6}>
                      <Paper className={classes.aboutUsContent}>
                        <div
                          className={classNames(
                            classes.circle,
                            classes.leftCircle
                          )}
                        />
                        <h3 className={classes.contentTitle}>
                          <span className={classes.numberCircle}>04</span>
                          <span>The latest technologies</span>
                        </h3>
                        <p className={classes.contentText}>
                          We use only the newest technologies during the work
                          process to create a product that fully satisfied the
                          client and meet the latest trends on the marketplace.
                        </p>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
            </div>
          </Container>
        </Container>
        <Container>
          <Grid container className={classes.statistic}>
            <Grid item xs={12} sm={6} md={3} className={classes.statisticBlock}>
              <h3 className={classes.statisticNumbers}>22</h3>
              <span className={classes.statisticName}>Completed Projects</span>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.statisticBlock}>
              <h3 className={classes.statisticNumbers}>480</h3>
              <span className={classes.statisticName}>Hours per month</span>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.statisticBlock}>
              <h3 className={classes.statisticNumbers}>59</h3>
              <span className={classes.statisticName}>Greate ideas</span>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.statisticBlock}>
              <h3 className={classes.statisticNumbers}>99%</h3>
              <span className={classes.statisticName}>Clients satisfied</span>
            </Grid>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default injectSheet(styles)(AboutUs);
