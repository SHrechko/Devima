import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import tmpImg from "../../assets/tmpImg.jpg";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const tabs = [
  { id: "0", value: "first" },
  { id: "1", value: "second" },
  { id: "2", value: "third" }
];

const styles = theme => ({
  title: {
    color: "#5535b8",
    fontSize: "55px",
    fontWeight: "400",
    marginBottom: "50px",
    "@media (max-width: 1023)": {
      fontSize: "45px"
    },
    "@media (max-width: 599px)": {
      fontSize: "25px"
    }
  },

  tabsBodyTitle: {
    fontSize: "26px",
    fontWeight: "700",
    margin: "0",
    color: "#5535b8",
    "@media (max-width: 768px)": {
      fontSize: "24px"
    }
  },
  subOne: {
    margin: "5px 0 0",
    fontSize: "20px",
    fontWeight: "600",
    marginRight: "10px",
    "@media (max-width: 768px)": {
      fontSize: "18px"
    }
  },
  subSecond: {
    lineHeight: "1.5",
    fontSize: "18px",
    fontWeight: "200",
    "@media (max-width: 768px)": {
      fontSize: "16px"
    }
  },
  tabsHead: {
    "& > div": {
      fontSize: "26px",
      fontWeight: "700",
      color: "#5535b8",
      "@media (max-width: 959px)": {
        fontSize: "24px"
      }
    }
  },
  tabsText: {
    fontSize: "18px",
    fontWeight: "200",
    "@media (max-width: 768px)": {
      fontSize: "16px"
    }
  },
  bg: {
    backgroundColor: "#29333d"
  },
  xsBg: {
    height: "80px"
  },
  tabsBody: {
    "@media (max-width: 599px)": {
      paddingTop: "40px"
    }
  },
  tabLinks: {
    marginTop: "30px"
  }
});

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTab: 0
    };
  }

  handleClick = index => {
    this.setState({
      showTab: index
    });
  };

  clickTabCategory() {
    this.setState({
      showTab: 0
    });
  }

  render() {
    const { classes } = this.props;
    const { showTab } = this.state;
    return (
      <Container component="section" id="portfolio">
        <h2 className={classes.title}>Portfolio</h2>
        <Paper style={{ position: "relative" }}>
          <Grid container>
            <Hidden smUp>
              <Grid
                item
                className={classNames(classes.bg, classes.xsBg)}
                xs={12}
              />
            </Hidden>
            <Grid item xs={12} sm={8} className={classes.tabsBody}>
              <Box component="div" p={{ xs: 2, sm: 3 }}>
                <Grid container spacing={2}>
                  <Grid
                    xs={12}
                    component="h3"
                    item
                    className={classes.tabsBodyTitle}
                  >
                    Impresso
                  </Grid>
                  <Grid component="sub" item className={classes.subOne}>
                    Indastry
                  </Grid>
                  <Grid component="sub" item className={classes.subSecond}>
                    Lorem ipsum
                  </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.tabsHead}>
                  <Grid item onClick={() => this.handleClick(0)}>
                    Description
                  </Grid>
                  <Grid item onClick={() => this.handleClick(1)}>
                    Delivered value
                  </Grid>
                  <Grid item onClick={() => this.handleClick(2)}>
                    Teach Stack
                  </Grid>
                </Grid>
                {tabs.map((tab, index) => (
                  <p
                    key={tab.id}
                    style={{
                      display: showTab === index ? "block" : "none"
                    }}
                    className={classes.tabsText}
                  >
                    {tab.value}
                  </p>
                ))}
              </Box>
            </Grid>
            <Grid item xs={false} sm={4} className={classes.bg} />
          </Grid>
        </Paper>
        <Paper square className={classes.tabLinks}>
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
        </Paper>
      </Container>
    );
  }
}

export default injectSheet(styles)(Portfolio);
