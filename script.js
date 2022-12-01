"use strict";
const btnRender = document.querySelector(".btn-squares");

const createDiv = function (classes, text = "") {
  const div = document.createElement("div");
  div.classList.add(classes);
  div.textContent = text;
  return div;
};

const divContainer = createDiv("container");
const square = createDiv("square", "placeholder text");
console.log(divContainer);
console.log(square);

document.querySelector("body").insertAdjacentElement("beforeEnd", divContainer);

// for (let i = 1; i <= 16 * 16; i++) {
//   const div = createDiv("square");
//   divContainer.append(div);

//   div.addEventListener("mouseover", function () {
//     div.classList.add("animated-square");
//   });
// }

let numberOfSquares = 16;

const diplaySquares = function (number) {
  for (let i = 1; i <= number ** 2; i++) {
    const div = createDiv("square");
    divContainer.append(div);

    div.addEventListener("mouseover", function () {
      div.classList.add("animated-square");
    });
  }
};

btnRender.addEventListener("click", diplaySquares.bind(null, numberOfSquares));
