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
  const totalActions = DATA_3E.length;
  const phasesCount = PHASES_3E.length;

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500" />
        <div className="absolute inset-y-0 -right-24 h-[140%] w-72 rotate-12 bg-white/20 blur-3xl" />
        <div className="relative grid gap-8 px-8 py-10 text-white lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4 text-white/90 sm:gap-6">
              <img
                src="https://i.imgur.com/0YmGlXO.png"
                alt="Logo du Lycée Français Jacques Prévert de Saly"
                className="h-14 w-auto rounded-2xl bg-white/10 p-2 shadow-lg shadow-indigo-900/40"
                loading="lazy"
                width="96"
                height="96"
              />
              <span className="hidden h-14 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent sm:block" />
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">
                Film annuel de l'orientation
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/15 p-6 shadow-xl backdrop-blur">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Classe de</span>
                <span className="text-5xl font-black leading-none tracking-tight text-white drop-shadow-lg sm:text-6xl">3e</span>
              </div>
              <p className="mt-4 text-base font-medium text-white/90">
                LFJP · Parcours Avenir · Année scolaire 2025‑2026
              </p>
            </div>
            <div className="grid gap-4 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/15 px-4 py-3 shadow-lg shadow-indigo-900/40 backdrop-blur">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M11 3a1 1 0 0 0-2 0v1.382a3 3 0 0 0-1.447.829l-.978-.326a1 1 0 1 0-.632 1.898l.978.326a3.001 3.001 0 0 0 0 1.782l-.978.326a1 1 0 1 0 .632 1.898l.978-.326A3 3 0 0 0 9 11.618V13a1 1 0 1 0 2 0v-1.382a3 3 0 0 0 1.447-.829l.978.326a1 1 0 1 0 .632-1.898l-.978-.326a3 3 0 0 0 0-1.782l.978-.326a1 1 0 0 0-.632-1.898l-.978.326A3 3 0 0 0 11 4.382V3Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Phases</p>
                  <p className="text-lg font-semibold text-white">{phasesCount}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/15 px-4 py-3 shadow-lg shadow-indigo-900/40 backdrop-blur">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M4 5a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .4.2l1.1 1.6h5a2 2 0 0 1 2 2v1H4V5Z" />
                    <path d="M4 9h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Actions planifiées</p>
                  <p className="text-lg font-semibold text-white">{totalActions}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-lg rounded-3xl border border-white/20 bg-white/15 p-6 text-sm text-white shadow-xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Objectif</p>
            <p className="mt-3 text-base leading-relaxed text-white/90">
              Naviguez parmi les actions clés pour préparer l'orientation des élèves de troisième tout au long de l'année.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-100 bg-white px-6 py-4">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="view-3e">
                Vue
              </label>
              <select
                id="view-3e"
                value={view}
                onChange={(event) => setView(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                <option value="timeline">Frise chronologique</option>
                <option value="table">Tableau</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="phase-3e">
                Phase
              </label>
              <select
                id="phase-3e"
                value={selectedPhase}
                onChange={(event) => setSelectedPhase(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
              >
                <option value="all">Toutes</option>
                {PHASES_3E.map((phase) => (
                  <option key={phase.key} value={phase.key}>
                    {phase.key}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2 xl:col-span-1">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="search-3e">
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
                  id="search-3e"
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
          <Timeline3e grouped={grouped} phases={PHASES_3E} />
        ) : (
          <TableView rows={filtered} />
        )}
      </div>

      <footer className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-4 text-xs text-slate-500">
        Données issues du canevas Parcours Avenir 3e. Dernière mise à jour : {new Date().toISOString().slice(0, 10)}.
      </footer>
    </div>
  );
}
