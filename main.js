import { marked } from 'marked';

document.getElementById('content').innerHTML =
marked.parse('# Marked in the browser\n\nRendered by **marked**.');