import { Badge } from "../Badge.js";
import { classNames } from "../../utils/stringUtils.js";

export function TimelineTerminale({ grouped, phases }) {
  return (
    <div className="flex flex-col gap-8">
      {grouped.map(([title, items]) => {
        const phaseMeta = phases.find((phase) => phase.key === title);
        return (
          <section key={title}>
            <h2 className="mb-3 text-lg font-semibold">{title}</h2>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 h-full w-px bg-slate-200" aria-hidden />
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="relative">
                    <div
                      className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-white ring-2 ring-slate-300"
                      aria-hidden
                    />
                    <article className={classNames("rounded-2xl border p-4", phaseMeta?.color)}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-medium">{item.titre}</h3>
                        <span className="text-xs text-slate-700">{item.periode}</span>
                      </div>
                      <p className="mt-1 text-sm text-slate-700">{item.details}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
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
