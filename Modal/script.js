"use strict";
const elementSelector = function (className) {
  return document.querySelector(className);
};
const addClass = function (tagName, className) {
  return tagName.classList.add(className);
};

// const deleteClass = function (className, deleteClass) {
//   return document.querySelector(className).classList.remove(deleteClass);
// };
const deleteClass = function (className, deleteClass) {
  const element = document.querySelector(className);
  if (element) {
    element.classList.remove(deleteClass);
    return true; // Indicating that the class was successfully removed
  } else {
    console.error(`Element not found for selector: ${className}`);
    return false; // Indicating that no element was found to remove the class from
  }
};

const modal = elementSelector(".modal");
console.log(modal);
const btnCloseModal = elementSelector(".close-modal");
const overlay = elementSelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // deleteClass(modal, 'hidden');
    // deleteClass(overlay, 'hidden');
  });

btnCloseModal.addEventListener("click", function () {
  addClass(modal, "hidden");
  addClass(overlay, "hidden");
});

document.addEventListener("keydown", function (e) {
  const keyValue = e.key;
  if (keyValue === "Escape") {
    // if (keyValue === 'Escape' && !modal.classList.contains('hidden')) {
    addClass(modal, "hidden");
    addClass(overlay, "hidden");
  }
});
