import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

const styles = theme => ({
  triangle: {
    position: "relative",
    textAlign: "left",
    "&:before, &:after": {
      content: "''",
      position: "absolute"
    },
    "&, &:before, &:after": {
      width: "1.5em",
      height: "1.5em",
      border: "solid #7d0cda",
      borderWidth: "3px 3px 0 0",
      borderTopRightRadius: "30%"
    },

    "&": {
      transform: "rotate(-60deg) skewX(-30deg) scale(1,.866) translate(105%)"
    },
    "&:before": {
      transform:
        "rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(11.5%,-41%)"
    },
    "&:after": {
      transform:
        "rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(41%, -0.5%)"
    }
  },
  parent: {
    width: "55px",
    height: "55px",
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)"
  },
  number: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "20px",
    color: "#7d0cda",
    fontWeight: 600
  }
});

export default injectSheet(styles)(({ classes, parentClass, children }) => {
  return (
    <div className={classNames(classes.parent, parentClass)}>
      <span className={classes.number}>{children}</span>
      <div className={classes.triangle} />
    </div>
  );
});
