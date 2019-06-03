import React, { Component } from "react";
import injectSheet from "react-jss";

var timer;
var array = [1, 2, 3, 4];
var newArray = array.slice();
newArray = newArray.concat(array);
console.log(newArray);

const arrayLenght = newArray.length;
console.log(arrayLenght);

const styles = theme => ({
  slideContainer: {
    top: "0",
    position: "absolute",
    display: "flex",
    padding: "0",
    margin: "0",
    cursor: "pointer",
    "& > *": {
      display: "inline",
      padding: `0 10px`,
      width: "10px"
    }
  },
  carouselOverflow: {
    height: "20px",
    position: "relative",
    overflow: "hidden"
  }
});

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: arrayLenght / 2,
      sliderChildWidth: 0,
      swap: false,
      swapBack: false
    };
  }

  //   moveAt = e => {
  //     ball.style.left = e.pageX - ball.offsetWidth / 2 + "px";
  //   };

  mySetTimeout(func, timeout = 0) {
    setTimeout(func, timeout);
    const n = {
      start: new Date().getTime(),
      end: new Date().getTime() + timeout,
      t: timeout
    };
    return n;
  }
  componentDidMount() {
    const carouselChildWidth = document.getElementById("carousel").firstChild
      .offsetWidth;
    document.getElementById(
      "carousel-overflow"
    ).style.width = `${carouselChildWidth}px`;
    this.setState({
      sliderChildWidth: carouselChildWidth
    });
  }

  onNextClick = () => {
    // if (timer) {
    //   console.log("sadsad", timer.end - new Date().getTime());
    // }
    // console.log(this.state.activeIndex >= arrayLenght - 2);

    console.log("yes");
    timer = this.mySetTimeout(() => {
      this.setState(state => ({
        activeIndex: state.activeIndex + 1,
        swap: false,
        swapBack: false
      }));
    }, 0);

    if (this.state.activeIndex >= arrayLenght - 1) {
      this.mySetTimeout(
        () => {
          this.setState({
            activeIndex: arrayLenght / 2 - 1,
            swap: true,
            swapBack: false
          });
        },
        timer && timer.start + 2000 > new Date().getTime()
          ? timer.start + 2000
          : 0
      );
      timer = this.mySetTimeout(() => {
        this.setState(state => ({
          activeIndex: state.activeIndex + 1,
          swap: false,
          swapBack: false
        }));
      }, 0);
    }
  };
  onPrevClick = () => {
    if (this.state.activeIndex > 1) {
      this.setState(state => ({
        activeIndex: state.activeIndex - 1,
        swapBack: false,
        swap: false
      }));
    } else {
      setTimeout(() => {
        this.setState({
          activeIndex: 0,
          swapBack: false,
          swap: false
        });
      });
      setTimeout(() => {
        this.setState({
          activeIndex: arrayLenght / 2,
          swapBack: true,
          swap: false
        });
      }, 1000);
    }
  };
  render() {
    const { classes } = this.props;
    const { activeIndex, sliderChildWidth, swap, swapBack } = this.state;
    let sliderStyle = {
      transform: `translateX(${activeIndex * -sliderChildWidth}px)`,
      transition: "0.9s ease"
    };
    let sliderNoTrans = {
      transform: `translateX(${3 * -sliderChildWidth}px)`
    };
    let sliderNoTransBack = {
      transform: `translateX(${4 * -sliderChildWidth}px)`
    };
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <div id="carousel-overflow" className={classes.carouselOverflow}>
          <ol
            onMouseDown={this.carouselMove}
            onMouseUp={function() {
              document.getElementById("carousel").onmousemove = null;
            }}
            style={
              swapBack ? sliderNoTransBack : swap ? sliderNoTrans : sliderStyle
            }
            onDragStart={() => false}
            id="carousel"
            className={classes.slideContainer}
          >
            {newArray.map((item, index) => {
              let computedClass =
                index === activeIndex ? "slide active" : "slide";
              return (
                <li className={computedClass} key={index}>
                  {item}
                </li>
              );
            })}
          </ol>
        </div>
        <button onClick={this.onPrevClick}>prev</button>
        <button onClick={this.onNextClick}>next</button>
      </div>
    );
  }
}

export default injectSheet(styles)(Slider);
