import { DATA_1ERE, PHASES_1ERE } from "../../data/filmAnnuel1ere.js";
import { TableViewCompact } from "../Table.js";
import { Timeline1ere } from "./Timeline1ere.js";
import { useOrientationData } from "./useOrientationData.js";

export function Orientation1ere() {
  const {
    query,
    setQuery,
    selectedPhase,
    setSelectedPhase,
    view,
    setView,
    filtered,
    grouped,
  } = useOrientationData(DATA_1ERE, PHASES_1ERE);

  const printPage = () => window.print();

  return (
    <div className="mx-auto max-w-7xl p-6">
      <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Film annuel de l'orientation — 1ère</h3>
          <p className="text-sm text-slate-600">LFJP · Parcours Avenir · Année scolaire 2025‑2026</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600" htmlFor="view-1ere">
              Vue
            </label>
            <select
              id="view-1ere"
              value={view}
              onChange={(event) => setView(event.target.value)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"
            >
              <option value="timeline">Timeline</option>
              <option value="table">Tableau</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600" htmlFor="phase-1ere">
              Phase
            </label>
            <select
              id="phase-1ere"
              value={selectedPhase}
              onChange={(event) => setSelectedPhase(event.target.value)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"
            >
              <option value="all">Toutes</option>
              {PHASES_1ERE.map((phase) => (
                <option key={phase.key} value={phase.key}>
                  {phase.key}
                </option>
              ))}
            </select>
          </div>
          <input
            type="search"
            placeholder="Rechercher une action, une période, un acteur..."
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

      <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
        {view === "timeline" ? (
          <Timeline1ere grouped={grouped} phases={PHASES_1ERE} />
        ) : (
          <TableViewCompact rows={filtered} />
        )}
      </div>

      <footer className="mt-6 text-xs text-slate-500">
        Données issues du canevas Parcours Avenir 1ère. Dernière mise à jour : {new Date().toISOString().slice(0, 10)}.
      </footer>
    </div>
  );
}
