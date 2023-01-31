import { marked } from "marked";

let input = document.getElementById("content");

input.addEventListener("input", function () {
  let value = document.getElementById("content").value;
  let change = document.getElementById("preview");
  change.innerHTML = marked.parse(value);
});
