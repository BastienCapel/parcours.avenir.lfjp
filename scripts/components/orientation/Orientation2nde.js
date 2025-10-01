import { DATA_2NDE, PHASES_2NDE } from "../../data/filmAnnuel2nde.js";
import { TableViewCompact } from "../Table.js";
import { Timeline2nde } from "./Timeline2nde.js";
import { useOrientationData } from "./useOrientationData.js";
function Orientation2nde() {
  const {
    query,
    setQuery,
    selectedPhase,
    setSelectedPhase,
    view,
    setView,
    filtered,
    grouped,
  } = useOrientationData(DATA_2NDE, PHASES_2NDE);
  const printPage = () => window.print();
  return /* @__PURE__ */ React.createElement(
    "div",
    { className: "mx-auto max-w-7xl p-6" },
    /* @__PURE__ */ React.createElement(
      "header",
      {
        className:
          "mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        null,
        /* @__PURE__ */ React.createElement(
          "h3",
          { className: "text-2xl font-semibold tracking-tight" },
          "Film annuel de l'orientation \u2014 2nde",
        ),
        /* @__PURE__ */ React.createElement(
          "p",
          { className: "text-sm text-slate-600" },
          "LFJP \xB7 Parcours Avenir \xB7 Ann\xE9e scolaire 2025\u20112026",
        ),
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "flex flex-wrap items-center gap-2" },
        /* @__PURE__ */ React.createElement(
          "div",
          { className: "flex items-center gap-2" },
          /* @__PURE__ */ React.createElement(
            "label",
            { className: "text-sm text-slate-600", htmlFor: "view-2nde" },
            "Vue",
          ),
          /* @__PURE__ */ React.createElement(
            "select",
            {
              id: "view-2nde",
              value: view,
              onChange: (event) => setView(event.target.value),
              className:
                "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm",
            },
            /* @__PURE__ */ React.createElement(
              "option",
              { value: "timeline" },
              "Timeline",
            ),
            /* @__PURE__ */ React.createElement(
              "option",
              { value: "table" },
              "Tableau",
            ),
          ),
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          { className: "flex items-center gap-2" },
          /* @__PURE__ */ React.createElement(
            "label",
            { className: "text-sm text-slate-600", htmlFor: "phase-2nde" },
            "Phase",
          ),
          /* @__PURE__ */ React.createElement(
            "select",
            {
              id: "phase-2nde",
              value: selectedPhase,
              onChange: (event) => setSelectedPhase(event.target.value),
              className:
                "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm",
            },
            /* @__PURE__ */ React.createElement(
              "option",
              { value: "all" },
              "Toutes",
            ),
            PHASES_2NDE.map((phase) =>
              /* @__PURE__ */ React.createElement(
                "option",
                { key: phase.key, value: phase.key },
                phase.key,
              ),
            ),
          ),
        ),
        /* @__PURE__ */ React.createElement("input", {
          type: "search",
          placeholder: "Rechercher une action, une p\xE9riode, un acteur...",
          value: query,
          onChange: (event) => setQuery(event.target.value),
          className:
            "w-64 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm",
        }),
        /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: printPage,
            className:
              "rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900",
          },
          "Imprimer / PDF",
        ),
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className:
          "rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm",
      },
      view === "timeline"
        ? /* @__PURE__ */ React.createElement(Timeline2nde, {
            grouped,
            phases: PHASES_2NDE,
          })
        : /* @__PURE__ */ React.createElement(TableViewCompact, {
            rows: filtered,
          }),
    ),
    /* @__PURE__ */ React.createElement(
      "footer",
      { className: "mt-6 text-xs text-slate-500" },
      "Donn\xE9es issues du canevas Parcours Avenir 2nde. Derni\xE8re mise \xE0 jour : ",
      /* @__PURE__ */ new Date().toISOString().slice(0, 10),
      ".",
    ),
  );
}
export { Orientation2nde };
