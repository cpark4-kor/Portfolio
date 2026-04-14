export function initSiteHeader() {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");

  function setNavOpen(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      setNavOpen(open);
    });
  }

  document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = el.getAttribute("data-scroll");
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      setNavOpen(false);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNavOpen(false);
  });

  window.addEventListener(
    "scroll",
    () => {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    },
    { passive: true }
  );

  initBackgroundVideo();
}

function initBackgroundVideo() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const video = document.querySelector(".video-bg__media");
  if (!video) return;
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute("playsinline", "");

  const tryPlay = () => {
    video.play().catch(() => {});
  };

  tryPlay();
  video.addEventListener("canplay", tryPlay, { once: true });
  video.addEventListener("loadeddata", tryPlay, { once: true });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") tryPlay();
  });
}
