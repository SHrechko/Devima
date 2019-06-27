import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import injectSheet from "react-jss";
import classNames from "classnames";
import UP from "../../assets/upwork_static.png";
import UPActive from "../../assets/upwork_active.png";
import OurLeadership from "../../assets/OurLeadership.svg";
import Sergiy from "../../assets/Sergiy.png";
import Maksym from "../../assets/Maksym.png";
import Andriy from "../../assets/Andriy.png";
import David from "../../assets/David.png";
import Dean from "../../assets/Dean.png";
import Nerijus from "../../assets/Nerijus.png";
import Thiago from "../../assets/Thiago.png";

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
    height: "60px",
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
    padding: "25px 16px 5px",
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
    fontSize: "16px",
    fontWeight: "900"
  },
  leadershipSub: {
    marginTop: "0",
    color: "#5535b8",
    fontSize: "14px",
    fontWeight: "500"
  },
  linkIconBlock: {
    marginTop: "25px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "& > a": {
      width: "20px",
      height: "20px",
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
  UpIcon: {
    backgroundImage: `url(${UP})`,
    "&:hover": {
      backgroundImage: `url(${UPActive})`
    }
  },
  fab: {
    color: "#9b9b9b",
    "&:hover": {
      color: "#5535b8"
    }
  }
});

const leaders = [
  {
    id: 0,
    name: "Sergiy Kushnir",
    sub: "Tech Lead, co-founder",
    img: Sergiy,
    email: "skushnir.lviv@gmail.com",
    service: "https://www.linkedin.com/in/skushnirlviv/"
  },
  {
    id: 1,
    name: "Maksym Fetych",
    sub: "Design Lead, co-founder",
    img: Maksym,
    email: "andriy.martynyshyn@gmail.com",
    service: "https://www.upwork.com/fl/maksym"
  },
  {
    id: 2,
    name: "Andrew Martynyshyn",
    sub: "Tech Lead, Consultant",
    img: Andriy,
    email: "mak.sym0202@gmail.com",
    service: "https://www.linkedin.com/in/andriym/"
  }
];

const clients = [
  {
    id: 0,
    name: "Dean Payne",
    sub: "Digital Project Manager at African Safari Group",
    txt:
      "Devima always does fantastic work for us. Their professionalism" +
      "and flexibility were the key factors in the success of our" +
      "project along with great communication and delivery.",
    img: Dean
  },
  {
    id: 1,
    name: "Nerijus Mikolaitis",
    sub: "Key Account Manager at Gomingo.com",
    txt:
      "Exceptional team with high quality and commitment. Once again" +
      "thanks for being on this project and helping deliver on time and" +
      "in a professional manner.",
    img: Nerijus
  },
  {
    id: 2,
    name: "Thiago Custódio",
    sub: "CEO & Partner. MNEO Ensino e Consultoria",
    txt:
      "Devima is one of the best team we have ever work with. Their" +
      "analysis skills are at a high level. Their work always contained" +
      "the extra step that made the results outstanding.",
    img: Thiago
  },
  {
    id: 3,
    name: "David Bollt",
    sub: "Editor in Chief at Model Society Magazine",
    txt:
      "The Devima was easy to deal with from start to finish and quick" +
      "to respond to any questions we had. We would have no hesitation" +
      "in working with them again.",
    img: David
  }
];

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlock: window.innerWidth >= 768
    };
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
          {clients.map(client => (
            <div id={client.id} className={classes.carouselBlock}>
              <div className={classes.carouselItem}>
                <div>
                  <img
                    src={client.img}
                    className={classes.photo}
                    alt={client.name}
                  />
                  <div className={classes.headingText}>
                    <div>{client.name}</div>
                    <div>{client.sub}</div>
                  </div>
                </div>
                <p className={classes.bodyText}>{client.txt}</p>
              </div>
            </div>
          ))}
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
            {leaders.map((leader, index) => (
              <div
                key={leader.id}
                className={classNames(classes.ourLeadershipItem, {
                  [classes.centerLeaders]: index === 1
                })}
              >
                <img
                  src={leader.img}
                  className={classes.leadershipImg}
                  alt={leader.name}
                />
                <div className={classes.leadershipTitle}>{leader.name}</div>
                <div className={classes.leadershipSub}>{leader.sub}</div>
                <div className={classes.linkIconBlock}>
                  <a href={`mailto:${leader.email}`}>
                    <i
                      className={classNames(
                        "fab",
                        "fa",
                        "fa-envelope",
                        classes.fab
                      )}
                    />
                  </a>

                  {index !== 1 ? (
                    <a href={leader.service} target="__blank">
                      <i
                        className={classNames(
                          "fab",
                          "fa-linkedin-in",
                          classes.fab
                        )}
                      />
                    </a>
                  ) : (
                    <a
                      href={leader.service}
                      target="__blank"
                      className={classes.UpIcon}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Slider {...settingsLeadership}>
            {leaders.map((leader, index) => (
              <div key={leader.id} className={classes.ourLeadershipItem}>
                <img
                  src={leader.img}
                  className={classes.leadershipImg}
                  alt={leader.name}
                />
                <div className={classes.leadershipTitle}>{leader.name}</div>
                <div className={classes.leadershipSub}>{leader.sub}</div>
                <div className={classes.linkIconBlock}>
                  <a href={`mailto:${leader.email}`}>
                    <i
                      className={classNames(
                        "fab",
                        "fa",
                        "fa-envelope",
                        classes.fab
                      )}
                    />
                  </a>

                  {index !== 1 ? (
                    <a href={leader.service} target="__blank">
                      <i
                        className={classNames(
                          "fab",
                          "fa-linkedin-in",
                          classes.fab
                        )}
                      />
                    </a>
                  ) : (
                    <a
                      href={leader.service}
                      target="__blank"
                      className={classes.UpIcon}
                    />
                  )}
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(Testimonials);
