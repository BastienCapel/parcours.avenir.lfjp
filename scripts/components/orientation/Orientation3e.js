import { DATA_3E, PHASES_3E } from "../../data/filmAnnuel3e.js";
import { TableView } from "../Table.js";
import { Timeline3e } from "./Timeline3e.js";
import { useOrientationData } from "./useOrientationData.js";

export function Orientation3e() {
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

  return (
    <div>
      <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">Film annuel de l'orientation — 3e</h3>
          <p className="text-sm text-slate-600">LFJP · Parcours Avenir · Année scolaire 2025‑2026</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="view-3e">
              Vue
            </label>
            <select
              id="view-3e"
              value={view}
              onChange={(event) => setView(event.target.value)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"
            >
              <option value="timeline">Timeline</option>
              <option value="table">Tableau</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="phase-3e">
              Phase
            </label>
            <select
              id="phase-3e"
              value={selectedPhase}
              onChange={(event) => setSelectedPhase(event.target.value)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"
            >
              <option value="all">Toutes</option>
              {PHASES_3E.map((phase) => (
                <option key={phase.key} value={phase.key}>
                  {phase.key}
                </option>
              ))}
            </select>
          </div>
          <input
            type="search"
            placeholder="Rechercher titre, période, acteurs..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-64 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"
          />
          <button
            onClick={printPage}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
          >
            Imprimer / PDF
          </button>
        </div>
      </header>

      {view === "timeline" ? (
        <Timeline3e grouped={grouped} phases={PHASES_3E} />
      ) : (
        <TableView rows={filtered} />
      )}

      <footer className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white/70 p-4 text-xs text-slate-500">
        Données issues du canevas Parcours Avenir 3e. Dernière mise à jour : {new Date().toISOString().slice(0, 10)}.
      </footer>
    </div>
  );
}
