import { marked } from "marked";

document.getElementById("preview").innerHTML = marked.parse(
  "# Marked in the browser\n\nRendered by **marked**."
);
