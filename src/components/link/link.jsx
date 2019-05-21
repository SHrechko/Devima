import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

const styles = theme => ({
  linkClass: {
    width: "max-content",
    maxHeight: "90px",
    fontSize: "16px",
    cursor: "pointer"
  }
});
const scrollById = e => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href").replace("#", "");
  const element = document.getElementById(id);
  const heightOfHeader = document.getElementById("header").offsetHeight;
  const destination = element.offsetTop - heightOfHeader;
  console.log(heightOfHeader);
  setTimeout(function() {
    window.scroll({ top: destination, behavior: "smooth" });
  }, 10);

  return false;
};
const Link = injectSheet(styles)(({ classes, href, className, children }) => (
  <span
    href={href}
    onClick={scrollById.bind(this)}
    className={classNames(classes.linkClass, className)}
  >
    {children}
  </span>
));

export default injectSheet(styles)(Link);
