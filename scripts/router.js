const DEFAULT_ROUTE = "accueil";

function setRoute(hash, sections, links, sectionById) {
  const target = (hash || "").replace(/^#/, "") || DEFAULT_ROUTE;
  const section = sectionById.get(target);

  if (!section) {
    if (target !== DEFAULT_ROUTE) {
      window.location.hash = `#${DEFAULT_ROUTE}`;
    }
    return;
  }

  sections.forEach((element) => {
    const isActive = element === section;
    element.classList.toggle("hidden", !isActive);
    element.setAttribute("aria-hidden", String(!isActive));
  });

  links.forEach((link) => {
    const isActive = link.hash.replace(/^#/, "") === target;
    if (isActive) {
      link.setAttribute("aria-current", "page");
      link.classList.add("bg-slate-900/5", "text-slate-900");
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove("bg-slate-900/5", "text-slate-900");
    }
  });
}

export function initRouting() {
  const sections = Array.from(document.querySelectorAll("[data-route]"));
  const links = Array.from(document.querySelectorAll("[data-route-link]"));
  const sectionById = new Map(sections.map((section) => [section.id, section]));

  const handleHashChange = () => setRoute(window.location.hash, sections, links, sectionById);

  window.addEventListener("hashchange", handleHashChange);
  handleHashChange();
}

document.addEventListener("DOMContentLoaded", () => {
  initRouting();
});
