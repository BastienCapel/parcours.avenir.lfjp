function TableView({ rows }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className:
        "overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm",
    },
    /* @__PURE__ */ React.createElement(
      "table",
      { className: "min-w-full divide-y divide-slate-200" },
      /* @__PURE__ */ React.createElement(
        "thead",
        { className: "bg-slate-50/70" },
        /* @__PURE__ */ React.createElement(
          "tr",
          null,
          /* @__PURE__ */ React.createElement(Th, null, "Phase"),
          /* @__PURE__ */ React.createElement(Th, null, "P\xE9riode"),
          /* @__PURE__ */ React.createElement(Th, null, "Titre"),
          /* @__PURE__ */ React.createElement(Th, null, "D\xE9tails"),
          /* @__PURE__ */ React.createElement(Th, null, "Acteurs"),
          /* @__PURE__ */ React.createElement(Th, null, "Lieu"),
        ),
      ),
      /* @__PURE__ */ React.createElement(
        "tbody",
        { className: "divide-y divide-slate-100 bg-white/80" },
        rows.map((row) =>
          /* @__PURE__ */ React.createElement(
            "tr",
            { key: row.id, className: "hover:bg-slate-50/70" },
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "whitespace-nowrap text-slate-700" },
              row.phase,
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "whitespace-nowrap text-slate-700" },
              row.periode,
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "font-medium text-slate-900" },
              row.titre,
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "text-slate-700" },
              row.details,
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "text-slate-700" },
              row.acteurs.join(", "),
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "text-slate-700" },
              row.lieu,
            ),
          ),
        ),
      ),
    ),
  );
}
function TableViewCompact({ rows }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    { className: "overflow-hidden rounded-2xl border" },
    /* @__PURE__ */ React.createElement(
      "table",
      { className: "min-w-full divide-y divide-slate-200" },
      /* @__PURE__ */ React.createElement(
        "thead",
        { className: "bg-slate-50" },
        /* @__PURE__ */ React.createElement(
          "tr",
          null,
          /* @__PURE__ */ React.createElement(Th, null, "Phase"),
          /* @__PURE__ */ React.createElement(Th, null, "P\xE9riode"),
          /* @__PURE__ */ React.createElement(Th, null, "Titre"),
          /* @__PURE__ */ React.createElement(Th, null, "D\xE9tails"),
          /* @__PURE__ */ React.createElement(Th, null, "Acteurs"),
          /* @__PURE__ */ React.createElement(Th, null, "Lieu"),
        ),
      ),
      /* @__PURE__ */ React.createElement(
        "tbody",
        { className: "divide-y divide-slate-100 bg-white" },
        rows.map((row) =>
          /* @__PURE__ */ React.createElement(
            "tr",
            { key: row.id, className: "hover:bg-slate-50" },
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "whitespace-nowrap text-slate-700" },
              row.phase,
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "whitespace-nowrap text-slate-700" },
              row.periode,
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "font-medium" },
              row.titre,
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "text-slate-700" },
              row.details,
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "text-slate-700" },
              row.acteurs.join(", "),
            ),
            /* @__PURE__ */ React.createElement(
              Td,
              { className: "text-slate-700" },
              row.lieu,
            ),
          ),
        ),
      ),
    ),
  );
}
function Th({ children }) {
  return /* @__PURE__ */ React.createElement(
    "th",
    {
      scope: "col",
      className:
        "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600",
    },
    children,
  );
}
function Td({ children, className = "" }) {
  return /* @__PURE__ */ React.createElement(
    "td",
    { className: `px-4 py-3 text-sm ${className}` },
    children,
  );
}
export { TableView, TableViewCompact };
