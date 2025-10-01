import { Badge } from "../Badge.js";
import { classNames } from "../../utils/stringUtils.js";

export function Timeline3e({ grouped, phases }) {
  return (
    <div className="space-y-12">
      {grouped.map(([title, items]) => {
        const phaseMeta = phases.find((phase) => phase.key === title);
        return (
          <section key={title} className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {items.length} action{items.length > 1 ? "s" : ""}
              </span>
            </header>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 h-full w-px bg-slate-200" aria-hidden />
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.id} className="relative">
                    <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-white ring-2 ring-slate-300" aria-hidden />
                    <article
                      className={classNames(
                        "rounded-2xl border p-5 shadow-sm transition hover:shadow-md",
                        phaseMeta?.color
                      )}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-semibold text-slate-900">{item.titre}</h4>
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                          {item.periode}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-700">{item.details}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                        <Badge icon="users" label={item.acteurs.join(", ")} />
                        <Badge icon="map-pin" label={item.lieu} />
                        <Badge icon="flag" label={item.phase} />
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
