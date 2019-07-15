export default theme => ({
  flexRow: {
    paddingTop: "70px"
  },
  mobileCardBlock: {
    width: "100%",
    minWidth: "270px",
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > div": {
      "@media (min-width: 768px)": {
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    "@media (min-width: 768px)": {
      width: "45%",
      "&:nth-child(2n)": {
        marginLeft: "10%"
      }
    }
  },
  subtitle: {
    minHeight: "96px",
    margin: "120px 0 30px",
    color: "#9b9b9b",
    fontSize: "16px",
    fontWeight: "400",
    "@media (max-width: 599px)": {
      minHeight: 0
    }
  },
  mdUp: {
    marginTop: "30px"
  },
  title: {
    fontSize: "55px",
    fontWeight: "400",
    color: "#2f29d0",
    margin: "50px 0",
    "@media (max-width: 959px)": {
      fontSize: "45px"
    },
    "@media (max-width: 599px)": {
      margin: "29px 0",
      fontSize: "25px"
    }
  },
  cardsBlock: {
    marginTop: "70px !important",
    minHeight: "400px",
    "@media (max-width: 1023px)": {
      maxWidth: "661px",
      width: "auto",
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardMobile: {
    width: "calc(100% - 20px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)",
    borderRadius: "6px",
    height: "290px",
    padding: "20px",
    marginRight: "0",
    marginBottom: "26px",
    maxWidth: "380px",
    "@media (min-width: 768px)": {
      maxWidth: "220px"
    },
    "& > img, & > span": {
      "@media (min-width: 768px)": {
        fontSize: "14px"
      },
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "16px"
    }
  },
  card: {
    "&.MuiPaper-root": {
      transition: "margin 0.3s ease",
      minHeight: "295px"
    },
    margin: 0,
    height: "max-content",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // boxShadow: "5px 10px 30px rgba(41, 26, 204, 0.12)",
    // borderRadius: "6px",
    padding: "30px",
    color: "#4a4a4a",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "-0.70px",
    lineHeight: "25px",
    cursor: "pointer",
    overflow: "hidden",
    "@media (max-width: 959px)": {
      justifyContent: "center"
    }
  },
  activeCard: {
    backgroundColor: "#7f0cda",
    marginTop: "-30px",
    background: "linear-gradient(to bottom, #7d0cda 0%, #a16ccc 100%)",
    "&.MuiPaper-root": {
      color: "#ffffff"
    }
  },
  cardList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    "&>li": {
      textAlign: "center"
    },
    "&>li:first-child": {
      fontSize: "22px !important",
      "@media (max-width: 959px)": {
        fontSize: "20px !important"
      },
      fontWeight: "600",
      letterSpacing: "-0.83px",
      lineHeight: "27px",
      margin: "8px 0 10px",
      textAlign: "center",
      "@media (max-width: 768px)": {
        fontSize: "20px"
      }
    }
  },
  gridItem: {
    minHeight: "428px"
  },
  cardImg: {
    display: "none"
  },
  visible: {
    display: "block"
  }
});
