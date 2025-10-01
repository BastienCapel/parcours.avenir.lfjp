export function TableView({ rows }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50/70">
          <tr>
            <Th>Phase</Th>
            <Th>Période</Th>
            <Th>Titre</Th>
            <Th>Détails</Th>
            <Th>Acteurs</Th>
            <Th>Lieu</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white/80">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50/70">
              <Td className="whitespace-nowrap text-slate-700">{row.phase}</Td>
              <Td className="whitespace-nowrap text-slate-700">{row.periode}</Td>
              <Td className="font-medium text-slate-900">{row.titre}</Td>
              <Td className="text-slate-700">{row.details}</Td>
              <Td className="text-slate-700">{row.acteurs.join(", ")}</Td>
              <Td className="text-slate-700">{row.lieu}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TableViewCompact({ rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <Th>Phase</Th>
            <Th>Période</Th>
            <Th>Titre</Th>
            <Th>Détails</Th>
            <Th>Acteurs</Th>
            <Th>Lieu</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50">
              <Td className="whitespace-nowrap text-slate-700">{row.phase}</Td>
              <Td className="whitespace-nowrap text-slate-700">{row.periode}</Td>
              <Td className="font-medium">{row.titre}</Td>
              <Td className="text-slate-700">{row.details}</Td>
              <Td className="text-slate-700">{row.acteurs.join(", ")}</Td>
              <Td className="text-slate-700">{row.lieu}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }) {
  return (
    <th
      scope="col"
      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600"
    >
      {children}
    </th>
  );
}

function Td({ children, className = "" }) {
  return <td className={`px-4 py-3 text-sm ${className}`}>{children}</td>;
}
