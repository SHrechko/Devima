import React, { Component } from "react";
import ReactDOM from "react-dom";
import injectSheet from "react-jss";
import contacts from "../../assets/contacts.svg";
import SendIcon from "../../assets/sendIcon.svg";
import ImgSuccess from "../../assets/imgSuccess.svg";
import attach from "../../assets/attach.svg";
import Link from "../link/link";
import FB from "../../assets/fb.svg";
import UP from "../../assets/up.svg";
import LN from "../../assets/ln.svg";
import axios from "axios";

const styles = theme => ({
  contacts: {
    display: "inline-block",
    width: "100%",
    position: "relative",
    background: `url(${contacts})`,
    backgroundPositionX: "center",
    backgroundPositionY: "top",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    backgroundSize: "cover",
    boxSizing: "boder-box"
  },
  title: {
    display: "inline-block",
    margin: "51px 0 25px 71px",
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
  contactUsBlock: {
    position: "relative",
    width: "592px",
    height: "496px",
    margin: "0 auto 100px",
    borderRadius: "6px",
    boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)",
    backgroundColor: "#ffffff",
    "@media (min-width: 768px) and (max-width: 1024px)": {
      marginBottom: "152px"
    },
    "@media (max-width: 767px)": {
      width: "auto",
      marginBottom: "205px",
      marginLeft: "24px",
      marginRight: "24px"
    }
  },
  formContactUs: {
    transition: "1s",
    opacity: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(farthest-corner at 592px 0px, #5535b8 0% 11.7%, #ffffff 12% 100%)"
  },
  textFieldBlock: {
    position: "relative",
    boxSizing: "border-box",
    height: "45px",
    width: "384px",
    "@media (max-width: 767px)": {
      width: "244px"
    },
    "&:not(:nth-child(3))": {
      margin: "0 0 30px"
    },
    "&:first-child": {
      marginTop: "60px"
    },
    "&:nth-child(3)": {
      height: "160px",
      "& > textarea": {
        height: "160px",
        resize: "none"
      }
    },
    "& > input, & > textarea": {
      position: "absolute",
      margin: "0",
      top: "0",
      left: "0",
      padding: "12px 20px",
      boxSizing: "border-box",
      width: "100%",
      boxShadow: "none",
      outline: "none",
      border: "2px solid #5535b8",
      zIndex: "700",
      backgroundColor: "rgba(0,0,0, 0)",
      "&:focus ~ label, &:valid ~ label": {
        top: "4px",
        fontSize: "12px"
      },
      "&:invalid:not(:focus):not(:placeholder-shown), &:invalid:focus:not(:placeholder-shown)": {
        // Покажем напоминание
        borderColor: "red",
        "& + label": {
          top: "4px",
          fontSize: "12px",
          color: "red"
          // opacity: 0
        }
      }
    },
    "& > label": {
      transition: ".5s",
      color: "#5535b8",
      fontSize: "16px",
      fontWeight: "400",
      position: "absolute",
      left: "20px",
      top: "12px"
    }
  },
  sendButton: {
    outline: "none",
    width: "175px",
    height: "60px",
    backgroundColor: "#56d7a5",
    borderRadius: "5px",
    border: "1px solid white",
    margin: `${theme.default.space * 10}px auto 10px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "50px",
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.27)",
    background:
      "linear-gradient(to right, #9edbc3 0%, #56d7a5 51%, #95dbbf 100%)",
    transition: "0.5s",
    backgroundSize: "200% auto",
    "& > span": {
      color: "#ffffff"
    },
    "&:active": {
      boxShadow: "none"
    },
    "&:hover": {
      backgroundPosition: "right center"
    }
  },
  sendIcon: {
    backgroundImage: `url(${SendIcon})`,
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    boxSizing: "boder-box",
    width: "19px",
    height: "15px",
    marginLeft: theme.default.space * 4
  },
  success: {
    width: "100%",
    heaight: "100%",
    display: "none",
    transition: "1s",
    opacity: "0"
  },
  successHead: {
    backgroundColor: "#5535b8",
    height: "334px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  successOval: {
    margin: "44px 0 22px",
    position: "relative",
    width: "116px",
    height: "116px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    opacity: "0.15",
    "& + img": {
      position: "absolute",
      top: "102px",
      width: "76px",
      height: "76px",
      transform: "translate(0%, -50%)"
    }
  },
  successMessage: {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "500",
    margin: "0",
    "& + sub": {
      color: "#ffffff",
      fontSize: "18px",
      fontWeight: "400",
      margin: "0"
    }
  },
  attachBlock: {
    width: "384px",
    height: "17px",
    "@media (max-width: 767px)": {
      width: "244px"
    }
  },
  attach: {
    width: "max-content",
    height: "max-content",
    paddingTop: "10px",
    position: "relative",
    display: "inline",
    float: "right",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > img": {
      width: "16px",
      height: "17px"
    },
    "& > span": {
      color: "#5535b8",
      fontSize: "12px",
      fontWeight: "400"
    }
  },
  footer: {
    position: "absolute",
    height: "max-content",
    bottom: "17px",
    left: "70px",
    right: "70px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& >*": {
      color: "#ffffff"
    },
    "@media (max-width: 767px)": {
      height: "96px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      left: "24px",
      right: "24px",
      bottom: "0"
    }
  },
  deveema: {
    fontSize: "24px",
    fontWeight: "400",
    display: "block",
    "@media (min-width: 768px) and (max-width: 1024px)": {
      position: "absolute",
      top: "-25px"
    },
    "@media (max-width: 767px)": {
      marginTop: "19px"
    }
  },
  deveemaInf: {
    width: "max-content",
    margin: "0 auto",
    fontSize: "12px",
    fontWeight: "400",
    "@media (min-width: 768px) and (max-width: 1024px)": {
      margin: "0 69px 0 0",
      fontSize: "10px"
    },
    "@media (max-width: 767px)": {
      marginLeft: "0",
      marginTop: "9px",
      fontSize: "10px"
    }
  },
  fb: {
    backgroundImage: `url(${FB})`
  },
  up: {
    backgroundImage: `url(${UP})`
  },
  in: {
    backgroundImage: `url(${LN})`
  },
  links: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    "& > div": {
      cursor: "pointer",
      backgroundPositionX: "center",
      backgroundRepeatX: "no-repeat",
      backgroundRepeatY: "no-repeat",
      boxSizing: "boder-box",
      width: "22px",
      height: "18px",
      marginRight: "15px",
      "@media (max-width: 767px)": {
        margin: "auto"
      }
    },
    "@media (max-width: 767px)": {
      position: "absolute",
      left: "0",
      right: "0",
      height: "82px",
      top: "-82px",
      backgroundColor: "#633ed8",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  goHome: {
    position: "relative",
    width: "max-content",
    height: "max-content",
    "& > span:last-child": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    "@media (min-width: 768px) and (max-width: 1024px)": {
      marginLeft: "auto"
    },
    "@media (max-width: 767px)": {
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translate(0%, -50%)"
    }
  },
  goHomeLink: {
    display: "block",
    width: "44px",
    height: "40px",
    backgroundColor: "#ffffff",
    opacity: "0.21"
  },
  attachedFileName: {
    color: "#5535b8",
    margin: "6px 6px 0 0",
    display: "inline-block",
    width: "max-content",
    width: "max-content",
    float: "right"
  }
});

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      fileName: ""
    };
  }
  submitForm = e => {
    e.preventDefault();
    console.log(this.state.fileName);
    const values = {
      name: this.nameValue.value,
      email: this.emailValue.value,
      message: this.messageValue.value,
      attach: this.attachValue.value,
      attachedFileName: this.state.fileName
    };
    axios
      .post("/send-email", values)
      .then(res => {
        if (res.data.success) {
          ReactDOM.findDOMNode(this._formForSubmit).style.display = "none";
          ReactDOM.findDOMNode(this.beforeSubmit).style.display =
            "inline-block";
          setTimeout(() => {
            this.setState({
              showForm: false
            });
          });
        }
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  onChange = e => {
    switch (e.target.name) {
      case "attach":
        if (e.target.files.length > 0) {
          // Accessed .name from file
          let names = "";
          for (let i = 0; i < e.target.files.length; i++) {
            names += e.target.files[i].name;
            if (i + 1 !== e.target.files.length) {
              names += ", ";
            }
          }
          this.setState({ fileName: names });
        }
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  backToHome = e => {
    ReactDOM.findDOMNode(this.beforeSubmit).style.display = "none";
    ReactDOM.findDOMNode(this._formForSubmit).style.display = "flex";
    ReactDOM.findDOMNode(this.nameValue).value = "";
    ReactDOM.findDOMNode(this.emailValue).value = "";
    ReactDOM.findDOMNode(this.messageValue).value = "";
    ReactDOM.findDOMNode(this.attachValue).value = "";
    setTimeout(() => {
      this.setState({
        showForm: true,
        fileName: ""
      });
    }, 0);
  };

  render() {
    const { showForm, fileName } = this.state;
    const { classes } = this.props;
    const file = fileName ? (
      <span className={classes.attachedFileName}>{fileName}</span>
    ) : (
      ""
    );
    return (
      <div id="contacts" className={classes.contacts}>
        <h1 className={classes.title}>Contact us</h1>
        <div className={classes.contactUsBlock}>
          <form
            style={{ opacity: showForm && "1" }}
            ref={node => (this._formForSubmit = node)}
            onSubmit={this.submitForm}
            className={classes.formContactUs}
          >
            <div className={classes.textFieldBlock}>
              <input
                ref={node => (this.nameValue = node)}
                type="text"
                placeholder=" "
                name="name"
                required="required"
              />
              <label>Your Name</label>
            </div>
            <div className={classes.textFieldBlock}>
              <input
                type="email"
                ref={node => (this.emailValue = node)}
                placeholder=" "
                name="email"
                required="required"
              />
              <label>Your E-mail</label>
            </div>
            <div className={classes.textFieldBlock}>
              <textarea
                type="text"
                placeholder=" "
                ref={node => (this.messageValue = node)}
                name="message"
                required="required"
              />
              <label>How can we help you?</label>
            </div>
            <div className={classes.attachBlock}>
              <div className={classes.attach}>
                <input
                  type="file"
                  name="attach"
                  onChange={this.onChange.bind(this)}
                  ref={node => (this.attachValue = node)}
                  multiple
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: "1000",
                    opacity: "0",
                    cursor: "pointer"
                  }}
                />
                <img src={attach} />
                <span>Attach a file</span>
              </div>
              <label htmlFor="file">{file}</label>
            </div>
            <button type="submit" className={classes.sendButton}>
              <span>Send</span>
              <span className={classes.sendIcon} />
            </button>
          </form>
          <div
            ref={node => (this.beforeSubmit = node)}
            style={{ opacity: !showForm && "1" }}
            className={classes.success}
          >
            <div className={classes.successHead}>
              <div className={classes.successOval} />
              <img src={ImgSuccess} />
              <span className={classes.successMessage}>
                Thanks for you message.
              </span>
              <sub>Our manager contact you shortly</sub>
            </div>
            <button onClick={this.backToHome} className={classes.sendButton}>
              <span>Back to home</span>
            </button>
          </div>
        </div>
        <div className={classes.footer}>
          <span className={classes.deveema}>Devima</span>
          <span className={classes.deveemaInf}>
            © 2018 Deveema Solutions. All rights reserved
          </span>
          <div className={classes.links}>
            <div className={classes.fb} />
            <div className={classes.up} />
            <div className={classes.in} />
          </div>
          <div className={classes.goHome}>
            <Link className={classes.goHomeLink} href="#root" />
            <Link href="#root">^</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Contacts);
