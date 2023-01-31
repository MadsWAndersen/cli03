import { marked } from "marked";

document.getElementById("preview").innerHTML = marked.parse(
  "# Marked in the browser\n\nRendered by **marked**."
);

let btn = document.getElementById("content");

btn.addEventListener("input", function () {
  let value = document.getElementById("content").value;
  let change = document.getElementById("preview");
  change.innerHTML = marked.parse(value);
});
