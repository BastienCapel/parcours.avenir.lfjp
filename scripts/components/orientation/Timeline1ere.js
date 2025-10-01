import { Badge } from "../Badge.js";
import { classNames } from "../../utils/stringUtils.js";
function Timeline1ere({ grouped, phases }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    { className: "flex flex-col gap-8" },
    grouped.map(([title, items]) => {
      const phaseMeta = phases.find((phase) => phase.key === title);
      return /* @__PURE__ */ React.createElement(
        "section",
        { key: title },
        /* @__PURE__ */ React.createElement(
          "h2",
          { className: "mb-3 text-lg font-semibold" },
          title,
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          { className: "relative pl-6" },
          /* @__PURE__ */ React.createElement("div", {
            className: "absolute left-2 top-0 h-full w-px bg-slate-200",
            "aria-hidden": true,
          }),
          /* @__PURE__ */ React.createElement(
            "ul",
            { className: "space-y-4" },
            items.map((item) =>
              /* @__PURE__ */ React.createElement(
                "li",
                { key: item.id, className: "relative" },
                /* @__PURE__ */ React.createElement("div", {
                  className:
                    "absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-white ring-2 ring-slate-300",
                  "aria-hidden": true,
                }),
                /* @__PURE__ */ React.createElement(
                  "article",
                  {
                    className: classNames(
                      "rounded-2xl border p-4",
                      phaseMeta == null ? void 0 : phaseMeta.color,
                    ),
                  },
                  /* @__PURE__ */ React.createElement(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-baseline justify-between gap-2",
                    },
                    /* @__PURE__ */ React.createElement(
                      "h3",
                      { className: "font-medium" },
                      item.titre,
                    ),
                    /* @__PURE__ */ React.createElement(
                      "span",
                      { className: "text-xs text-slate-700" },
                      item.periode,
                    ),
                  ),
                  /* @__PURE__ */ React.createElement(
                    "p",
                    { className: "mt-1 text-sm text-slate-700" },
                    item.details,
                  ),
                  /* @__PURE__ */ React.createElement(
                    "div",
                    {
                      className:
                        "mt-2 flex flex-wrap gap-2 text-xs text-slate-600",
                    },
                    /* @__PURE__ */ React.createElement(Badge, {
                      icon: "users",
                      label: item.acteurs.join(", "),
                    }),
                    /* @__PURE__ */ React.createElement(Badge, {
                      icon: "map-pin",
                      label: item.lieu,
                    }),
                    /* @__PURE__ */ React.createElement(Badge, {
                      icon: "flag",
                      label: item.phase,
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    }),
  );
}
export { Timeline1ere };
