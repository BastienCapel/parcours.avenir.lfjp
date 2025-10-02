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

function initMobileMenu() {
  const toggleButton = document.querySelector("[data-mobile-menu-button]");
  const menu = document.querySelector("[data-mobile-menu]");

  if (!toggleButton || !menu) {
    return;
  }

  const label = toggleButton.querySelector("[data-mobile-menu-label]");
  const openIcon = toggleButton.querySelector('[data-mobile-menu-icon="open"]');
  const closeIcon = toggleButton.querySelector('[data-mobile-menu-icon="close"]');
  const desktopMediaQuery = window.matchMedia("(min-width: 768px)");

  const setCollapsedState = () => {
    toggleButton.setAttribute("aria-expanded", "false");
    if (label) {
      label.textContent = "Menu";
    }
    if (openIcon) {
      openIcon.classList.remove("hidden");
    }
    if (closeIcon) {
      closeIcon.classList.add("hidden");
    }
    if (desktopMediaQuery.matches) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
    menu.classList.remove("flex");
  };

  const setExpandedState = () => {
    toggleButton.setAttribute("aria-expanded", "true");
    if (label) {
      label.textContent = "Fermer";
    }
    if (openIcon) {
      openIcon.classList.add("hidden");
    }
    if (closeIcon) {
      closeIcon.classList.remove("hidden");
    }
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  };

  const handleToggle = () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      setCollapsedState();
    } else {
      setExpandedState();
    }
  };

  const handleMenuClick = (event) => {
    const target = event.target instanceof Element ? event.target.closest("a") : null;
    if (!target) {
      return;
    }
    setCollapsedState();
  };

  const handleBreakpointChange = () => {
    setCollapsedState();
  };

  toggleButton.addEventListener("click", handleToggle);
  menu.addEventListener("click", handleMenuClick);

  if (typeof desktopMediaQuery.addEventListener === "function") {
    desktopMediaQuery.addEventListener("change", handleBreakpointChange);
  } else if (typeof desktopMediaQuery.addListener === "function") {
    desktopMediaQuery.addListener(handleBreakpointChange);
  }

  setCollapsedState();
}

document.addEventListener("DOMContentLoaded", () => {
  initRouting();
  initMobileMenu();
  initOnisepAccessToggle();
});

function initOnisepAccessToggle() {
  const toggle = document.querySelector("[data-onisep-toggle]");
  const panel = document.querySelector("[data-onisep-panel]");
  const closeButton = document.querySelector("[data-onisep-close]");

  if (!toggle || !panel) {
    return;
  }

  const setExpandedState = (isExpanded) => {
    toggle.setAttribute("aria-expanded", String(isExpanded));
    panel.classList.toggle("hidden", !isExpanded);
    toggle.classList.toggle("bg-rose-50", isExpanded);
    toggle.classList.toggle("border-rose-300", isExpanded);
    toggle.classList.toggle("text-rose-700", isExpanded);
  };

  const handleToggle = () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    setExpandedState(!isExpanded);
  };

  const handleClose = () => {
    setExpandedState(false);
    toggle.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        event.preventDefault();
        handleClose();
      }
    }
  };

  toggle.addEventListener("click", handleToggle);
  toggle.addEventListener("keydown", handleKeyDown);

  if (closeButton) {
    closeButton.addEventListener("click", handleClose);
  }

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    if (!isExpanded || !target) {
      return;
    }
    if (target.closest("[data-onisep-panel]") || target.closest("[data-onisep-toggle]")) {
      return;
    }
    setExpandedState(false);
  });

  setExpandedState(false);
}
