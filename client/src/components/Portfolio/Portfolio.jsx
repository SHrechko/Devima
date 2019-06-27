import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import tmpImg from "../../assets/tmpImg.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabs = [
  { id: "0", value: "first" },
  { id: "1", value: "second" },
  { id: "2", value: "third" }
];

const styles = theme => ({
  portfolio: {
    position: "relative",
    width: "100%",
    paddingTop: "30px",
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
    boxSizing: "border-box",
    // border: "2px solid rgba(0, 0, 0, 0.1)",
    "@media screen and (max-width: 1024px)": {
      height: "400px"
    },
    "@media (max-width: 768px)": {
      height: "350px"
    }
  },
  arrows: {
    height: "50px",
    background: "#ffffff",
    boxSizing: "border-box",
    position: "absolute",
    width: "50%",
    right: "0",
    bottom: "3px",
    display: "inline-block",
    border: "2px solid rgba(0, 0, 0, 0.1)",
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
      height: "36px",
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
        height: "31px",
        paddingTop: "5px"
      },
      "@media screen and (max-width: 768px)": {
        height: "26px",
        paddingTop: "4px",
        width: "40px"
      }
    }
  },
  sliderImg: {
    boxSizing: "border-box",
    width: "50%",
    height: "450px",
    display: "inline-block",
    float: "left",
    marginLeft: "1px",
    paddingBottom: "4px",
    "@media screen and (max-width: 1024px)": {
      height: "400px"
    },
    "@media (max-width: 768px)": {
      height: "350px"
    }
  },
  sliderBody: {
    width: "calc(50% - 40px)",
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
    padding: "20px 0 20px 30px"
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
      maxWidth: "max-content",
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
  },
  littleBG: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100px",
    background:
      "linear-gradient(to bottom, #d8d0ef 0%, #cec7ec 10%, #5535b8 100%)"
  },
  littleSlik: {
    // marginTop: "80px",
    height: "500px",
    width: "calc(100% - 50px)",
    margin: "100px auto 0",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 7px 15px 4px rgba(41, 26, 204, 0.12)",
    "@media (max-width: 449px)": {
      width: "calc(100% - 5px)"
    }
  },
  littleSliderItem: {
    background: "#ffffff",
    width: "calc(100% - 60px) !important",
    height: "500px",
    outline: "none",
    padding: "30px 30px",
    "@media (max-width: 449px)": {
      padding: "20px 10px",
      width: "calc(100% - 20px) !important"
    }
  },
  littleSlikName: {
    color: "#5535b8",
    fontSize: "18px",
    fontWeight: "700"
  },
  littleSlikTitle: {
    marginTop: "10px",
    fontSize: "22px",
    color: "#616161",
    fontWeight: "700"
  },
  sectionName: {
    display: "inline-block",
    marginTop: "15px",
    fontSize: "16px",
    color: "#616161",
    fontWeight: "700",
    maxWidth: "30%"
  },
  section: {
    display: "inline-block",
    marginTop: "15px",
    fontSize: "16px",
    color: "#717171"
  },
  littleTagsBlock: {
    display: "inline-block",
    maxWidth: "70%"
  },
  littleTags: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "auto",
    "& > div:not(:last-child)": {
      marginRight: "10px"
    },
    paddingLeft: "5px",
    "& > div": {
      color: "#5535b8"
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
      showTab: index,
      showBlock: window.innerWidth >= 768
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

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ showBlock: window.innerWidth >= 768 });
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
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            className: classes.littleSlik,
            centerMode: true,
            centerPadding: 0
          }
        }
      ]
    };
    const { showTab, showBlock } = this.state;
    return (
      <div id="portfolio" className={classes.portfolio}>
        <div className={classes.title}>Portfolio</div>
        {showBlock ? (
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
        ) : (
          <React.Fragment>
            <div className={classes.littleBG} />
            <Slider {...settings}>
              <div className={classes.littleSliderItem}>
                <div className={classes.littleSlikName}>Impresso</div>
                <div className={classes.littleSlikTitle}>Some text</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <span className={classes.sectionName}>Industry:</span>
                    <span
                      className={classes.section}
                      style={{ paddingLeft: "10px" }}
                    >
                      Lorem impsum
                    </span>
                  </div>
                  <div>
                    <span className={classes.sectionName}>Technology:</span>
                    <div className={classes.littleTagsBlock}>
                      <div className={classes.littleTags}>
                        <div
                          className={classes.section}
                          onClick={() => this.handleClick(0)}
                        >
                          Description
                        </div>
                        <div
                          className={classes.section}
                          onClick={() => this.handleClick(1)}
                        >
                          Delivered value
                        </div>
                        <div
                          className={classes.section}
                          onClick={() => this.handleClick(2)}
                        >
                          Teach Stack
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {tabs.map((tab, index) => (
                  <p
                    key={tab.id}
                    style={{
                      marginLeft: "0",
                      display: showTab === index ? "block" : "none"
                    }}
                    className={classes.section}
                  >
                    {tab.value}
                  </p>
                ))}
              </div>
              <div className={classes.littleSliderItem}>
                <div className={classes.littleSlikName}>Impresso</div>
                <div className={classes.littleSlikTitle}>Some text</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <span className={classes.sectionName}>Industry:</span>
                    <span
                      className={classes.section}
                      style={{ paddingLeft: "10px" }}
                    >
                      Lorem impsum
                    </span>
                  </div>
                  <div>
                    <span className={classes.sectionName}>Technology:</span>
                    <div className={classes.littleTagsBlock}>
                      <div className={classes.littleTags}>
                        <div
                          className={classes.section}
                          onClick={() => this.handleClick(0)}
                        >
                          Description
                        </div>
                        <div
                          className={classes.section}
                          onClick={() => this.handleClick(1)}
                        >
                          Delivered value
                        </div>
                        <div
                          className={classes.section}
                          onClick={() => this.handleClick(2)}
                        >
                          Teach Stack
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {tabs.map((tab, index) => (
                  <p
                    key={tab.id}
                    style={{
                      marginLeft: "0",
                      display: showTab === index ? "block" : "none"
                    }}
                    className={classes.section}
                  >
                    {tab.value}
                  </p>
                ))}
              </div>
            </Slider>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(Portfolio);
