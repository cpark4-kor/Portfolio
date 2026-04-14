/** @typedef {{ title: string, summary: string, stack: string[], sections: { heading: string, body: string }[], link?: { href: string, label: string } }} Project */

/** @type {Record<string, Project>} */
export const projects = {
  one: {
    title: "Project One",
    summary:
      "A focused tool for tracking work without the motivational poster energy. Fewer clicks, fewer sighs.",
    stack: ["HTML", "CSS", "JavaScript"],
    sections: [
      {
        heading: "Overview",
        body: "This started as coursework, then graduated to “I actually use this.” Goal: first-time users shouldn’t need a map, a legend, or a TED talk to get started.",
      },
      {
        heading: "What I built",
        body: "Layout, components, and client-side behavior. The data layer stays boring on purpose—excitement belongs in the UI, not in mystery mutations.",
      },
      {
        heading: "Outcome",
        body: "Smoother weekly planning: fewer steps from “idea” to “logged.” Why did the developer quit planning? Too many backlogs. (I’m still refining accessibility—no joke there, just respect.)",
      },
    ],
    link: { href: "https://github.com", label: "View on GitHub" },
  },
  two: {
    title: "Project Two",
    summary:
      "Explore data in the browser: filters, sorting, and views you can share—unlike your screen time stats.",
    stack: ["JavaScript", "REST", "CSS"],
    sections: [
      {
        heading: "Overview",
        body: "I wanted structured data in the browser without downloading half the internet. Predictable state, readable code, and no framework that introduces twelve new words for “button.”",
      },
      {
        heading: "Approach",
        body: "Core states: loading, empty, error, results—the emotional journey of every API call. Network calls live in one place so they can’t unionize behind my back.",
      },
      {
        heading: "What I learned",
        body: "Tiny caches + debounced filters = feels instant. Next up: tests for filter logic and documenting API assumptions so future-me doesn’t send present-me angry commits.",
      },
    ],
    link: { href: "https://github.com", label: "Repository" },
  },
  three: {
    title: "Project Three",
    summary:
      "CLI energy, web manners—like teaching a terminal to use indoor voice.",
    stack: ["Node.js", "HTML", "CSS"],
    sections: [
      {
        heading: "Overview",
        body: "Personal experiment: what happens when terminal metaphors get indoor shoes and plain-language labels? Spoiler: fewer users whisper “I’m scared” at the screen.",
      },
      {
        heading: "What I did",
        body: "Sketched flows, built screens, wired minimal automation. Visuals stay calm so error messages don’t look like they’re yelling in ALL CAPS even when they technically are.",
      },
      {
        heading: "Outcome",
        body: "Friends tried it; nobody filed a bug titled “existential dread.” Torn between open-sourcing it or merging the good bits into something bigger—like git, but for my attention span.",
      },
    ],
  },
};

/**
 * @param {string | null} id
 * @returns {Project | null}
 */
export function getProject(id) {
  if (!id) return null;
  return projects[id] ?? null;
}
