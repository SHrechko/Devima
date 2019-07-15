import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

import Triangle from "./Triangle";

import DescriptionImg from "../../assets/Mockup-updated.png";

const categoryTabs = [
  {
    id: 0,
    text: "Tab1"
  },
  {
    id: 1,
    text: "Tab2"
  },
  {
    id: 2,
    text: "Tab3"
  }
];

const tabs = [
  {
    id: 0,
    value:
      "The main goal of the Impresso is to build the next " +
      "generation of career data. The Impresso application " +
      "represents validated profiles and SMART (Secure, " +
      "Monetize, Automite, Reactive and Trust) CVs which " +
      "include all personal career data posted to the user’s " +
      "future blockchain profile. This application will replace " +
      "today’s tradition resumes hosted online on traditional " +
      "servers. Companies and recruiters will be able to trust " +
      "SMART CV’s information as all personal data will be " +
      "validated through the blockchain."
  },
  { id: 1, value: "second" },
  { id: 2, value: "third" }
];

const styles = theme => ({
  section: {
    paddingBottom: "30px"
  },
  title: {
    color: "#5535b8",
    fontSize: "55px",
    fontWeight: "400",
    display: "inline-block",
    margin: "50px 0",
    "@media (max-width: 959px)": {
      fontSize: "45px"
    },
    "@media (max-width: 599px)": {
      margin: "29px 0",
      fontSize: "25px"
    }
  },

  tabsBodyTitle: {
    fontSize: "26px",
    fontWeight: "700",
    margin: "0",
    color: "#5535b8",
    letterSpacing: "2px",
    "@media (max-width: 599px)": {
      fontSize: "24px"
    }
  },
  subOne: {
    margin: "5px 0 0",
    fontSize: "16px",
    fontWeight: "600",
    marginRight: "10px",
    "@media (max-width: 959px)": {
      fontSize: "15px"
    }
  },
  subSecond: {
    lineHeight: "1.4",
    fontSize: "15px",
    fontWeight: "200",
    "@media (max-width: 959px)": {
      fontSize: "14px"
    }
  },
  tabsHead: {
    "& > div": {
      fontSize: "20px",
      fontWeight: "500",
      color: "#adb2b3",
      cursor: "pointer",
      "@media (max-width: 959px)": {
        fontSize: "16px"
      }
    }
  },
  tabsText: {
    width: "85%",
    fontSize: "18px",
    fontWeight: "200",
    lineHeight: "30px",
    "@media (max-width: 959px)": {
      fontSize: "16px"
    },
    "@media (max-width: 599px)": {
      width: "100%",
      lineHeight: "25px"
    }
  },
  bg: {
    position: "relative",
    background: "linear-gradient(to bottom, #7d0cda 0%, #a16ccc 100%)"
  },
  xsBg: {
    height: "80px"
  },
  tabsBody: {
    minHeight: "500px",
    "@media (max-width: 959px)": {
      paddingTop: "40px"
    }
  },
  tabLinks: {
    marginTop: "30px"
  },
  paper: {
    position: "relative",
    overflow: "hidden",
    width: "calc(100% + 2px)",
    minHeight: "500px"
  },
  descriptionImgBlock: {
    width: "85%",
    height: "80%",
    position: "absolute",
    bottom: "50%",
    transform: "translate(-20%, 50%)",
    overflow: "hidden"
  },
  descriptionImg: {
    width: "200%",
    position: "absolute",
    top: "50%",
    transform: "translate(-25%, -55%)"
  },
  descriptionImgBlockMd: {
    bottom: 0,
    width: "25%",
    left: "50%",
    height: "147px",
    transform: "translate(-50%, 50%)",
    "@media (max-width: 599px)": {
      width: "150px",
      height: "110px"
    }
  },
  gridTabButtons: {
    listStyleType: "none",
    padding: "20px 0 0",
    "& li": {
      textAlign: "center",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
      "&:hover": {
        color: "#5535b8"
      }
    }
  },
  activeTabCategory: {
    color: "#5535b8 !important"
  },
  tabCategory: {
    color: "#adb2b3"
  },
  activeImpressoTab: {
    color: "#4a4a4a !important",
    fontWeight: "700 !important"
  },
  triangleList: {
    "& > *": {
      position: "relative"
    },
    "& p": {
      marginLeft: "10px",
      "@media (max-width: 599px)": {
        fontSize: "14px"
      }
    },
    "@media (min-width: 960px)": {
      paddingRight: "20px"
    }
  },
  line: {
    height: "3px",
    position: "absolute",
    top: "50%",
    left: "calc(30% + 60px)",
    right: 0,
    backgroundColor: "#7d0cda",
    "&:after": {
      boxSizing: "border-box",
      content: "''",
      width: "20px",
      height: "20px",
      position: "absolute",
      right: 0,
      backgroundColor: "inherit",
      borderRadius: "50%",
      top: "-10px"
    }
  },
  trianglesParent1: {
    left: "30%",
    "& > div": {
      transform: "rotate(40deg) skewX(-30deg) scale(1,.866) translate(105%)"
    }
  },
  trianglesParent2: {
    left: "0",
    "& > div": {
      transform:
        "rotate(70deg) skewX(-30deg) scale(1,.866) translate(85%, -45%)"
    }
  },
  trianglesParent3: {
    left: "10%",
    "& > div": {
      transform:
        "rotate(95deg) skewX(-30deg) scale(1,.866) translate(45%, -80%)"
    }
  }
});

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTab: 0,
      activeCategory: 0
    };
  }

  handleClick = index => {
    this.setState({
      showTab: index
    });
  };

  changeCategory(id) {
    this.setState({
      showTab: 0,
      activeCategory: id
    });
  }

  render() {
    const { classes } = this.props;
    const { showTab, activeCategory } = this.state;
    return (
      <Container className={classes.section} component="section" id="portfolio">
        <h2 className={classes.title}>Portfolio</h2>
        <Paper elevation={4} className={classes.paper}>
          <Grid container>
            <Hidden mdUp>
              <Grid
                item
                className={classNames(classes.bg, classes.xsBg)}
                xs={12}
              >
                <div
                  className={classNames(
                    classes.descriptionImgBlock,
                    classes.descriptionImgBlockMd
                  )}
                >
                  <img
                    src={DescriptionImg}
                    className={classes.descriptionImg}
                  />
                </div>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={8} className={classes.tabsBody}>
              {categoryTabs.map(item => (
                <Box
                  key={item.id}
                  component="div"
                  p={{ xs: 3, md: 4 }}
                  style={{
                    display: item.id === activeCategory ? "block" : "none"
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid
                      xs={12}
                      component="h3"
                      item
                      className={classes.tabsBodyTitle}
                    >
                      Impresso {item.text}
                    </Grid>
                    <Grid component="sub" item className={classes.subOne}>
                      Indastry
                    </Grid>
                    <Grid component="sub" item className={classes.subSecond}>
                      Lorem ipsum
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} className={classes.tabsHead}>
                    <Grid
                      item
                      className={classNames({
                        [classes.activeImpressoTab]: showTab === 0
                      })}
                      onClick={() => this.handleClick(0)}
                    >
                      Description
                    </Grid>
                    <Grid
                      item
                      className={classNames({
                        [classes.activeImpressoTab]: showTab === 1
                      })}
                      onClick={() => this.handleClick(1)}
                    >
                      Delivered value
                    </Grid>
                    <Grid
                      item
                      className={classNames({
                        [classes.activeImpressoTab]: showTab === 2
                      })}
                      onClick={() => this.handleClick(2)}
                    >
                      Teach Stack
                    </Grid>
                  </Grid>
                  {tabs.map((tab, index) => (
                    <div
                      key={tab.id}
                      style={{
                        display: showTab === index ? "block" : "none"
                      }}
                    >
                      {tab.id === 0 && (
                        <p key={tab.id} className={classes.tabsText}>
                          {tab.value}
                        </p>
                      )}
                      {tab.id === 1 && (
                        <Grid container className={classes.triangleList}>
                          <Grid item xs={4}>
                            <Triangle parentClass={classes.trianglesParent1}>
                              1
                            </Triangle>
                            <Hidden xsDown>
                              <div className={classes.line} />
                            </Hidden>
                          </Grid>
                          <Grid item xs={8}>
                            <p>
                              Devima team designed, developed and tested
                              Impesso’s multiple software products;
                            </p>
                          </Grid>
                          <Grid item xs={4}>
                            <Triangle parentClass={classes.trianglesParent2}>
                              2
                            </Triangle>
                            <Hidden xsDown>
                              <div
                                style={{ left: "60px" }}
                                className={classes.line}
                              />
                            </Hidden>
                          </Grid>
                          <Grid item xs={8}>
                            <p>
                              Introduced a lot of features and wide
                              functionality with the modern tech stack;
                            </p>
                          </Grid>
                          <Grid item xs={4}>
                            <Triangle parentClass={classes.trianglesParent3}>
                              3
                            </Triangle>
                            <Hidden xsDown>
                              <div
                                style={{ left: "calc(10% + 60px)" }}
                                className={classes.line}
                              />
                            </Hidden>
                          </Grid>
                          <Grid item xs={8}>
                            <p>
                              Delivered a solution which helps Impresso system
                              uses Blockchain as trustful and permanent data
                              storage;
                            </p>
                          </Grid>
                          <Grid item xs={4}>
                            <Triangle parentClass={classes.trianglesParent2}>
                              4
                            </Triangle>
                            <Hidden xsDown>
                              <div
                                style={{ left: "60px" }}
                                className={classes.line}
                              />
                            </Hidden>
                          </Grid>
                          <Grid item xs={8}>
                            <p>
                              Created simple and attractive UX/UI design for
                              mobile and web application of Impresso;
                            </p>
                          </Grid>
                          <Grid item xs={4}>
                            <Triangle parentClass={classes.trianglesParent1}>
                              5
                            </Triangle>
                            <Hidden xsDown>
                              <div className={classes.line} />
                            </Hidden>
                          </Grid>
                          <Grid item xs={8}>
                            <p>
                              Performed a number of integrations and migrations
                              to guarantee the smooth performance of all.
                            </p>
                          </Grid>
                        </Grid>
                      )}
                    </div>
                  ))}
                </Box>
              ))}
            </Grid>
            <Grid item xs={false} md={4} className={classes.bg}>
              <div className={classes.descriptionImgBlock}>
                <img src={DescriptionImg} className={classes.descriptionImg} />
              </div>
            </Grid>
          </Grid>
        </Paper>
        {/* <Paper square className={classes.tabLinks}>
          <Tabs
            value={1}
            onChange={() => {}}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="RECENTS" />
            <Tab label="FAVORITES" />
            <Tab label="NEARBY" />
          </Tabs>
        </Paper> */}
        <Grid component="ul" container className={classes.gridTabButtons}>
          <Grid
            component="li"
            item
            xs={4}
            onClick={() => this.changeCategory(0)}
            className={classNames(classes.tabCategory, {
              [classes.activeTabCategory]: activeCategory === 0
            })}
          >
            Impresso
          </Grid>
          <Grid
            component="li"
            item
            xs={4}
            onClick={() => this.changeCategory(1)}
            className={classNames(classes.tabCategory, {
              [classes.activeTabCategory]: activeCategory === 1
            })}
          >
            WABBA
          </Grid>
          <Grid
            component="li"
            item
            xs={4}
            onClick={() => this.changeCategory(2)}
            className={classNames(classes.tabCategory, {
              [classes.activeTabCategory]: activeCategory === 2
            })}
          >
            Vedo
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default injectSheet(styles)(Portfolio);
