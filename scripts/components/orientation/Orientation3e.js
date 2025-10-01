import { DATA_3E, PHASES_3E } from "../../data/filmAnnuel3e.js";
import { TableView } from "../Table.js";
import { Timeline3e } from "./Timeline3e.js";
import { useOrientationData } from "./useOrientationData.js";
function Orientation3e() {
  const {
    query,
    setQuery,
    selectedPhase,
    setSelectedPhase,
    view,
    setView,
    filtered,
    grouped,
  } = useOrientationData(DATA_3E, PHASES_3E);
  const printPage = () => window.print();
  return /* @__PURE__ */ React.createElement(
    "div",
    null,
    /* @__PURE__ */ React.createElement(
      "header",
      {
        className:
          "mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm md:flex-row md:items-end md:justify-between",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        null,
        /* @__PURE__ */ React.createElement(
          "h3",
          { className: "text-xl font-semibold tracking-tight" },
          "Film annuel de l'orientation \u2014 3e",
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
            {
              className:
                "text-xs font-semibold uppercase tracking-wide text-slate-500",
              htmlFor: "view-3e",
            },
            "Vue",
          ),
          /* @__PURE__ */ React.createElement(
            "select",
            {
              id: "view-3e",
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
            {
              className:
                "text-xs font-semibold uppercase tracking-wide text-slate-500",
              htmlFor: "phase-3e",
            },
            "Phase",
          ),
          /* @__PURE__ */ React.createElement(
            "select",
            {
              id: "phase-3e",
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
            PHASES_3E.map((phase) =>
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
          placeholder: "Rechercher titre, p\xE9riode, acteurs...",
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
    view === "timeline"
      ? /* @__PURE__ */ React.createElement(Timeline3e, {
          grouped,
          phases: PHASES_3E,
        })
      : /* @__PURE__ */ React.createElement(TableView, { rows: filtered }),
    /* @__PURE__ */ React.createElement(
      "footer",
      {
        className:
          "mt-8 rounded-3xl border border-dashed border-slate-300 bg-white/70 p-4 text-xs text-slate-500",
      },
      "Donn\xE9es issues du canevas Parcours Avenir 3e. Derni\xE8re mise \xE0 jour : ",
      /* @__PURE__ */ new Date().toISOString().slice(0, 10),
      ".",
    ),
  );
}
export { Orientation3e };
