import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import tmpImg from "../../assets/tmpImg.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabs = [
  { id: "0", value: "first" },
  { id: "0", value: "second" },
  { id: "0", value: "third" }
];

const styles = theme => ({
  portfolio: {
    position: "relative",
    width: "calc(100% - 20px)",
    padding: "30px 10px 0",
    height: "max-content"
  },
  title: {
    color: "#5535b8",
    fontSize: "55px",
    fontWeight: "400",
    marginBottom: "50px",
    "@media (min-width: 768px)": {
      marginLeft: "68px"
    },
    "@media (max-width: 1023)": {
      fontSize: "45px"
    },
    "@media (max-width: 767px)": {
      fontSize: "25px",
      marginLeft: "25px"
    }
  },
  slik: {
    minWidth: "320px",
    width: "100%",
    height: "450px",
    marginBottom: "50px",
    border: "2px solid rgba(0, 0, 0, 0.1)",
    "@media screen and (max-width: 1024px)": {
      height: "400px"
    },
    "@media (max-width: 768px)": {
      height: "350px"
    }
  },
  arrows: {
    height: "50px",
    boxSizing: "border-box",
    position: "absolute",
    width: "60%",
    right: "0",
    bottom: "0",
    display: "inline-block",
    border: "solid rgba(0, 0, 0, 0.1)",
    borderWidth: "2px 0 0 2px",
    "@media screen and (max-width: 1024px)": {
      height: "40px"
    },
    "@media screen and (max-width: 768px)": {
      height: "35px"
    },
    "& > div": {
      textAlign: "center",
      paddingTop: "10px",
      cursor: "pointer",
      height: "40px",
      width: "50px",
      display: "inline-block",
      float: "right",
      border: "solid rgba(0, 0, 0, 0.1)",
      borderWidth: "0 0 0 2px",
      "&:last-child": {
        paddingRight: "15px",
        "@media screen and (max-width: 768px)": {
          paddingRight: "10px"
        }
      },
      "&:first-child": {
        paddingLeft: "15px",
        "@media screen and (max-width: 768px)": {
          paddingLeft: "10px"
        }
      },
      "@media screen and (min-width: 769px) and (max-width: 1024px)": {
        height: "28px"
      },
      "@media screen and (max-width: 768px)": {
        height: "26px",
        paddingTop: "5px",
        width: "40px"
      }
    }
  },
  sliderImg: {
    boxSizing: "border-box",
    width: "40%",
    height: "450px",
    display: "inline-block",
    float: "left",
    paddingBottom: "4px",
    "@media screen and (max-width: 1024px)": {
      height: "400px"
    },
    "@media (max-width: 768px)": {
      height: "350px"
    }
  },
  sliderBody: {
    width: "50%",
    height: "calc(100% - 40px)",
    "& > h1": {
      fontSize: "26px",
      fontWeight: "700",
      margin: "0",
      color: "#5535b8",
      "@media (max-width: 768px)": {
        fontSize: "24px"
      }
    },
    display: "inline-block",
    float: "left",
    padding: "20px 0 70px 30px"
  },
  slide: {
    boxSizing: "border-box",
    maxHeight: "450px",
    outline: "none"
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
    margin: "5px 0 0",
    fontSize: "18px",
    fontWeight: "200",
    "@media (max-width: 768px)": {
      fontSize: "16px"
    }
  },
  tabs: {
    width: "100%",
    height: "100%"
  },
  tabsHead: {
    display: "flex",
    flexDirection: "row",
    "& > div": {
      fontSize: "26px",
      fontWeight: "700",
      color: "#5535b8",
      "&:not(:last-child)": {
        marginRight: `${theme.default.space * 3}px`
      },
      "@media (max-width: 768px)": {
        fontSize: "24px"
      }
    }
  },
  tabsBody: {
    fontSize: "18px",
    fontWeight: "200",
    "@media (max-width: 768px)": {
      fontSize: "16px"
    }
  }
});

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTab: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  handleClick = index => {
    this.setState({
      showTab: index
    });
  };

  next() {
    this.slider.slickNext();
    this.setState({
      showTab: 0
    });
  }
  previous() {
    this.slider.slickPrev();
    this.setState({
      showTab: 0
    });
  }

  render() {
    const { classes } = this.props;
    const settings = {
      dots: false,
      adaptiveHeight: true,
      className: classes.slik,
      arrows: false,
      // autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { showTab } = this.state;
    return (
      <div id="portfolio" className={classes.portfolio}>
        <div className={classes.title}>Portfolio</div>
        <div style={{ position: "relative" }}>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div className={classes.slide}>
              <img src={tmpImg} className={classes.sliderImg} />
              <div className={classes.sliderBody}>
                <h1>Impresso</h1>
                <sub className={classes.subOne}>Indastry</sub>
                <sub className={classes.subSecond}>Lorem ipsum</sub>
                <div className={classes.tabs}>
                  <div className={classes.tabsHead}>
                    <div onClick={() => this.handleClick(0)}>Description</div>
                    <div onClick={() => this.handleClick(1)}>
                      Delivered value
                    </div>
                    <div onClick={() => this.handleClick(2)}>Teach Stack</div>
                  </div>
                  {tabs.map((tab, index) => (
                    <p
                      key={tab.id}
                      style={{
                        display: showTab === index ? "block" : "none"
                      }}
                      className={classes.tabsBody}
                    >
                      {tab.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className={classes.slide}>
              <img src={tmpImg} className={classes.sliderImg} />
              <div className={classes.sliderBody}>
                <h1>Impresso</h1>
                <sub className={classes.subOne}>Indastry</sub>
                <sub className={classes.subSecond}>Lorem ipsum</sub>
                <div className={classes.tabs}>
                  <div className={classes.tabsHead}>
                    <div onClick={() => this.handleClick(0)}>Description</div>
                    <div onClick={() => this.handleClick(1)}>
                      Delivered value
                    </div>
                    <div onClick={() => this.handleClick(2)}>Teach Stack</div>
                  </div>
                  {tabs.map((tab, index) => (
                    <p
                      key={tab.id}
                      style={{
                        display: showTab === index ? "block" : "none"
                      }}
                      className={classes.tabsBody}
                    >
                      {tab.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Slider>
          <div className={classes.arrows}>
            <div onClick={this.next}>&raquo;</div>
            <div onClick={this.previous}>&laquo;</div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Portfolio);
