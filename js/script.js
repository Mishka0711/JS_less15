"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
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
      ";" +
      "width: " +
      this.width +
      ";" +
      "font-size: " +
      this.fontSize +
      ";" +
      "background: " +
      this.bg +
      ";";
    div_elem.textContent = this.selector.substr(1);
    console.log(div_elem);
    document.addEventListener("DOMContentLoaded", function () {
      document.body.append(div_elem);
    });
  };
};

const newDomElement = new DomElement(
  ".block",
  "40px",
  "140px",
  "green",
  "28px"
);

// newDomElement.selector = ".block";
// newDomElement.height = "40px";
// newDomElement.width = "140px";
// newDomElement.bg = "green";
// newDomElement.fontSize = "28px";
newDomElement.met_sel();
