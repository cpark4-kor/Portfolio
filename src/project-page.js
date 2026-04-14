import { initSiteHeader } from "./header.js";
import { getProject } from "./data/projects.js";

initSiteHeader();

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = getProject(id);
const root = document.getElementById("project-root");

if (!root) {
  throw new Error("Missing #project-root");
}

if (!project) {
  document.title = "Project not found · Chaejun Park";
  root.innerHTML = `
    <article class="project-detail project-detail--missing" aria-labelledby="missing-title">
      <h1 id="missing-title" class="project-detail-title">404: Project went for coffee</h1>
      <p class="project-detail-summary">Nothing lives at <code class="project-code">${escapeHtml(id ?? "")}</code>—unless you count optimism. Double-check the link or head back before this page starts telling jokes about DNS.</p>
      <p class="project-detail-actions"><a class="btn btn-primary" href="./index.html#work">Back to real projects</a></p>
    </article>
  `;
} else {
  document.title = `${project.title} · Chaejun Park`;

  const stack = project.stack.map((s) => `<li>${escapeHtml(s)}</li>`).join("");
  const sections = project.sections
    .map(
      (sec) => `
    <section class="project-block" aria-labelledby="h-${slug(sec.heading)}">
      <h2 id="h-${slug(sec.heading)}" class="project-block-title">${escapeHtml(sec.heading)}</h2>
      <p class="project-block-body">${escapeHtml(sec.body)}</p>
    </section>
  `
    )
    .join("");

  const linkHtml = project.link
    ? `<p class="project-detail-actions"><a class="btn btn-ghost" href="${escapeAttr(project.link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.link.label)}</a></p>`
    : "";

  root.innerHTML = `
    <article class="project-detail" aria-labelledby="project-title">
      <p class="back-row"><a href="./index.html#work" class="back-link">← Back to work (it missed you)</a></p>
      <h1 id="project-title" class="project-detail-title">${escapeHtml(project.title)}</h1>
      <p class="project-detail-summary">${escapeHtml(project.summary)}</p>
      <ul class="project-stack" aria-label="Technologies">${stack}</ul>
      <div class="project-body">${sections}</div>
      ${linkHtml}
    </article>
  `;
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(text) {
  return escapeHtml(text).replaceAll("'", "&#39;");
}

function slug(text) {
  return text
    .toLowerCase()
    .replaceAll(/[^\p{L}\p{N}]+/gu, "-")
    .replaceAll(/^-|-$/g, "");
}
