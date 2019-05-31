import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import injectSheet from "react-jss";
import classNames from "classnames";
import FB from "../../assets/FbGray.svg";
import IN from "../../assets/InGray.svg";
import OurLeadership from "../../assets/OurLeadership.svg";

import Slider from "react-slick";

// import Carousel from "./SlikCarousel";

const styles = theme => ({
  title: {
    margin: "29px 0 0 71px",
    color: "#5535b8",
    fontSize: "55px",
    fontWeight: "400",
    "@media (max-width: 1023)": {
      fontSize: "45px"
    },
    "@media (max-width: 767px)": {
      fontSize: "25px",
      marginLeft: "25px"
    }
  },
  ourLeadershipTitle: {
    marginTop: "75px",
    marginBottom: "30px",
    "@media (max-width: 1023)": {
      fontSize: "45px"
    },
    "@media (max-width: 767px)": {
      fontSize: "25px"
    }
  },
  carousel: {
    marginTop: "62px",
    marginBottom: "75px",
    minWidth: "240px",
    "@media (max-width: 767px)": {
      margin: "52px auto 65px"
    },
    "& > div > div": {
      position: "relative",
      minHeight: "280px",
      height: "100%",
      "& > div > div": {
        position: "relative",
        height: "100%",
        margin: "0 20px",
        "@media (max-width: 767px)": {
          margin: "0 15px",
          minWidth: "240px"
        }
      }
    }
  },
  dotsClass: {
    width: "100%",
    "& > li.slick-active button:before": {
      opacity: 0.9,
      color: "#5535b8"
    },
    "& > li > button::before": {
      fontSize: "20px",
      color: "#e9e9e9",
      opacity: 0.75
    }
  },
  photo: {
    backgraund: "gray",
    width: "80px",
    height: "47px",
    marginRight: "9px"
  },
  carouselBlock: {
    outline: "none",
    minHeight: "100%",
    height: "100%",
    position: "relative",
    boxSizing: "border-box"
  },
  carouselItem: {
    margin: "10px 0 30px",
    padding: "25px 16px 0",
    height: "calc(100% - 65px)",
    boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)",
    overflow: "hidden",
    "@media (max-width: 767px)": {
      minWidth: "240px",
      boxShadow: "3px 10px 15px rgba(41, 26, 204, 0.12)"
    },
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    "&::after,::before": {
      clear: "both",
      boxSizing: "border-box"
    },
    "& > div:first-child": {
      display: "flex",
      flexDirection: "row"
    }
  },
  headingText: {
    "& > div:first-child": {
      color: "#4a4a4a",
      fontSize: "22px",
      fontWeight: "400",
      fontHeight: "24px",
      letterSpacing: "-0.83px",
      lineHeight: "29px"
    },
    "& > div:last-child": {
      marginTop: "5px",
      color: "#4a4a4a",
      fontSize: "16px",
      fontWeight: "400",
      letterSpacing: "-0.6px",
      lineHeight: "24px",
      paddingRight: "10px"
    }
  },
  bodyText: {
    width: "100%",
    color: "#9b9b9b",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px"
  },
  ourLeadership: {
    height: "477px",
    background: `url(${OurLeadership})`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& > div:not(:last-child)": {
      marginRight: "27px"
    }
  },
  testimonialsBackground: {
    position: "relative",
    backgroundPositionY: "top",
    backgroundPositionX: "center",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    boxSizing: "boder-box",
    width: "100%",
    backgroundSize: "cover"
  },
  ourLeadershipItem: {
    width: "280px",
    minHeight: "256px",
    boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)",
    borderRadius: "6px",
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    background:
      "linear-gradient(to bottom, #5535b8 0%, #d8d0ef 34%, #cec7ec 34%, white 34%, white 87%)",
    "@media (min-width: 768px) and (max-width: 1024px)": {
      minWidth: "176px",
      margin: "0 20px"
    }
  },
  centerLeaders: {
    marginTop: "-96px"
  },
  leadershipImg: {
    marginTop: "26px",
    border: "2px solid #ffffff",
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.15)",
    borderRadius: "50%",
    width: "108px",
    height: "108px"
  },
  leadershipTitle: {
    marginTop: "14px",
    color: "#4a4a4a",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "900"
  },
  leadershipSub: {
    marginTop: "0",
    color: "#5535b8",
    fontFamily: "Roboto Medium",
    fontSize: "14px",
    fontWeight: "500"
  },
  linkIconBlock: {
    marginTop: "25px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "& > a": {
      width: "18px",
      height: "18px",
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      backgroundRepeatX: "no-repeat",
      backgroundRepeatY: "no-repeat",
      backgraund: "100% 100%",
      boxSizing: "boder-box",
      "&:first-child": {
        marginRight: "50px"
      }
    }
  },
  FbIcon: { background: `url(${FB})` },
  InIcon: { background: `url(${IN})` }
});

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    const { showBlock } = this.state;
    var settingsLeadership = {
      dotsClass: classNames("slick-dots", classes.dotsClass),
      adaptiveHeight: true,
      className: classes.carousel,
      centerMode: true,
      centerPadding: "20%",
      arrows: false,
      dots: true,
      // autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 449,
          settings: {
            centerPadding: 0
          }
        }
      ]
    };
    var settings = {
      dotsClass: classNames("slick-dots", classes.dotsClass),
      adaptiveHeight: true,
      className: classes.carousel,
      centerMode: true,
      arrows: false,
      dots: true,
      // autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: 0,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "25%",
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "0",
            dots: true
          }
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 0,
            dots: true
          }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div id="testimonials">
        <div className={classes.title}>Testimonials</div>
        <Slider {...settings}>
          <div className={classes.carouselBlock}>
            <div className={classes.carouselItem}>
              <div>
                <img src="#" className={classes.photo} alt="Photo" />
                <div className={classes.headingText}>
                  <div>Dean Payne</div>
                  <div>Digital Project Manager at African Safari Group</div>
                </div>
              </div>
              <p className={classes.bodyText}>
                Devima always does fantastic work for us. Their professionalism
                and flexibility were the key factors in the success of our
                project along with great communication and delivery.
              </p>
            </div>
          </div>
          <div className={classes.carouselBlock}>
            <div className={classes.carouselItem}>
              <div>
                <img src="#" className={classes.photo} alt="Photo" />
                <div className={classes.headingText}>
                  <div>Nerijus Mikolaitis</div>
                  <div>Key Account Manager at Gomingo.com</div>
                </div>
              </div>
              <p className={classes.bodyText}>
                Exceptional team with high quality and commitment. Once again
                thanks for being on this project and helping deliver on time and
                in a professional manner.
              </p>
            </div>
          </div>
          <div className={classes.carouselBlock}>
            <div className={classes.carouselItem}>
              <div>
                <img src="#" className={classes.photo} alt="Photo" />
                <div className={classes.headingText}>
                  <div>Thiago Custódio</div>
                  <div>CEO & Partner. MNEO Ensino e Consultoria</div>
                </div>
              </div>
              <p className={classes.bodyText}>
                Devima is one of the best team we have ever work with. Their
                analysis skills are at a high level. Their work always contained
                the extra step that made the results outstanding.
              </p>
            </div>
          </div>
          <div className={classes.carouselBlock}>
            <div className={classes.carouselItem}>
              <div>
                <img src="#" className={classes.photo} alt="Photo" />
                <div className={classes.headingText}>
                  <div>David Bollt</div>
                  <div>Editor in Chief at Model Society Magazine</div>
                </div>
              </div>
              <p className={classes.bodyText}>
                The Devima was easy to deal with from start to finish and quick
                to respond to any questions we had. We would have no hesitation
                in working with them again.
              </p>
            </div>
          </div>
        </Slider>
        <div className={classNames(classes.title, classes.ourLeadershipTitle)}>
          Our leadership team
        </div>
        {showBlock ? (
          <div
            className={classNames(
              classes.ourLeadership,
              classes.testimonialsBackground
            )}
          >
            <div className={classes.ourLeadershipItem}>
              <img
                src=""
                className={classes.leadershipImg}
                alt="Leadership image"
              />
              <div className={classes.leadershipTitle}> title</div>
              <div className={classes.leadershipSub}>sub</div>
              <div className={classes.linkIconBlock}>
                <a href="#" className={classes.FbIcon} />
                <a href="#" className={classes.InIcon} />
              </div>
            </div>
            <div
              className={classNames(
                classes.ourLeadershipItem,
                classes.centerLeaders
              )}
            >
              <img
                src=""
                className={classes.leadershipImg}
                alt="Leadership image"
              />
              <div className={classes.leadershipTitle}> title</div>
              <div className={classes.leadershipSub}>sub</div>
              <div className={classes.linkIconBlock}>
                <a href="#" className={classes.FbIcon} />
                <a href="#" className={classes.InIcon} />
              </div>
            </div>
            <div className={classes.ourLeadershipItem}>
              <img
                src=""
                className={classes.leadershipImg}
                alt="Leadership image"
              />
              <div className={classes.leadershipTitle}> title</div>
              <div className={classes.leadershipSub}>sub</div>
              <div className={classes.linkIconBlock}>
                <a href="#" className={classes.FbIcon} />
                <a href="#" className={classes.InIcon} />
              </div>
            </div>
          </div>
        ) : (
          <Slider {...settingsLeadership}>
            <div className={classes.ourLeadershipItem}>
              <img
                src=""
                className={classes.leadershipImg}
                alt="Leadership image"
              />
              <div className={classes.leadershipTitle}> title</div>
              <div className={classes.leadershipSub}>sub</div>
              <div className={classes.linkIconBlock}>
                <a href="#" className={classes.FbIcon} />
                <a href="#" className={classes.InIcon} />
              </div>
            </div>
            <div className={classes.ourLeadershipItem}>
              <img
                src=""
                className={classes.leadershipImg}
                alt="Leadership image"
              />
              <div className={classes.leadershipTitle}> title</div>
              <div className={classes.leadershipSub}>sub</div>
              <div className={classes.linkIconBlock}>
                <a href="#" className={classes.FbIcon} />
                <a href="#" className={classes.InIcon} />
              </div>
            </div>
          </Slider>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(Testimonials);
