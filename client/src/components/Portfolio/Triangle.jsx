import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

const styles = theme => ({
  triangle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    "&": {
      transform: "translate(-40%, -50%) rotate(-60deg)"
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
      <svg width="55" height="55" className={classes.triangle}>
        <polygon
          points="27.5 3,52 45.8,3 45.8"
          fill="rgba(0, 0, 0, 0)"
          stroke="#7d0cda"
          stroke-width="3"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
});
