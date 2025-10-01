import { Orientation3e } from "./scripts/components/orientation/Orientation3e.js";
import { Orientation2nde } from "./scripts/components/orientation/Orientation2nde.js";
import { Orientation1ere } from "./scripts/components/orientation/Orientation1ere.js";
import { OrientationTerminale } from "./scripts/components/orientation/OrientationTerminale.js";

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

  const root1ereElement = document.getElementById("film-annuel-1ere-root");
  if (root1ereElement) {
    const root = createRoot(root1ereElement);
    root.render(<Orientation1ere />);
  }

  const rootTerminaleElement = document.getElementById("film-annuel-terminale-root");
  if (rootTerminaleElement) {
    const root = createRoot(rootTerminaleElement);
    root.render(<OrientationTerminale />);
  }
});
