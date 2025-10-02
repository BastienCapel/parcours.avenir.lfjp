import { DATA_TERMINALE, PHASES_TERMINALE } from "../../data/filmAnnuelTerminale.js";
import { TableViewCompact } from "../Table.js";
import { TimelineTerminale } from "./TimelineTerminale.js";
import { useOrientationData } from "./useOrientationData.js";

export function OrientationTerminale() {
  const {
    query,
    setQuery,
    selectedPhase,
    setSelectedPhase,
    view,
    setView,
    filtered,
    grouped,
  } = useOrientationData(DATA_TERMINALE, PHASES_TERMINALE);

  const printPage = () => window.print();
  const totalActions = DATA_TERMINALE.length;
  const phasesCount = PHASES_TERMINALE.length;

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <header className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-rose-50 via-white to-slate-100 px-6 py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <img
                  src="https://i.imgur.com/0YmGlXO.png"
                  alt="Logo du Lycée Français Jacques Prévert de Saly"
                  className="h-14 w-auto"
                  loading="lazy"
                  width="96"
                  height="96"
                />
                <span className="hidden h-14 w-px bg-gradient-to-b from-transparent via-rose-200 to-transparent sm:block" />
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500 text-3xl font-bold text-white shadow-lg shadow-rose-200">
                    Tle
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-rose-600">Film annuel de l'orientation</p>
                    <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">Classe de Terminale</h3>
                    <p className="text-sm text-slate-600">LFJP · Parcours Avenir · Année scolaire 2025‑2026</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d="M11 3a1 1 0 0 0-2 0v1.382a3 3 0 0 0-1.447.829l-.978-.326a1 1 0 1 0-.632 1.898l.978.326a3.001 3.001 0 0 0 0 1.782l-.978.326a1 1 0 1 0 .632 1.898l.978-.326A3 3 0 0 0 9 11.618V13a1 1 0 1 0 2 0v-1.382a3 3 0 0 0 1.447-.829l.978.326a1 1 0 1 0 .632-1.898l-.978-.326a3 3 0 0 0 0-1.782l.978-.326a1 1 0 0 0-.632-1.898l-.978.326A3 3 0 0 0 11 4.382V3Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Phases</p>
                    <p className="text-lg font-semibold text-slate-900">{phasesCount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d="M4 5a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .4.2l1.1 1.6h5a2 2 0 0 1 2 2v1H4V5Z" />
                      <path d="M4 9h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Actions planifiées</p>
                    <p className="text-lg font-semibold text-slate-900">{totalActions}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-md rounded-2xl border border-white/60 bg-white/80 px-5 py-4 text-sm text-slate-600 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Objectif</p>
              <p className="mt-1 leading-relaxed text-slate-700">
                Coordonnez les étapes finales d'orientation pour accompagner les élèves de terminale vers l'enseignement supérieur.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 bg-white px-6 py-4">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="view-terminale">
                Vue
              </label>
              <select
                id="view-terminale"
                value={view}
                onChange={(event) => setView(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              >
                <option value="timeline">Frise chronologique</option>
                <option value="table">Tableau</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="phase-terminale">
                Phase
              </label>
              <select
                id="phase-terminale"
                value={selectedPhase}
                onChange={(event) => setSelectedPhase(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
              >
                <option value="all">Toutes</option>
                {PHASES_TERMINALE.map((phase) => (
                  <option key={phase.key} value={phase.key}>
                    {phase.key}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2 xl:col-span-1">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="search-terminale">
                Recherche
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 1 0 3.356 9.9l3.122 3.122a.75.75 0 1 0 1.06-1.06l-3.122-3.123A5.5 5.5 0 0 0 9 3.5Zm-4 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  id="search-terminale"
                  type="search"
                  placeholder="Rechercher une action, une période, un acteur..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2 xl:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Export</span>
              <button
                type="button"
                onClick={printPage}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M6 2a2 2 0 0 0-2 2v2h2V4h8v2h2V4a2 2 0 0 0-2-2H6Z" />
                  <path d="M4 7a2 2 0 0 0-2 2v4h3v3h10v-3h3V9a2 2 0 0 0-2-2H4Zm10 8H6v-4h8v4Z" />
                </svg>
                Imprimer / PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
        {view === "timeline" ? (
          <TimelineTerminale grouped={grouped} phases={PHASES_TERMINALE} />
        ) : (
          <TableViewCompact rows={filtered} />
        )}
      </div>

      <footer className="text-xs text-slate-500">
        Données issues du canevas Parcours Avenir Terminale. Dernière mise à jour :
        {" "}
        {new Date().toISOString().slice(0, 10)}.
      </footer>
    </div>
  );
}
