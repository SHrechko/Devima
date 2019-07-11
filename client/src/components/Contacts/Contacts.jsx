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
import ScrollUp from "../../assets/Scrollup.svg";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  contacts: {
    paddingBottom: "1px",
    position: "relative",
    background: `url(${contacts})`,
    backgroundPositionX: "center",
    backgroundPositionY: "bottom",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    backgroundSize: "100%",
    boxSizing: "boder-box",
    "@media (max-width: 959px)": {
      backgroundSize: "cover"
    }
  },
  title: {
    display: "inline-block",
    margin: 0,
    padding: "50px 0",
    color: "#5535b8",
    fontSize: "55px",
    fontWeight: "400",
    "@media (max-width: 959px)": {
      fontSize: "45px"
    },
    "@media (max-width: 599px)": {
      padding: "29px 0",
      fontSize: "25px"
    }
  },
  contactUsBlock: {
    paddingBottom: "100px",
    "&.MuiContainer-root": {
      "@media (max-width: 599px)": {
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      paddingBottom: "152px"
    },
    "@media (max-width: 599px)": {
      paddingBottom: "205px"
    }
  },
  formContactUs: {
    transition: "1s",
    opacity: "0",
    width: "100%",
    height: "100%",
    paddingTop: "40px",
    paddingBottom: "40px",
    "& > *": {
      width: "100%"
    }
  },
  textFieldBlock: {
    "& .MuiInputBase-root": {
      opacity: 0.9
    }
  },
  sendButton: {
    outline: "none",
    width: "175px",
    height: "60px",
    backgroundColor: "#56d7a5",
    borderRadius: "5px",
    border: "1px solid white",
    margin: `${theme.default.space * 6}px auto`,
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
    height: "464px",
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
    "@media (max-width: 599px)": {
      height: "96px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      left: "24px",
      right: "24px",
      bottom: "0"
    }
  },
  devima: {
    fontSize: "24px",
    fontWeight: "400",
    display: "block",
    margin: 0,
    "@media (min-width: 600px) and (max-width: 959px)": {
      position: "absolute",
      top: "-25px"
    },
    "@media (max-width: 599px)": {
      marginTop: "19px"
    }
  },
  devimaInf: {
    width: "max-content",
    margin: "0 auto",
    fontSize: "12px",
    fontWeight: "400",
    "@media (min-width: 600px) and (max-width: 959px)": {
      margin: "0 69px 0 0",
      fontSize: "10px"
    },
    "@media (max-width: 599px)": {
      marginLeft: "0",
      marginTop: "9px",
      fontSize: "10px"
    }
  },
  links: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    listStyleType: "none",
    padding: 0,
    margin: 0,
    "& > li": {
      boxSizing: "border-box",
      marginRight: "15px",
      "@media (max-width: 599px)": {
        margin: "auto"
      }
    },
    "@media (max-width: 599px)": {
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
    "@media (min-width: 600px) and (max-width: 959px)": {
      marginLeft: "auto"
    },
    "@media (max-width: 599px)": {
      position: "absolute",
      right: 0,
      top: "10%"
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
  },
  paper: {
    position: "relative",
    boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)",
    height: "100%",
    background:
      "radial-gradient(farthest-corner at 592px 0px, #5535b8 0% 11.7%, #ffffff 12% 100%)",
    "&.MuiPaper-rounded": {
      borderRadius: "6px"
    },
    "&.MuiPaper-elevation1": {
      boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)"
    }
  },
  showForm: {
    opacity: "1"
  }
});

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      fileName: "",
      name: null,
      email: null,
      message: null,
      invalidEmail: false
    };
  }
  submitForm = e => {
    e.preventDefault();
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
        fileName: "",
        name: null,
        email: null,
        message: null,
        invalidEmail: false
      });
    }, 0);
  };

  emailVlidation = e => {
    if (this.state.email === null && e.target.value === "") {
      return;
    } else if (
      e.target.value !== "" &&
      /^([a-zA-Z0-9_]+@[a-zA-Z0-9]+.[A-z]+)$/.test(e.target.value)
    ) {
      this.setState({ email: e.target.value, invalidEmail: false });
    } else {
      this.setState({ email: e.target.value, invalidEmail: true });
    }
  };

  render() {
    const {
      showForm,
      fileName,
      name,
      email,
      message,
      invalidEmail
    } = this.state;
    const { classes } = this.props;
    const file = fileName ? (
      <span className={classes.attachedFileName}>{fileName}</span>
    ) : (
      ""
    );
    let duration = 1000;
    return (
      <React.Fragment>
        <Container
          maxWidth={false}
          component={"section"}
          id="contacts"
          className={classes.contacts}
        >
          <Container style={{ position: "relative" }}>
            <h2 className={classes.title}>Contact us</h2>
            <Container maxWidth={"sm"} className={classes.contactUsBlock}>
              <Paper className={classes.paper}>
                <Fade in={showForm} timeout={duration}>
                  <Grid
                    container
                    alignItems={"center"}
                    direction={"column"}
                    component={"form"}
                    ref={node => (this._formForSubmit = node)}
                    onSubmit={this.submitForm}
                    className={classes.formContactUs}
                  >
                    <Grid
                      item
                      xs={11}
                      sm={8}
                      className={classes.textFieldBlock}
                    >
                      <TextField
                        required
                        label={"Your Name"}
                        onChange={event =>
                          this.setState({ name: event.target.value })
                        }
                        inputRef={node => (this.nameValue = node)}
                        inputProps={{
                          name: "name"
                        }}
                        variant="outlined"
                        margin="dense"
                        fullWidth={true}
                        error={name === ""}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={11}
                      sm={8}
                      className={classes.textFieldBlock}
                    >
                      <TextField
                        required
                        label={"Your E-mail"}
                        onBlur={this.emailVlidation.bind(this)}
                        onFocus={() =>
                          this.setState({
                            invalidEmail: false
                          })
                        }
                        inputRef={node => (this.emailValue = node)}
                        inputProps={{ name: "email" }}
                        variant="outlined"
                        margin="dense"
                        type={"email"}
                        fullWidth={true}
                        error={invalidEmail}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={11}
                      sm={8}
                      className={classes.textFieldBlock}
                    >
                      <TextField
                        required
                        label={"How can we help you?"}
                        onChange={event =>
                          this.setState({ message: event.target.value })
                        }
                        inputRef={node => (this.messageValue = node)}
                        inputProps={{ name: "message" }}
                        variant="outlined"
                        margin="normal"
                        multiline
                        rowsMax="4"
                        rows="4"
                        fullWidth={true}
                        error={message === ""}
                      />
                    </Grid>
                    <Grid item xs={11} sm={8} className={classes.attachBlock}>
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
                    </Grid>
                    <Grid item xs={11} sm={8}>
                      <button type="submit" className={classes.sendButton}>
                        <span>Send</span>
                        <span className={classes.sendIcon} />
                      </button>
                    </Grid>
                  </Grid>
                </Fade>
                <Fade in={!showForm} timeout={duration}>
                  <div
                    ref={node => (this.beforeSubmit = node)}
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
                    <button
                      onClick={this.backToHome}
                      className={classes.sendButton}
                    >
                      <span>Back to home</span>
                    </button>
                  </div>
                </Fade>
              </Paper>
            </Container>
            <footer className={classes.footer}>
              <h3 className={classes.devima}>Devima</h3>
              <p className={classes.devimaInf}>
                © 2018 Devima Solutions. All rights reserved
              </p>
              <ul className={classes.links}>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/DevimaSolutions"
                  >
                    <img src={FB} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.upwork.com/o/companies/_~012ce16d31fde250a8/"
                  >
                    <img src={UP} style={{ marginTop: "5px" }} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/devima-solutions/"
                  >
                    <img src={LN} />
                  </a>
                </li>
              </ul>
              <div className={classes.goHome}>
                <Link className={classes.goHomeLink} href="#root" />
                <Link href="#root">
                  <img src={ScrollUp} />
                </Link>
              </div>
            </footer>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(Contacts);
