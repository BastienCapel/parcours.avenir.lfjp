import { normalizeText } from "../../utils/stringUtils.js";

const { useMemo, useState } = React;

export function useOrientationData(dataset, phases, options = {}) {
  const { initialView = "timeline" } = options;
  const [query, setQuery] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("all");
  const [view, setView] = useState(initialView);

  const filtered = useMemo(() => {
    const normalizedQuery = normalizeText(query);

    return dataset
      .filter((entry) => {
        const matchesPhase = selectedPhase === "all" || entry.phase === selectedPhase;
        if (!matchesPhase) return false;

        if (!normalizedQuery) return true;

        const haystack = [
          entry.titre,
          entry.details,
          entry.periode,
          Array.isArray(entry.acteurs) ? entry.acteurs.join(" ") : entry.acteurs,
        ]
          .map(normalizeText)
          .join(" ");

        return haystack.includes(normalizedQuery);
      })
      .sort((a, b) => a.ordre - b.ordre);
  }, [dataset, selectedPhase, query]);

  const grouped = useMemo(() => {
    const phaseIndex = new Map(phases.map((phase, index) => [phase.key, index]));
    const map = new Map();

    for (const item of filtered) {
      if (!map.has(item.phase)) {
        map.set(item.phase, []);
      }
      map.get(item.phase).push(item);
    }

    return Array.from(map.entries()).sort((a, b) => {
      return (phaseIndex.get(a[0]) ?? 0) - (phaseIndex.get(b[0]) ?? 0);
    });
  }, [filtered, phases]);

  return {
    query,
    setQuery,
    selectedPhase,
    setSelectedPhase,
    view,
    setView,
    filtered,
    grouped,
  };
}
