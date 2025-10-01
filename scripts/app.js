import { Orientation3e } from "./scripts/components/orientation/Orientation3e.js";
import { Orientation2nde } from "./scripts/components/orientation/Orientation2nde.js";

const { createRoot } = ReactDOM;

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("film-annuel-root");
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Orientation3e />);
  }

  const root2ndeElement = document.getElementById("film-annuel-2nde-root");
  if (root2ndeElement) {
    const root = createRoot(root2ndeElement);
    root.render(<Orientation2nde />);
  }
});
