"use strict";
const btnRender = document.querySelector(".btn-squares");
const divContainer = document.querySelector(".container");

const createDiv = function (classes, text = "") {
  const div = document.createElement("div");
  div.classList.add(classes);
  div.textContent = text;
  return div;
};

const diplaySquares = function (number) {
  for (let i = 1; i <= number ** 2; i++) {
    const div = createDiv("square");
    divContainer.append(div);

    div.addEventListener("mouseover", function () {
      div.classList.add("animated-square");
    });
  }
};

const renderContainer = function (n) {
  divContainer.style.width = `${n * 10}px`;
  divContainer.style.height = `${n * 10}px`;
};

const selectAndDisplaySquares = function () {
  const squareNumber = parseInt(
    prompt("Enter the number of squares per side you want (1-100)")
  );
  if (squareNumber > 100) return alert("not a valid number");

  document.querySelector(".container").innerHTML = "";
  renderContainer(squareNumber);
  diplaySquares(squareNumber);
};

btnRender.addEventListener("click", selectAndDisplaySquares);
