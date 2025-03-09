// script.js
document.querySelector(".dropdown-btn").addEventListener("click", function () {
  let dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
});

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    var dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function (dropdown) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
};
