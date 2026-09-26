const form = document.querySelector("#portfolio-form");
const preview = document.querySelector("#preview");

function safeUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function addText(parent, tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  parent.append(element);
  return element;
}

function renderPreview(data) {
  preview.replaceChildren();
  addText(preview, "p", "Preview", "preview-label");
  addText(preview, "h2", data.name);
  addText(preview, "h3", data.title);
  addText(preview, "p", data.bio);

  const links = document.createElement("p");
  links.className = "links";
  [["GitHub", data.github], ["LinkedIn", data.linkedin]].forEach(([label, value]) => {
    const url = safeUrl(value);
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    links.append(link, document.createTextNode(" "));
  });
  if (links.childNodes.length) preview.append(links);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPreview({
    name: document.querySelector("#name").value.trim(),
    title: document.querySelector("#title").value.trim(),
    bio: document.querySelector("#bio").value.trim(),
    github: document.querySelector("#github").value.trim(),
    linkedin: document.querySelector("#linkedin").value.trim()
  });
});
