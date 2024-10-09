const button = document.getElementById("danger-button");
const main = document.getElementById("main");

button.addEventListener("click", function () {
  main.remove();
});
