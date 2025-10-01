import { Badge } from "../Badge.js";
import { classNames } from "../../utils/stringUtils.js";
function Timeline3e({ grouped, phases }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    { className: "space-y-12" },
    grouped.map(([title, items]) => {
      const phaseMeta = phases.find((phase) => phase.key === title);
      return /* @__PURE__ */ React.createElement(
        "section",
        {
          key: title,
          className:
            "rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm",
        },
        /* @__PURE__ */ React.createElement(
          "header",
          {
            className: "mb-4 flex flex-wrap items-center justify-between gap-3",
          },
          /* @__PURE__ */ React.createElement(
            "h3",
            { className: "text-lg font-semibold text-slate-900" },
            title,
          ),
          /* @__PURE__ */ React.createElement(
            "span",
            {
              className:
                "text-xs font-semibold uppercase tracking-wide text-slate-600",
            },
            items.length,
            " action",
            items.length > 1 ? "s" : "",
          ),
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
            { className: "space-y-6" },
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
                      "rounded-2xl border p-5 shadow-sm transition hover:shadow-md",
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
                      "h4",
                      { className: "font-semibold text-slate-900" },
                      item.titre,
                    ),
                    /* @__PURE__ */ React.createElement(
                      "span",
                      {
                        className:
                          "text-xs font-semibold uppercase tracking-wide text-slate-700",
                      },
                      item.periode,
                    ),
                  ),
                  /* @__PURE__ */ React.createElement(
                    "p",
                    { className: "mt-2 text-sm text-slate-700" },
                    item.details,
                  ),
                  /* @__PURE__ */ React.createElement(
                    "div",
                    {
                      className:
                        "mt-3 flex flex-wrap gap-2 text-xs text-slate-600",
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
export { Timeline3e };
