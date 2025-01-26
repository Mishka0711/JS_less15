"use strict";

const DomElement = function (
  selector,
  height,
  width,
  bg,
  fontSize,
  position,
  left,
  top
) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
  this.left = left;
  this.top = top;
  this.met_sel = function () {
    console.log("class");
    const div_elem = document.createElement("div");
    if (this.selector[0] === ".") {
      div_elem.classList.add(this.selector.substr(1));
    } else if (this.selector[0] === "#") {
      div_elem.id = this.selector.substr(1);
    } else return console.log("ни рыба ни мясо, ни id ни class");
    div_elem.style.cssText =
      "height: " +
      this.height +
      "px;" +
      "width: " +
      this.width +
      "px;" +
      "font-size: " +
      this.fontSize +
      "px;" +
      "background: " +
      this.bg +
      ";" +
      "position: " +
      this.position +
      ";";
    div_elem.textContent = this.selector.substr(1);
    // console.log(div_elem);
    document.addEventListener("DOMContentLoaded", function () {
      document.body.append(div_elem);
      let coord_left = 10;
      let coord_top = 40;

      const moving_elem = function (e) {
        if (e.key === "ArrowDown") {
          coord_top += 10;
          div_elem.style.top = coord_top + "px";
        }
        if (e.key === "ArrowUp" && coord_top > 0) {
          coord_top -= 10;
          div_elem.style.top = coord_top + "px";
        }
        if (e.key === "ArrowRight") {
          coord_left += 10;
          div_elem.style.left = coord_left + "px";
        }
        if (e.key === "ArrowLeft" && coord_left > 0) {
          coord_left -= 10;
          div_elem.style.left = coord_left + "px";
        }
      };
      document.addEventListener("keydown", moving_elem);
    });
  };
};

const newDomElement = new DomElement(".block", "40", "240", "green", "28");

// newDomElement.selector = ".block";
// newDomElement.height = "40px";
// newDomElement.width = "140px";
// newDomElement.bg = "green";
// newDomElement.fontSize = "28px";
newDomElement.met_sel();

const newDomElement2 = new DomElement(
  ".block_two",
  100,
  100,
  "red",
  18,
  "absolute"
);
newDomElement2.met_sel();
