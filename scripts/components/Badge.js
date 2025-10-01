import { Icon } from "./Icon.js";
function Badge({ icon, label }) {
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      className:
        "inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 text-[11px] shadow-sm ring-1 ring-slate-300",
    },
    /* @__PURE__ */ React.createElement(Icon, {
      name: icon,
      className: "h-3 w-3",
    }),
    /* @__PURE__ */ React.createElement("span", null, label),
  );
}
export { Badge };
