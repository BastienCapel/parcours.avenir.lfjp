(() => {
  // scripts/data/filmAnnuel3e.js
  var DATA_3E = [
    // Mieux se connaître
    {
      id: "enjeux-3e",
      phase: "Mieux se conna\xEEtre",
      titre: "Pr\xE9sentation des enjeux de la 3e",
      details: "Objectifs de l'ann\xE9e, calendrier de l'orientation, attentes et livrables.",
      periode: "Septembre",
      ordre: 20250910,
      acteurs: ["PP", "PRIO", "\xC9l\xE8ves"],
      lieu: "LFJP \u2014 Vie de classe"
    },
    {
      id: "bilan-competences",
      phase: "Mieux se conna\xEEtre",
      titre: "Bilans de comp\xE9tences (entretiens individuels)",
      details: "Identifier comp\xE9tences scolaires et extra-scolaires. Aider \xE0 amorcer le projet.",
      periode: "Toute l'ann\xE9e",
      ordre: 20250915,
      acteurs: ["PRIO", "\xC9l\xE8ves"],
      lieu: "Bureau orientation S9 / AP"
    },
    {
      id: "tests-interets",
      phase: "Mieux se conna\xEEtre",
      titre: "Go\xFBts et int\xE9r\xEAts (tests ONISEP, Kledou)",
      details: "Exploration des int\xE9r\xEAts et qualit\xE9s. Restitution et pistes de m\xE9tiers.",
      periode: "Septembre\u2013Novembre",
      ordre: 20250920,
      acteurs: ["PRIO", "\xC9l\xE8ves"],
      lieu: "Bureau orientation / AP"
    },
    {
      id: "autoportrait-slam",
      phase: "Mieux se conna\xEEtre",
      titre: "Ateliers autoportrait \u2014 projet \u2018\xC9chos slam\xE9s de nos Avenirs\u2019",
      details: "Production artistique avec Fran\xE7ais/Arts/Musique et artistes locaux.",
      periode: "Septembre\u2013Novembre",
      ordre: 20250925,
      acteurs: ["Fran\xE7ais", "Arts", "Musique", "Artistes locaux"],
      lieu: "LFJP"
    },
    {
      id: "definition-parcours",
      phase: "Mieux se conna\xEEtre",
      titre: "D\xE9finir le Parcours Avenir (brainstorming + oraux)",
      details: "Construction partag\xE9e des attendus et jalons de l'ann\xE9e.",
      periode: "Septembre\u2013Octobre",
      ordre: 20250926,
      acteurs: ["\xC9l\xE8ves", "PP", "PRIO"],
      lieu: "Heure de vie de classe"
    },
    {
      id: "prepa-stage",
      phase: "Mieux se conna\xEEtre",
      titre: "Pr\xE9paration et recherche du stage d\xE9couverte",
      details: "Lettre de motivation, ciblage des entreprises, candidatures, simulation d'entretiens.",
      periode: "Septembre\u2013Novembre",
      ordre: 20250927,
      acteurs: ["PRIO", "\xC9l\xE8ves"],
      lieu: "Bureau orientation / AP"
    },
    {
      id: "forum-metiers",
      phase: "Mieux se conna\xEEtre",
      titre: "Forum des M\xE9tiers (obligatoire) + restitution Slam",
      details: "Rencontres avec professionnels. Valorisation des productions.",
      periode: "29 novembre",
      ordre: 20251129,
      acteurs: ["Professionnels", "PP", "PRIO"],
      lieu: "LFJP"
    },
    {
      id: "info-parents",
      phase: "Mieux se conna\xEEtre",
      titre: "Info parents \u2014 voies post\u20113e, calendrier, proc\xE9dure",
      details: "Pr\xE9sentation Bac g\xE9n\xE9ral / Bac pro / CAP. Calendrier et affectation.",
      periode: "11 novembre",
      ordre: 20251111,
      acteurs: ["PP", "PRIO"],
      lieu: "LFJP"
    },
    {
      id: "info-eleves",
      phase: "Mieux se conna\xEEtre",
      titre: "Info \xE9l\xE8ves \u2014 cap sur l'orientation",
      details: "Questions/r\xE9ponses. Organisation Forum et stage.",
      periode: "Novembre",
      ordre: 20251120,
      acteurs: ["PRIO", "\xC9l\xE8ves"],
      lieu: "Vie de classe"
    },
    // Plonger dans le monde professionnel
    {
      id: "stage-decouverte",
      phase: "Plonger dans le monde professionnel",
      titre: "Stage de d\xE9couverte en entreprise",
      details: "D\xE9couverte d'un milieu professionnel. Observation et prise de notes.",
      periode: "15\u201319 d\xE9cembre",
      ordre: 20251215,
      acteurs: ["\xC9l\xE8ves"],
      lieu: "Entreprise"
    },
    {
      id: "suivi-stage",
      phase: "Plonger dans le monde professionnel",
      titre: "Suivi de stage et accompagnement",
      details: "Point d'\xE9tape individuel pendant le stage si n\xE9cessaire.",
      periode: "D\xE9cembre (\xE0 la demande)",
      ordre: 20251217,
      acteurs: ["PP", "\xC9quipe p\xE9dagogique", "PRIO"],
      lieu: "LFJP / Entreprise"
    },
    {
      id: "rapport-stage",
      phase: "Plonger dans le monde professionnel",
      titre: "R\xE9daction du rapport de stage",
      details: "Structuration, analyse d'exp\xE9rience, mise en forme.",
      periode: "D\xE8s d\xE9cembre",
      ordre: 20251220,
      acteurs: ["PP", "PRIO"],
      lieu: "Bureau orientation / AP"
    },
    {
      id: "soutenance-stage",
      phase: "Plonger dans le monde professionnel",
      titre: "Aide \xE0 la soutenance orale",
      details: "Pr\xE9paration diaporama, posture, grille d'\xE9valuation.",
      periode: "D\xE8s d\xE9cembre",
      ordre: 20251222,
      acteurs: ["PRIO"],
      lieu: "Bureau orientation"
    },
    {
      id: "mini-stages",
      phase: "Plonger dans le monde professionnel",
      titre: "Mini\u2011stages CAP/Bac Pro pour profils cibl\xE9s",
      details: "Immersions courtes dans des lyc\xE9es pro pour affiner le projet.",
      periode: "\xC0 la demande (d\xE8s d\xE9cembre)",
      ordre: 20251223,
      acteurs: ["PP", "PRIO", "CPE"],
      lieu: "\xC9tablissements partenaires"
    },
    {
      id: "ouverture-pro",
      phase: "Plonger dans le monde professionnel",
      titre: "D\xE9couverte d'entreprises locales et \xE9coles",
      details: "Visites, interventions, t\xE9moignages de professionnels.",
      periode: "Toute l'ann\xE9e",
      ordre: 20260110,
      acteurs: ["\xC9quipe p\xE9dagogique", "PP", "PRIO"],
      lieu: "LFJP / Ext\xE9rieurs"
    },
    {
      id: "immersion-arts-numerique",
      phase: "Plonger dans le monde professionnel",
      titre: "Immersion \xAB arts et m\xE9tiers du num\xE9rique \xBB + expo Les Man\xE8ges",
      details: "Sortie p\xE9dagogique co-port\xE9e par Eve Capel et Roselyne D\u2019Aquino : visite d\u2019un Institut sup\xE9rieur des arts et des m\xE9tiers du Num\xE9rique \xE0 Dakar puis visite d\u2019une exposition \xE0 la galerie Les Man\xE8ges. Objectif : d\xE9couverte des m\xE9tiers de l\u2019art et du num\xE9rique, liens formation-emploi, ouverture culturelle.",
      periode: "T2 2025\u20112026 (\xE0 confirmer)",
      ordre: 20260205,
      acteurs: [
        "Eve Capel",
        "Roselyne D\u2019Aquino",
        "Galerie Les Man\xE8ges",
        "Entreprises/\xE9coles locales"
      ],
      lieu: "Dakar \u2014 Institut sup\xE9rieur des arts et des m\xE9tiers du Num\xE9rique & Galerie Les Man\xE8ges"
    },
    // Finaliser les projets
    {
      id: "suivi-affectation",
      phase: "Finaliser les projets",
      titre: "Suivi individuel et proc\xE9dures d'affectation",
      details: "Consolider le projet des \xE9l\xE8ves vers voies techno/pro ou g\xE9n\xE9rale.",
      periode: "Mars\u2013Juin",
      ordre: 20260310,
      acteurs: ["PP", "PRIO", "CPE", "Parents"],
      lieu: "LFJP"
    },
    {
      id: "affelnet",
      phase: "Finaliser les projets",
      titre: "AFFELNET \u2014 finalisation et saisie",
      details: "Accompagnement \xE0 la saisie et v\xE9rifications finales.",
      periode: "Mai\u2013fin juin",
      ordre: 20260520,
      acteurs: ["PRIO"],
      lieu: "LFJP"
    }
  ];
  var PHASES_3E = [
    { key: "Mieux se conna\xEEtre", color: "bg-sky-100 border-sky-300" },
    {
      key: "Plonger dans le monde professionnel",
      color: "bg-emerald-100 border-emerald-300"
    },
    { key: "Finaliser les projets", color: "bg-amber-100 border-amber-300" }
  ];

  // scripts/components/Table.js
  function TableView({ rows }) {
    return /* @__PURE__ */ React.createElement("div", { className: "overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm" }, /* @__PURE__ */ React.createElement("table", { className: "min-w-full divide-y divide-slate-200" }, /* @__PURE__ */ React.createElement("thead", { className: "bg-slate-50/70" }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(Th, null, "Phase"), /* @__PURE__ */ React.createElement(Th, null, "P\xE9riode"), /* @__PURE__ */ React.createElement(Th, null, "Titre"), /* @__PURE__ */ React.createElement(Th, null, "D\xE9tails"), /* @__PURE__ */ React.createElement(Th, null, "Acteurs"), /* @__PURE__ */ React.createElement(Th, null, "Lieu"))), /* @__PURE__ */ React.createElement("tbody", { className: "divide-y divide-slate-100 bg-white/80" }, rows.map((row) => /* @__PURE__ */ React.createElement("tr", { key: row.id, className: "hover:bg-slate-50/70" }, /* @__PURE__ */ React.createElement(Td, { className: "whitespace-nowrap text-slate-700" }, row.phase), /* @__PURE__ */ React.createElement(Td, { className: "whitespace-nowrap text-slate-700" }, row.periode), /* @__PURE__ */ React.createElement(Td, { className: "font-medium text-slate-900" }, row.titre), /* @__PURE__ */ React.createElement(Td, { className: "text-slate-700" }, row.details), /* @__PURE__ */ React.createElement(Td, { className: "text-slate-700" }, row.acteurs.join(", ")), /* @__PURE__ */ React.createElement(Td, { className: "text-slate-700" }, row.lieu))))));
  }
  function TableViewCompact({ rows }) {
    return /* @__PURE__ */ React.createElement("div", { className: "overflow-hidden rounded-2xl border" }, /* @__PURE__ */ React.createElement("table", { className: "min-w-full divide-y divide-slate-200" }, /* @__PURE__ */ React.createElement("thead", { className: "bg-slate-50" }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(Th, null, "Phase"), /* @__PURE__ */ React.createElement(Th, null, "P\xE9riode"), /* @__PURE__ */ React.createElement(Th, null, "Titre"), /* @__PURE__ */ React.createElement(Th, null, "D\xE9tails"), /* @__PURE__ */ React.createElement(Th, null, "Acteurs"), /* @__PURE__ */ React.createElement(Th, null, "Lieu"))), /* @__PURE__ */ React.createElement("tbody", { className: "divide-y divide-slate-100 bg-white" }, rows.map((row) => /* @__PURE__ */ React.createElement("tr", { key: row.id, className: "hover:bg-slate-50" }, /* @__PURE__ */ React.createElement(Td, { className: "whitespace-nowrap text-slate-700" }, row.phase), /* @__PURE__ */ React.createElement(Td, { className: "whitespace-nowrap text-slate-700" }, row.periode), /* @__PURE__ */ React.createElement(Td, { className: "font-medium" }, row.titre), /* @__PURE__ */ React.createElement(Td, { className: "text-slate-700" }, row.details), /* @__PURE__ */ React.createElement(Td, { className: "text-slate-700" }, row.acteurs.join(", ")), /* @__PURE__ */ React.createElement(Td, { className: "text-slate-700" }, row.lieu))))));
  }
  function Th({ children }) {
    return /* @__PURE__ */ React.createElement(
      "th",
      {
        scope: "col",
        className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600"
      },
      children
    );
  }
  function Td({ children, className = "" }) {
    return /* @__PURE__ */ React.createElement("td", { className: `px-4 py-3 text-sm ${className}` }, children);
  }

  // scripts/components/Icon.js
  function Icon({ name, className }) {
    const paths = {
      users: "M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M7 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
      "map-pin": "M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      flag: "M4 15V3a1 1 0 0 1 1-1h10l-1 3 4 .5V15l-4-.5-1 3H5a1 1 0 0 1-1-1Z"
    };
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        "aria-hidden": "true"
      },
      /* @__PURE__ */ React.createElement("path", { d: paths[name] || paths.flag })
    );
  }

  // scripts/components/Badge.js
  function Badge({ icon, label }) {
    return /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 text-[11px] shadow-sm ring-1 ring-slate-300" }, /* @__PURE__ */ React.createElement(Icon, { name: icon, className: "h-3 w-3" }), /* @__PURE__ */ React.createElement("span", null, label));
  }

  // scripts/utils/stringUtils.js
  function classNames(...values) {
    return values.filter(Boolean).join(" ");
  }
  function normalizeText(value) {
    return (value || "").replace(/[\u00A0\u202F]/g, " ").replace(/[\u2010-\u2015]/g, "-").replace(/[\u2018\u2019\u201B]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/-/g, " ").replace(/\s{2,}/g, " ").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").trim();
  }

  // scripts/components/orientation/Timeline3e.js
  function Timeline3e({ grouped, phases }) {
    return /* @__PURE__ */ React.createElement("div", { className: "space-y-12" }, grouped.map(([title, items]) => {
      const phaseMeta = phases.find((phase) => phase.key === title);
      return /* @__PURE__ */ React.createElement("section", { key: title, className: "rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm" }, /* @__PURE__ */ React.createElement("header", { className: "mb-4 flex flex-wrap items-center justify-between gap-3" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold text-slate-900" }, title), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold uppercase tracking-wide text-slate-600" }, items.length, " action", items.length > 1 ? "s" : "")), /* @__PURE__ */ React.createElement("div", { className: "relative pl-6" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-2 top-0 h-full w-px bg-slate-200", "aria-hidden": true }), /* @__PURE__ */ React.createElement("ul", { className: "space-y-6" }, items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item.id, className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-white ring-2 ring-slate-300", "aria-hidden": true }), /* @__PURE__ */ React.createElement(
        "article",
        {
          className: classNames(
            "rounded-2xl border p-5 shadow-sm transition hover:shadow-md",
            phaseMeta?.color
          )
        },
        /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-baseline justify-between gap-2" }, /* @__PURE__ */ React.createElement("h4", { className: "font-semibold text-slate-900" }, item.titre), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold uppercase tracking-wide text-slate-700" }, item.periode)),
        /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-sm text-slate-700" }, item.details),
        /* @__PURE__ */ React.createElement("div", { className: "mt-3 flex flex-wrap gap-2 text-xs text-slate-600" }, /* @__PURE__ */ React.createElement(Badge, { icon: "users", label: item.acteurs.join(", ") }), /* @__PURE__ */ React.createElement(Badge, { icon: "map-pin", label: item.lieu }), /* @__PURE__ */ React.createElement(Badge, { icon: "flag", label: item.phase }))
      ))))));
    }));
  }

  // scripts/components/orientation/useOrientationData.js
  var { useMemo, useState } = React;
  function useOrientationData(dataset, phases, options = {}) {
    const { initialView = "timeline" } = options;
    const [query, setQuery] = useState("");
    const [selectedPhase, setSelectedPhase] = useState("all");
    const [view, setView] = useState(initialView);
    const filtered = useMemo(() => {
      const normalizedQuery = normalizeText(query);
      return dataset.filter((entry) => {
        const matchesPhase = selectedPhase === "all" || entry.phase === selectedPhase;
        if (!matchesPhase) return false;
        if (!normalizedQuery) return true;
        const haystack = [
          entry.titre,
          entry.details,
          entry.periode,
          Array.isArray(entry.acteurs) ? entry.acteurs.join(" ") : entry.acteurs
        ].map(normalizeText).join(" ");
        return haystack.includes(normalizedQuery);
      }).sort((a, b) => a.ordre - b.ordre);
    }, [dataset, selectedPhase, query]);
    const grouped = useMemo(() => {
      const phaseIndex = new Map(phases.map((phase, index) => [phase.key, index]));
      const map = /* @__PURE__ */ new Map();
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
      grouped
    };
  }

  // scripts/components/orientation/Orientation3e.js
  function Orientation3e() {
    const {
      query,
      setQuery,
      selectedPhase,
      setSelectedPhase,
      view,
      setView,
      filtered,
      grouped
    } = useOrientationData(DATA_3E, PHASES_3E);
    const printPage = () => window.print();
    const totalActions = DATA_3E.length;
    const phasesCount = PHASES_3E.length;
    return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-7xl space-y-6 p-6" }, /* @__PURE__ */ React.createElement("header", { className: "relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-y-0 -right-24 h-[140%] w-72 rotate-12 bg-white/20 blur-3xl" }), /* @__PURE__ */ React.createElement("div", { className: "relative grid gap-8 px-8 py-10 text-white lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center gap-4 text-white/90 sm:gap-6" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://i.imgur.com/0YmGlXO.png",
        alt: "Logo du Lyc\xE9e Fran\xE7ais Jacques Pr\xE9vert de Saly",
        className: "h-14 w-auto rounded-2xl bg-white/10 p-2 shadow-lg shadow-indigo-900/40",
        loading: "lazy",
        width: "96",
        height: "96"
      }
    ), /* @__PURE__ */ React.createElement("span", { className: "hidden h-14 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent sm:block" }), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium uppercase tracking-[0.4em] text-white/70" }, "Film annuel de l'orientation")), /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl border border-white/20 bg-white/15 p-6 shadow-xl backdrop-blur" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-baseline gap-x-4 gap-y-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold uppercase tracking-[0.5em] text-white/60" }, "Classe de"), /* @__PURE__ */ React.createElement("span", { className: "text-5xl font-black leading-none tracking-tight text-white drop-shadow-lg sm:text-6xl" }, "3e")), /* @__PURE__ */ React.createElement("p", { className: "mt-4 text-base font-medium text-white/90" }, "LFJP \xB7 Parcours Avenir \xB7 Ann\xE9e scolaire 2025\u20112026")), /* @__PURE__ */ React.createElement("div", { className: "grid gap-4 text-sm sm:grid-cols-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/15 px-4 py-3 shadow-lg shadow-indigo-900/40 backdrop-blur" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5" }, /* @__PURE__ */ React.createElement("path", { d: "M11 3a1 1 0 0 0-2 0v1.382a3 3 0 0 0-1.447.829l-.978-.326a1 1 0 1 0-.632 1.898l.978.326a3.001 3.001 0 0 0 0 1.782l-.978.326a1 1 0 1 0 .632 1.898l.978-.326A3 3 0 0 0 9 11.618V13a1 1 0 1 0 2 0v-1.382a3 3 0 0 0 1.447-.829l.978.326a1 1 0 1 0 .632-1.898l-.978-.326a3 3 0 0 0 0-1.782l.978-.326a1 1 0 0 0-.632-1.898l-.978.326A3 3 0 0 0 11 4.382V3Z" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold uppercase tracking-wide text-white/70" }, "Phases"), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-semibold text-white" }, phasesCount))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/15 px-4 py-3 shadow-lg shadow-indigo-900/40 backdrop-blur" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5" }, /* @__PURE__ */ React.createElement("path", { d: "M4 5a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .4.2l1.1 1.6h5a2 2 0 0 1 2 2v1H4V5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M4 9h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold uppercase tracking-wide text-white/70" }, "Actions planifi\xE9es"), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-semibold text-white" }, totalActions))))), /* @__PURE__ */ React.createElement("div", { className: "max-w-lg rounded-3xl border border-white/20 bg-white/15 p-6 text-sm text-white shadow-xl backdrop-blur" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold uppercase tracking-wide text-white/70" }, "Objectif"), /* @__PURE__ */ React.createElement("p", { className: "mt-3 text-base leading-relaxed text-white/90" }, "Naviguez parmi les actions cl\xE9s pour pr\xE9parer l'orientation des \xE9l\xE8ves de troisi\xE8me tout au long de l'ann\xE9e."))), /* @__PURE__ */ React.createElement("div", { className: "border-t border-slate-100 bg-white px-6 py-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_auto]" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "view-3e" }, "Vue"), /* @__PURE__ */ React.createElement(
      "select",
      {
        id: "view-3e",
        value: view,
        onChange: (event) => setView(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
      },
      /* @__PURE__ */ React.createElement("option", { value: "timeline" }, "Frise chronologique"),
      /* @__PURE__ */ React.createElement("option", { value: "table" }, "Tableau")
    )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "phase-3e" }, "Phase"), /* @__PURE__ */ React.createElement(
      "select",
      {
        id: "phase-3e",
        value: selectedPhase,
        onChange: (event) => setSelectedPhase(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
      },
      /* @__PURE__ */ React.createElement("option", { value: "all" }, "Toutes"),
      PHASES_3E.map((phase) => /* @__PURE__ */ React.createElement("option", { key: phase.key, value: phase.key }, phase.key))
    )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1 sm:col-span-2 xl:col-span-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "search-3e" }, "Recherche"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("span", { className: "pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        fillRule: "evenodd",
        d: "M9 3.5a5.5 5.5 0 1 0 3.356 9.9l3.122 3.122a.75.75 0 1 0 1.06-1.06l-3.122-3.123A5.5 5.5 0 0 0 9 3.5Zm-4 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
        clipRule: "evenodd"
      }
    ))), /* @__PURE__ */ React.createElement(
      "input",
      {
        id: "search-3e",
        type: "search",
        placeholder: "Rechercher une action, une p\xE9riode, un acteur...",
        value: query,
        onChange: (event) => setQuery(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1 sm:col-span-2 xl:col-span-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500" }, "Export"), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: printPage,
        className: "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
      },
      /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4" }, /* @__PURE__ */ React.createElement("path", { d: "M6 2a2 2 0 0 0-2 2v2h2V4h8v2h2V4a2 2 0 0 0-2-2H6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M4 7a2 2 0 0 0-2 2v4h3v3h10v-3h3V9a2 2 0 0 0-2-2H4Zm10 8H6v-4h8v4Z" })),
      "Imprimer / PDF"
    ))))), /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm" }, view === "timeline" ? /* @__PURE__ */ React.createElement(Timeline3e, { grouped, phases: PHASES_3E }) : /* @__PURE__ */ React.createElement(TableView, { rows: filtered })), /* @__PURE__ */ React.createElement("footer", { className: "rounded-3xl border border-dashed border-slate-300 bg-white/80 p-4 text-xs text-slate-500" }, "Donn\xE9es issues du canevas Parcours Avenir 3e. Derni\xE8re mise \xE0 jour : ", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), "."));
  }

  // scripts/data/filmAnnuel2nde.js
  var DATA_2NDE = [
    {
      id: "reunion-parents-2nde",
      phase: "Conna\xEEtre les voies post\u20112de",
      titre: "R\xE9union d'information parents \u2014 voies, sp\xE9cialit\xE9s, proc\xE9dures",
      details: "Pr\xE9sentation des enjeux de la 2de, calendrier orientation, AGORA Monde, ADN\u2011AEFE, proc\xE9dures d\u2019affectation post\u20112de.",
      periode: "13 novembre",
      ordre: 20251113,
      acteurs: ["PP", "Profs de sp\xE9cialit\xE9s", "PRIO"],
      lieu: "LFJP \xB7 Salle polyvalente"
    },
    {
      id: "powerpoint-choisir-bac",
      phase: "Conna\xEEtre les voies post\u20112de",
      titre: "Ressource: \u2018Apr\xE8s la 2de, choisir son bac et ses sp\xE9cialit\xE9s\u2019",
      details: "Appui pour comprendre la voie g\xE9n\xE9rale et la voie technologique.",
      periode: "Novembre",
      ordre: 20251114,
      acteurs: ["PRIO", "PP"],
      lieu: "En classe / ENT"
    },
    {
      id: "diag-5mn",
      phase: "Mieux se conna\xEEtre & construire",
      titre: "Entretien diagnostic 5 min pour chaque \xE9l\xE8ve",
      details: "\xC9tat des lieux rapide. Rep\xE9rage des besoins. Priorisation du suivi.",
      periode: "Septembre\u2013Octobre",
      ordre: 20250920,
      acteurs: ["PP", "PRIO"],
      lieu: "Bureau orientation S9 / HVC"
    },
    {
      id: "entretiens-individuels",
      phase: "Mieux se conna\xEEtre & construire",
      titre: "Entretiens individuels d'orientation",
      details: "Aider \xE0 s\u2019informer sur secteurs, domaines, formations. Amorcer une r\xE9flexion coh\xE9rente avec le projet post\u20112de. Suivi renforc\xE9 pour \xE9l\xE8ves en difficult\xE9.",
      periode: "Toute l'ann\xE9e",
      ordre: 20251001,
      acteurs: ["PP", "PRIO"],
      lieu: "Bureau orientation S9 / HVC"
    },
    {
      id: "test-kledou",
      phase: "Mieux se conna\xEEtre & construire",
      titre: "Test d\u2019orientation Kledou pour tous",
      details: "Identifier int\xE9r\xEAts et pistes de parcours de formation.",
      periode: "Octobre",
      ordre: 20251015,
      acteurs: ["PRIO"],
      lieu: "CDI / HVC"
    },
    {
      id: "agora-inscription",
      phase: "Mieux se conna\xEEtre & construire",
      titre: "Inscription obligatoire sur AGORA Monde",
      details: "S\u2019informer et \xE9changer avec le r\xE9seau AEFE.",
      periode: "Octobre",
      ordre: 20251020,
      acteurs: ["PP", "PRIO"],
      lieu: "En classe / \xC0 la maison"
    },
    {
      id: "identifier-hypotheses",
      phase: "Mieux se conna\xEEtre & construire",
      titre: "Identifier les premi\xE8res hypoth\xE8ses de choix",
      details: "Compl\xE9ter la fiche \u2018choix des sp\xE9cialit\xE9s\u2019.",
      periode: "Janvier\u2013F\xE9vrier",
      ordre: 20260131,
      acteurs: ["\xC9l\xE8ves", "PP", "PRIO"],
      lieu: "Heure de vie de classe"
    },
    {
      id: "forum-metiers-2nde",
      phase: "Explorer m\xE9tiers",
      titre: "Participation obligatoire au Forum des m\xE9tiers du LFJP",
      details: "Rencontres professionnelles, stands, \xE9changes.",
      periode: "29 novembre",
      ordre: 20251129,
      acteurs: ["Parents d'\xE9l\xE8ves", "Intervenants ext.", "PP", "PRIO"],
      lieu: "LFJP \xB7 Forum"
    },
    {
      id: "recherche-stage",
      phase: "Explorer m\xE9tiers",
      titre: "Recherche du stage d\xE9couverte (ciblage, convention)",
      details: "Candidatures, conventions, suivi.",
      periode: "Janvier\u2013Mars / Avril\u2013Mai",
      ordre: 20260115,
      acteurs: ["PP", "CPE", "PRIO", "Parents"],
      lieu: "LFJP / \xC0 la maison"
    },
    {
      id: "stage-decouverte-2nde",
      phase: "Explorer m\xE9tiers",
      titre: "Stage de d\xE9couverte m\xE9tier",
      details: "Observation d\u2019un milieu pro. Tenue d\u2019un carnet d\u2019exp\xE9rience.",
      periode: "Juin",
      ordre: 20260610,
      acteurs: ["\xC9l\xE8ves"],
      lieu: "Ext\xE9rieur"
    },
    {
      id: "oral-stage-2nde",
      phase: "Explorer m\xE9tiers",
      titre: "Oral de stage de d\xE9couverte",
      details: "Pr\xE9paration diaporama, grille, soutenance.",
      periode: "Juin",
      ordre: 20260620,
      acteurs: ["PP", "PRIO"],
      lieu: "LFJP"
    },
    {
      id: "visites-entreprises",
      phase: "Explorer m\xE9tiers",
      titre: "Visites d\u2019entreprises locales et projets p\xE9dagogiques",
      details: "Interventions, d\xE9placements, t\xE9moignages.",
      periode: "Toute l'ann\xE9e",
      ordre: 20251210,
      acteurs: ["\xC9quipe p\xE9dagogique", "PP", "PRIO"],
      lieu: "LFJP / Ext\xE9rieur"
    },
    {
      id: "immersion-specialites",
      phase: "Choisir ses sp\xE9cialit\xE9s",
      titre: "S\xE9ances d\u2019immersion dans les sp\xE9cialit\xE9s",
      details: "D\xE9couverte des attendus. T\xE9moignages d\u2019\xE9l\xE8ves de 1re et Tle.",
      periode: "F\xE9vrier\u2013Mars",
      ordre: 20260301,
      acteurs: ["Professeurs de sp\xE9cialit\xE9s"],
      lieu: "LFJP"
    },
    {
      id: "reunion-specialites-2",
      phase: "Choisir ses sp\xE9cialit\xE9s",
      titre: "2\u1D49 r\xE9union d'information sp\xE9cialit\xE9s et STMG",
      details: "Voie g\xE9n\xE9rale et bacs technologiques. Proc\xE9dures d\u2019affectation.",
      periode: "Mars",
      ordre: 20260320,
      acteurs: ["PP", "Profs de sp\xE9cialit\xE9s", "PRIO", "Parents"],
      lieu: "LFJP"
    },
    {
      id: "adn-presentation",
      phase: "ADN\u2011AEFE",
      titre: "Pr\xE9sentation ADN\u2011AEFE aux familles",
      details: "M\xE9canisme d\u2019\xE9changes scolaires. Candidatures et crit\xE8res.",
      periode: "Novembre",
      ordre: 20251110,
      acteurs: ["CPE", "PP", "PRIO"],
      lieu: "LFJP"
    },
    {
      id: "adn-entretiens",
      phase: "ADN\u2011AEFE",
      titre: "Entretiens de validation des candidatures ADN",
      details: "V\xE9rification des dossiers. Avis et priorisation.",
      periode: "Novembre\u2013D\xE9cembre",
      ordre: 20251205,
      acteurs: ["Proviseur", "CPE", "PP", "PRIO"],
      lieu: "LFJP"
    }
  ];
  var PHASES_2NDE = [
    { key: "Conna\xEEtre les voies post\u20112de", color: "bg-sky-100 border-sky-300" },
    { key: "Mieux se conna\xEEtre & construire", color: "bg-emerald-100 border-emerald-300" },
    { key: "Explorer m\xE9tiers", color: "bg-amber-100 border-amber-300" },
    { key: "Choisir ses sp\xE9cialit\xE9s", color: "bg-fuchsia-100 border-fuchsia-300" },
    { key: "ADN\u2011AEFE", color: "bg-indigo-100 border-indigo-300" }
  ];

  // scripts/components/orientation/Timeline2nde.js
  function Timeline2nde({ grouped, phases }) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-8" }, grouped.map(([title, items]) => {
      const phaseMeta = phases.find((phase) => phase.key === title);
      return /* @__PURE__ */ React.createElement("section", { key: title }, /* @__PURE__ */ React.createElement("h2", { className: "mb-3 text-lg font-semibold" }, title), /* @__PURE__ */ React.createElement("div", { className: "relative pl-6" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-2 top-0 h-full w-px bg-slate-200", "aria-hidden": true }), /* @__PURE__ */ React.createElement("ul", { className: "space-y-4" }, items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item.id, className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-white ring-2 ring-slate-300", "aria-hidden": true }), /* @__PURE__ */ React.createElement("article", { className: classNames("rounded-2xl border p-4", phaseMeta?.color) }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-baseline justify-between gap-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-medium" }, item.titre), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-slate-700" }, item.periode)), /* @__PURE__ */ React.createElement("p", { className: "mt-1 text-sm text-slate-700" }, item.details), /* @__PURE__ */ React.createElement("div", { className: "mt-2 flex flex-wrap gap-2 text-xs text-slate-600" }, /* @__PURE__ */ React.createElement(Badge, { icon: "users", label: item.acteurs.join(", ") }), /* @__PURE__ */ React.createElement(Badge, { icon: "map-pin", label: item.lieu }), /* @__PURE__ */ React.createElement(Badge, { icon: "flag", label: item.phase }))))))));
    }));
  }

  // scripts/components/orientation/Orientation2nde.js
  function Orientation2nde() {
    const {
      query,
      setQuery,
      selectedPhase,
      setSelectedPhase,
      view,
      setView,
      filtered,
      grouped
    } = useOrientationData(DATA_2NDE, PHASES_2NDE);
    const printPage = () => window.print();
    const totalActions = DATA_2NDE.length;
    const phasesCount = PHASES_2NDE.length;
    return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-7xl space-y-6 p-6" }, /* @__PURE__ */ React.createElement("header", { className: "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-sky-50 via-white to-emerald-50 px-6 py-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center gap-4 sm:gap-6" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://i.imgur.com/0YmGlXO.png",
        alt: "Logo du Lyc\xE9e Fran\xE7ais Jacques Pr\xE9vert de Saly",
        className: "h-14 w-auto",
        loading: "lazy",
        width: "96",
        height: "96"
      }
    ), /* @__PURE__ */ React.createElement("span", { className: "hidden h-14 w-px bg-gradient-to-b from-transparent via-sky-200 to-transparent sm:block" }), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500 text-3xl font-bold text-white shadow-lg shadow-sky-200" }, "2nde"), /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold uppercase tracking-widest text-sky-600" }, "Film annuel de l'orientation"), /* @__PURE__ */ React.createElement("h3", { className: "text-3xl font-bold text-slate-900 sm:text-4xl" }, "Classe de 2nde"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-600" }, "LFJP \xB7 Parcours Avenir \xB7 Ann\xE9e scolaire 2025\u20112026")))), /* @__PURE__ */ React.createElement("div", { className: "grid gap-3 text-sm sm:grid-cols-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5" }, /* @__PURE__ */ React.createElement("path", { d: "M11 3a1 1 0 0 0-2 0v1.382a3 3 0 0 0-1.447.829l-.978-.326a1 1 0 1 0-.632 1.898l.978.326a3.001 3.001 0 0 0 0 1.782l-.978.326a1 1 0 1 0 .632 1.898l.978-.326A3 3 0 0 0 9 11.618V13a1 1 0 1 0 2 0v-1.382a3 3 0 0 0 1.447-.829l.978.326a1 1 0 1 0 .632-1.898l-.978-.326a3 3 0 0 0 0-1.782l.978-.326a1 1 0 0 0-.632-1.898l-.978.326A3 3 0 0 0 11 4.382V3Z" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-medium uppercase tracking-wide text-slate-500" }, "Phases"), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-semibold text-slate-900" }, phasesCount))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5" }, /* @__PURE__ */ React.createElement("path", { d: "M4 5a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .4.2l1.1 1.6h5a2 2 0 0 1 2 2v1H4V5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M4 9h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-medium uppercase tracking-wide text-slate-500" }, "Actions planifi\xE9es"), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-semibold text-slate-900" }, totalActions))))), /* @__PURE__ */ React.createElement("div", { className: "max-w-md rounded-2xl border border-white/60 bg-white/80 px-5 py-4 text-sm text-slate-600 shadow-sm backdrop-blur" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500" }, "Objectif"), /* @__PURE__ */ React.createElement("p", { className: "mt-1 leading-relaxed text-slate-700" }, "Visualisez et filtrez toutes les actions pr\xE9vues pour accompagner l'orientation des \xE9l\xE8ves de seconde.")))), /* @__PURE__ */ React.createElement("div", { className: "border-t border-slate-100 bg-white px-6 py-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_auto]" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "view-2nde" }, "Vue"), /* @__PURE__ */ React.createElement(
      "select",
      {
        id: "view-2nde",
        value: view,
        onChange: (event) => setView(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
      },
      /* @__PURE__ */ React.createElement("option", { value: "timeline" }, "Frise chronologique"),
      /* @__PURE__ */ React.createElement("option", { value: "table" }, "Tableau")
    )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "phase-2nde" }, "Phase"), /* @__PURE__ */ React.createElement(
      "select",
      {
        id: "phase-2nde",
        value: selectedPhase,
        onChange: (event) => setSelectedPhase(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
      },
      /* @__PURE__ */ React.createElement("option", { value: "all" }, "Toutes"),
      PHASES_2NDE.map((phase) => /* @__PURE__ */ React.createElement("option", { key: phase.key, value: phase.key }, phase.key))
    )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1 sm:col-span-2 xl:col-span-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "search-2nde" }, "Recherche"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("span", { className: "pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        fillRule: "evenodd",
        d: "M9 3.5a5.5 5.5 0 1 0 3.356 9.9l3.122 3.122a.75.75 0 1 0 1.06-1.06l-3.122-3.123A5.5 5.5 0 0 0 9 3.5Zm-4 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
        clipRule: "evenodd"
      }
    ))), /* @__PURE__ */ React.createElement(
      "input",
      {
        id: "search-2nde",
        type: "search",
        placeholder: "Rechercher une action, une p\xE9riode, un acteur...",
        value: query,
        onChange: (event) => setQuery(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1 sm:col-span-2 xl:col-span-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500" }, "Export"), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: printPage,
        className: "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
      },
      /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4" }, /* @__PURE__ */ React.createElement("path", { d: "M6 2a2 2 0 0 0-2 2v2h2V4h8v2h2V4a2 2 0 0 0-2-2H6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M4 7a2 2 0 0 0-2 2v4h3v3h10v-3h3V9a2 2 0 0 0-2-2H4Zm10 8H6v-4h8v4Z" })),
      "Imprimer / PDF"
    ))))), /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm" }, view === "timeline" ? /* @__PURE__ */ React.createElement(Timeline2nde, { grouped, phases: PHASES_2NDE }) : /* @__PURE__ */ React.createElement(TableViewCompact, { rows: filtered })), /* @__PURE__ */ React.createElement("footer", { className: "text-xs text-slate-500" }, "Donn\xE9es issues du canevas Parcours Avenir 2nde. Derni\xE8re mise \xE0 jour : ", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), "."));
  }

  // scripts/data/filmAnnuel1ere.js
  var DATA_1ERE = [
    {
      id: "entretiens-accueil-diagnostic",
      phase: "Connaissance des fili\xE8res post\u2011bac",
      titre: "Entretiens d\u2019accueil et diagnostic",
      details: "Point de d\xE9part du suivi orientation pour chaque \xE9l\xE8ve.",
      periode: "Septembre",
      ordre: 20250915,
      acteurs: ["\xC9l\xE8ves", "PRIO", "PP"],
      lieu: "LFJP \xB7 Bureau orientation / HVC"
    },
    {
      id: "agora-inscription-1ere",
      phase: "Connaissance des fili\xE8res post\u2011bac",
      titre: "Inscription obligatoire \xE0 AGORA Monde",
      details: "Ouverture sur les t\xE9moignages et infos du r\xE9seau AEFE.",
      periode: "Octobre",
      ordre: 20251015,
      acteurs: ["\xC9l\xE8ves", "PRIO"],
      lieu: "\xC0 la maison / ENT"
    },
    {
      id: "postbac-presentation-fr-etr",
      phase: "Connaissance des fili\xE8res post\u2011bac",
      titre: "Pr\xE9sentations post\u2011bac France & parcours \xE0 l\u2019\xE9tranger",
      details: "Panorama des fili\xE8res, voies et parcours possibles en dehors de la France.",
      periode: "Novembre\u2013D\xE9cembre",
      ordre: 20251120,
      acteurs: ["PRIO", "PP"],
      lieu: "LFJP \xB7 Heure de vie de classe"
    },
    {
      id: "entretiens-a-la-demande",
      phase: "Connaissance de soi",
      titre: "Entretiens individuels \xE0 la demande (coaching)",
      details: "Accompagnement renforc\xE9, en priorit\xE9 pour \xE9l\xE8ves sans projet.",
      periode: "Toute l'ann\xE9e",
      ordre: 20251001,
      acteurs: ["\xC9l\xE8ves", "Parents", "PRIO"],
      lieu: "Bureau orientation"
    },
    {
      id: "recherche-info-analyse",
      phase: "Pr\xE9parer & affiner son projet",
      titre: "Recherche d\u2019information et analyse des contenus",
      details: "M\xE9thode de recherche, crit\xE8res, coh\xE9rence int\xE9r\xEAts/capacit\xE9s/projet pro.",
      periode: "Toute l'ann\xE9e",
      ordre: 20251010,
      acteurs: ["\xC9l\xE8ves", "PRIO"],
      lieu: "Bureau orientation / HVC"
    },
    {
      id: "parcoursup-fiches",
      phase: "Pr\xE9parer & affiner son projet",
      titre: "Lecture guid\xE9e des fiches formations Parcoursup",
      details: "Identifier exigences, attendus, et ad\xE9quation profil/choix de formation.",
      periode: "Toute l'ann\xE9e",
      ordre: 20251020,
      acteurs: ["\xC9l\xE8ves", "PRIO"],
      lieu: "Bureau orientation / HVC"
    },
    {
      id: "forum-metiers-1ere",
      phase: "Pr\xE9parer & affiner son projet",
      titre: "Forum des m\xE9tiers du LFJP",
      details: "Rencontres avec professionnels. Construction du r\xE9seau.",
      periode: "Novembre",
      ordre: 20251129,
      acteurs: ["\xC9l\xE8ves", "Professionnels", "PP", "PRIO"],
      lieu: "LFJP \xB7 Forum"
    },
    {
      id: "agora-salon-virtuel",
      phase: "Pr\xE9parer & affiner son projet",
      titre: "Participation au salon virtuel AGORA (info via Pronote)",
      details: "D\xE9couvrir des formations et \xE9changer avec des t\xE9moins.",
      periode: "D\xE9cembre\u2013Janvier",
      ordre: 20251210,
      acteurs: ["\xC9l\xE8ves"],
      lieu: "AGORA Monde"
    },
    {
      id: "salon-mermoz",
      phase: "Pr\xE9parer & affiner son projet",
      titre: "Salon des formations post\u2011bac \xE0 Mermoz",
      details: "Visite encadr\xE9e. Pr\xE9paration des questions et comptes rendus.",
      periode: "Janvier",
      ordre: 20260115,
      acteurs: ["\xC9l\xE8ves"],
      lieu: "Lyc\xE9e J.\u2011Mermoz"
    },
    {
      id: "mini-stages-1ere",
      phase: "Pr\xE9parer & affiner son projet",
      titre: "Recherche et accompagnement de mini\u2011stages",
      details: "Immersions courtes pour valider des pistes de formation.",
      periode: "\xC0 la demande",
      ordre: 20260210,
      acteurs: ["PRIO"],
      lieu: "\xC9tablissements et organismes partenaires"
    },
    {
      id: "pleniere-familles",
      phase: "Informations aux familles",
      titre: "R\xE9union pl\xE9ni\xE8re d\u2019information aux familles",
      details: "Modalit\xE9s du baccalaur\xE9at et calendrier de l\u2019orientation en 1\xE8re.",
      periode: "Lundi 17 novembre \xB7 17h",
      ordre: 20251117,
      acteurs: ["Parents", "PP", "PRIO"],
      lieu: "LFJP \xB7 Salle polyvalente"
    }
  ];
  var PHASES_1ERE = [
    { key: "Connaissance des fili\xE8res post\u2011bac", color: "bg-sky-100 border-sky-300" },
    { key: "Connaissance de soi", color: "bg-emerald-100 border-emerald-300" },
    { key: "Pr\xE9parer & affiner son projet", color: "bg-amber-100 border-amber-300" },
    { key: "Informations aux familles", color: "bg-fuchsia-100 border-fuchsia-300" }
  ];

  // scripts/components/orientation/Timeline1ere.js
  function Timeline1ere({ grouped, phases }) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-8" }, grouped.map(([title, items]) => {
      const phaseMeta = phases.find((phase) => phase.key === title);
      return /* @__PURE__ */ React.createElement("section", { key: title }, /* @__PURE__ */ React.createElement("h2", { className: "mb-3 text-lg font-semibold" }, title), /* @__PURE__ */ React.createElement("div", { className: "relative pl-6" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-2 top-0 h-full w-px bg-slate-200", "aria-hidden": true }), /* @__PURE__ */ React.createElement("ul", { className: "space-y-4" }, items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item.id, className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-white ring-2 ring-slate-300", "aria-hidden": true }), /* @__PURE__ */ React.createElement("article", { className: classNames("rounded-2xl border p-4", phaseMeta?.color) }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-baseline justify-between gap-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-medium" }, item.titre), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-slate-700" }, item.periode)), /* @__PURE__ */ React.createElement("p", { className: "mt-1 text-sm text-slate-700" }, item.details), /* @__PURE__ */ React.createElement("div", { className: "mt-2 flex flex-wrap gap-2 text-xs text-slate-600" }, /* @__PURE__ */ React.createElement(Badge, { icon: "users", label: item.acteurs.join(", ") }), /* @__PURE__ */ React.createElement(Badge, { icon: "map-pin", label: item.lieu }), /* @__PURE__ */ React.createElement(Badge, { icon: "flag", label: item.phase }))))))));
    }));
  }

  // scripts/components/orientation/Orientation1ere.js
  function Orientation1ere() {
    const {
      query,
      setQuery,
      selectedPhase,
      setSelectedPhase,
      view,
      setView,
      filtered,
      grouped
    } = useOrientationData(DATA_1ERE, PHASES_1ERE);
    const printPage = () => window.print();
    const totalActions = DATA_1ERE.length;
    const phasesCount = PHASES_1ERE.length;
    return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-7xl space-y-6 p-6" }, /* @__PURE__ */ React.createElement("header", { className: "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-amber-50 via-white to-emerald-50 px-6 py-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center gap-4 sm:gap-6" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://i.imgur.com/0YmGlXO.png",
        alt: "Logo du Lyc\xE9e Fran\xE7ais Jacques Pr\xE9vert de Saly",
        className: "h-14 w-auto",
        loading: "lazy",
        width: "96",
        height: "96"
      }
    ), /* @__PURE__ */ React.createElement("span", { className: "hidden h-14 w-px bg-gradient-to-b from-transparent via-amber-200 to-transparent sm:block" }), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-3xl font-bold text-amber-900 shadow-lg shadow-amber-200" }, "1\xE8re"), /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold uppercase tracking-widest text-amber-600" }, "Film annuel de l'orientation"), /* @__PURE__ */ React.createElement("h3", { className: "text-3xl font-bold text-slate-900 sm:text-4xl" }, "Classe de 1\xE8re"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-600" }, "LFJP \xB7 Parcours Avenir \xB7 Ann\xE9e scolaire 2025\u20112026")))), /* @__PURE__ */ React.createElement("div", { className: "grid gap-3 text-sm sm:grid-cols-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5" }, /* @__PURE__ */ React.createElement("path", { d: "M11 3a1 1 0 0 0-2 0v1.382a3 3 0 0 0-1.447.829l-.978-.326a1 1 0 1 0-.632 1.898l.978.326a3.001 3.001 0 0 0 0 1.782l-.978.326a1 1 0 1 0 .632 1.898l.978-.326A3 3 0 0 0 9 11.618V13a1 1 0 1 0 2 0v-1.382a3 3 0 0 0 1.447-.829l.978.326a1 1 0 1 0 .632-1.898l-.978-.326a3 3 0 0 0 0-1.782l.978-.326a1 1 0 0 0-.632-1.898l-.978.326A3 3 0 0 0 11 4.382V3Z" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-medium uppercase tracking-wide text-slate-500" }, "Phases"), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-semibold text-slate-900" }, phasesCount))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5" }, /* @__PURE__ */ React.createElement("path", { d: "M4 5a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .4.2l1.1 1.6h5a2 2 0 0 1 2 2v1H4V5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M4 9h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-medium uppercase tracking-wide text-slate-500" }, "Actions planifi\xE9es"), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-semibold text-slate-900" }, totalActions))))), /* @__PURE__ */ React.createElement("div", { className: "max-w-md rounded-2xl border border-white/60 bg-white/80 px-5 py-4 text-sm text-slate-600 shadow-sm backdrop-blur" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500" }, "Objectif"), /* @__PURE__ */ React.createElement("p", { className: "mt-1 leading-relaxed text-slate-700" }, "Suivez la progression des actions d'orientation pour guider les \xE9l\xE8ves de premi\xE8re vers leurs choix d'avenir.")))), /* @__PURE__ */ React.createElement("div", { className: "border-t border-slate-100 bg-white px-6 py-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_auto]" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "view-1ere" }, "Vue"), /* @__PURE__ */ React.createElement(
      "select",
      {
        id: "view-1ere",
        value: view,
        onChange: (event) => setView(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100"
      },
      /* @__PURE__ */ React.createElement("option", { value: "timeline" }, "Frise chronologique"),
      /* @__PURE__ */ React.createElement("option", { value: "table" }, "Tableau")
    )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "phase-1ere" }, "Phase"), /* @__PURE__ */ React.createElement(
      "select",
      {
        id: "phase-1ere",
        value: selectedPhase,
        onChange: (event) => setSelectedPhase(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
      },
      /* @__PURE__ */ React.createElement("option", { value: "all" }, "Toutes"),
      PHASES_1ERE.map((phase) => /* @__PURE__ */ React.createElement("option", { key: phase.key, value: phase.key }, phase.key))
    )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1 sm:col-span-2 xl:col-span-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "search-1ere" }, "Recherche"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("span", { className: "pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        fillRule: "evenodd",
        d: "M9 3.5a5.5 5.5 0 1 0 3.356 9.9l3.122 3.122a.75.75 0 1 0 1.06-1.06l-3.122-3.123A5.5 5.5 0 0 0 9 3.5Zm-4 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
        clipRule: "evenodd"
      }
    ))), /* @__PURE__ */ React.createElement(
      "input",
      {
        id: "search-1ere",
        type: "search",
        placeholder: "Rechercher une action, une p\xE9riode, un acteur...",
        value: query,
        onChange: (event) => setQuery(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1 sm:col-span-2 xl:col-span-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500" }, "Export"), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: printPage,
        className: "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
      },
      /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4" }, /* @__PURE__ */ React.createElement("path", { d: "M6 2a2 2 0 0 0-2 2v2h2V4h8v2h2V4a2 2 0 0 0-2-2H6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M4 7a2 2 0 0 0-2 2v4h3v3h10v-3h3V9a2 2 0 0 0-2-2H4Zm10 8H6v-4h8v4Z" })),
      "Imprimer / PDF"
    ))))), /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm" }, view === "timeline" ? /* @__PURE__ */ React.createElement(Timeline1ere, { grouped, phases: PHASES_1ERE }) : /* @__PURE__ */ React.createElement(TableViewCompact, { rows: filtered })), /* @__PURE__ */ React.createElement("footer", { className: "text-xs text-slate-500" }, "Donn\xE9es issues du canevas Parcours Avenir 1\xE8re. Derni\xE8re mise \xE0 jour : ", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), "."));
  }

  // scripts/data/filmAnnuelTerminale.js
  var DATA_TERMINALE = [
    {
      id: "postbac-voies",
      phase: "Conna\xEEtre les voies post\u2011bac",
      titre: "Pr\xE9sentation des voies de formation post\u2011bac",
      details: "Panorama de l'ES fran\xE7ais. Rep\xE8res fili\xE8res, dipl\xF4mes et parcours.",
      periode: "Octobre",
      ordre: 20251020,
      acteurs: ["PP", "PRIO"],
      lieu: "Heure de vie de classe \xB7 LFJP"
    },
    {
      id: "entretien-accueil",
      phase: "D\xE9couverte de soi \xB7 Confirmation du projet",
      titre: "Entretien individuel d'accueil",
      details: "Point de d\xE9part. Situation scolaire et intentions post\u2011bac.",
      periode: "Septembre",
      ordre: 20250915,
      acteurs: ["PP", "PRIO"],
      lieu: "Bureau orientation \xB7 LFJP"
    },
    {
      id: "accompagnement-indiv",
      phase: "D\xE9couverte de soi \xB7 Confirmation du projet",
      titre: "Accompagnement individualis\xE9",
      details: "Suivi personnalis\xE9 du projet de formation et professionnel.",
      periode: "Septembre \u2192 Janvier",
      ordre: 20250920,
      acteurs: ["PRIO"],
      lieu: "Bureau orientation"
    },
    {
      id: "agora-inscription",
      phase: "D\xE9couverte de soi \xB7 Confirmation du projet",
      titre: "Inscription AGORA Monde + pr\xE9paration au salon virtuel",
      details: "Cr\xE9ation de compte, rep\xE9rage des interlocuteurs et ressources.",
      periode: "Octobre",
      ordre: 20251025,
      acteurs: ["PRIO", "PP"],
      lieu: "ENT / \xC0 la maison"
    },
    {
      id: "agora-salon",
      phase: "D\xE9couverte de soi \xB7 Confirmation du projet",
      titre: "Participation au salon virtuel AGORA Monde",
      details: "\xC9changes avec anciens et \xE9tablissements. Synth\xE8se des infos.",
      periode: "D\xE9cembre\u2013Janvier",
      ordre: 20251210,
      acteurs: ["\xC9l\xE8ves"],
      lieu: "AGORA Monde"
    },
    {
      id: "salon-formations",
      phase: "D\xE9couverte de soi \xB7 Confirmation du projet",
      titre: "Salon des formations de l'enseignement sup\xE9rieur",
      details: "Pr\xE9paration du questionnement. Visite encadr\xE9e et restitution.",
      periode: "Janvier",
      ordre: 20260115,
      acteurs: ["PRIO", "PP"],
      lieu: "Ext\xE9rieur / LFJP"
    },
    {
      id: "forum-metiers",
      phase: "D\xE9couverte de soi \xB7 Confirmation du projet",
      titre: "\xC9changes avec des professionnels / Forum m\xE9tiers",
      details: "T\xE9moignages et rencontres pour valider le projet.",
      periode: "Toute l'ann\xE9e",
      ordre: 20251010,
      acteurs: ["Enseignants", "PRIO"],
      lieu: "LFJP / Ext\xE9rieur"
    },
    {
      id: "reunions-procedures-nov",
      phase: "Proc\xE9dures Parcoursup \xB7 Campus France \xB7 CROUS",
      titre: "R\xE9unions d'information Parents & \xE9l\xE8ves",
      details: "Modalit\xE9s Parcoursup, Campus France, bourses et logement.",
      periode: "Novembre",
      ordre: 20251115,
      acteurs: ["PRIO", "PP"],
      lieu: "LFJP"
    },
    {
      id: "reunions-procedures-jan",
      phase: "Proc\xE9dures Parcoursup \xB7 Campus France \xB7 CROUS",
      titre: "R\xE9unions d'information compl\xE9mentaires",
      details: "Point d'\xE9tape. Calendrier et documents attendus.",
      periode: "Janvier",
      ordre: 20260110,
      acteurs: ["PRIO", "PP"],
      lieu: "LFJP"
    },
    {
      id: "parcoursup-inscription",
      phase: "Accompagnement Parcoursup",
      titre: "Inscription Parcoursup et cr\xE9ation du dossier",
      details: "Comptes, pi\xE8ces, configuration du profil.",
      periode: "Novembre \u2192 Juin",
      ordre: 20251125,
      acteurs: ["PRIO", "PP"],
      lieu: "LFJP"
    },
    {
      id: "parcoursup-voeux",
      phase: "Accompagnement Parcoursup",
      titre: "Formulation et validation des v\u0153ux",
      details: "Strat\xE9gie de v\u0153ux. Diversification et ad\xE9quation profil/exigences.",
      periode: "Octobre \u2192 fin mars",
      ordre: 20251030,
      acteurs: ["PRIO", "PP"],
      lieu: "LFJP"
    },
    {
      id: "projet-motive",
      phase: "Accompagnement Parcoursup",
      titre: "Accompagnement au projet motiv\xE9",
      details: "Structure, \xE9l\xE9ments de preuve, relectures.",
      periode: "Novembre \u2192 Juin",
      ordre: 20251201,
      acteurs: ["PRIO", "PP"],
      lieu: "LFJP"
    },
    {
      id: "pleniere-parents",
      phase: "Informations aux parents",
      titre: "R\xE9union pl\xE9ni\xE8re d'information",
      details: "Calendrier orientation Terminale. Bac 2026. Proc\xE9dures Parcoursup.",
      periode: "Lundi 17 novembre \xB7 17h",
      ordre: 20251117,
      acteurs: ["PRIO", "PP", "Parents"],
      lieu: "Salle polyvalente \xB7 LFJP"
    }
  ];
  var PHASES_TERMINALE = [
    { key: "Conna\xEEtre les voies post\u2011bac", color: "bg-sky-100 border-sky-300" },
    {
      key: "D\xE9couverte de soi \xB7 Confirmation du projet",
      color: "bg-emerald-100 border-emerald-300"
    },
    {
      key: "Proc\xE9dures Parcoursup \xB7 Campus France \xB7 CROUS",
      color: "bg-amber-100 border-amber-300"
    },
    { key: "Accompagnement Parcoursup", color: "bg-fuchsia-100 border-fuchsia-300" },
    { key: "Informations aux parents", color: "bg-indigo-100 border-indigo-300" }
  ];

  // scripts/components/orientation/TimelineTerminale.js
  function TimelineTerminale({ grouped, phases }) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-8" }, grouped.map(([title, items]) => {
      const phaseMeta = phases.find((phase) => phase.key === title);
      return /* @__PURE__ */ React.createElement("section", { key: title }, /* @__PURE__ */ React.createElement("h2", { className: "mb-3 text-lg font-semibold" }, title), /* @__PURE__ */ React.createElement("div", { className: "relative pl-6" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-2 top-0 h-full w-px bg-slate-200", "aria-hidden": true }), /* @__PURE__ */ React.createElement("ul", { className: "space-y-4" }, items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item.id, className: "relative" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-white ring-2 ring-slate-300",
          "aria-hidden": true
        }
      ), /* @__PURE__ */ React.createElement("article", { className: classNames("rounded-2xl border p-4", phaseMeta?.color) }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-baseline justify-between gap-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-medium" }, item.titre), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-slate-700" }, item.periode)), /* @__PURE__ */ React.createElement("p", { className: "mt-1 text-sm text-slate-700" }, item.details), /* @__PURE__ */ React.createElement("div", { className: "mt-2 flex flex-wrap gap-2 text-xs text-slate-600" }, /* @__PURE__ */ React.createElement(Badge, { icon: "users", label: item.acteurs.join(", ") }), /* @__PURE__ */ React.createElement(Badge, { icon: "map-pin", label: item.lieu }), /* @__PURE__ */ React.createElement(Badge, { icon: "flag", label: item.phase }))))))));
    }));
  }

  // scripts/components/orientation/OrientationTerminale.js
  function OrientationTerminale() {
    const {
      query,
      setQuery,
      selectedPhase,
      setSelectedPhase,
      view,
      setView,
      filtered,
      grouped
    } = useOrientationData(DATA_TERMINALE, PHASES_TERMINALE);
    const printPage = () => window.print();
    const totalActions = DATA_TERMINALE.length;
    const phasesCount = PHASES_TERMINALE.length;
    return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-7xl space-y-6 p-6" }, /* @__PURE__ */ React.createElement("header", { className: "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-rose-50 via-white to-slate-100 px-6 py-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center gap-4 sm:gap-6" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://i.imgur.com/0YmGlXO.png",
        alt: "Logo du Lyc\xE9e Fran\xE7ais Jacques Pr\xE9vert de Saly",
        className: "h-14 w-auto",
        loading: "lazy",
        width: "96",
        height: "96"
      }
    ), /* @__PURE__ */ React.createElement("span", { className: "hidden h-14 w-px bg-gradient-to-b from-transparent via-rose-200 to-transparent sm:block" }), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500 text-3xl font-bold text-white shadow-lg shadow-rose-200" }, "Tle"), /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold uppercase tracking-widest text-rose-600" }, "Film annuel de l'orientation"), /* @__PURE__ */ React.createElement("h3", { className: "text-3xl font-bold text-slate-900 sm:text-4xl" }, "Classe de Terminale"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-600" }, "LFJP \xB7 Parcours Avenir \xB7 Ann\xE9e scolaire 2025\u20112026")))), /* @__PURE__ */ React.createElement("div", { className: "grid gap-3 text-sm sm:grid-cols-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5" }, /* @__PURE__ */ React.createElement("path", { d: "M11 3a1 1 0 0 0-2 0v1.382a3 3 0 0 0-1.447.829l-.978-.326a1 1 0 1 0-.632 1.898l.978.326a3.001 3.001 0 0 0 0 1.782l-.978.326a1 1 0 1 0 .632 1.898l.978-.326A3 3 0 0 0 9 11.618V13a1 1 0 1 0 2 0v-1.382a3 3 0 0 0 1.447-.829l.978.326a1 1 0 1 0 .632-1.898l-.978-.326a3 3 0 0 0 0-1.782l.978-.326a1 1 0 0 0-.632-1.898l-.978.326A3 3 0 0 0 11 4.382V3Z" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-medium uppercase tracking-wide text-slate-500" }, "Phases"), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-semibold text-slate-900" }, phasesCount))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur" }, /* @__PURE__ */ React.createElement("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5" }, /* @__PURE__ */ React.createElement("path", { d: "M4 5a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .4.2l1.1 1.6h5a2 2 0 0 1 2 2v1H4V5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M4 9h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-medium uppercase tracking-wide text-slate-500" }, "Actions planifi\xE9es"), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-semibold text-slate-900" }, totalActions))))), /* @__PURE__ */ React.createElement("div", { className: "max-w-md rounded-2xl border border-white/60 bg-white/80 px-5 py-4 text-sm text-slate-600 shadow-sm backdrop-blur" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500" }, "Objectif"), /* @__PURE__ */ React.createElement("p", { className: "mt-1 leading-relaxed text-slate-700" }, "Coordonnez les \xE9tapes finales d'orientation pour accompagner les \xE9l\xE8ves de terminale vers l'enseignement sup\xE9rieur.")))), /* @__PURE__ */ React.createElement("div", { className: "border-t border-slate-100 bg-white px-6 py-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_auto]" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "view-terminale" }, "Vue"), /* @__PURE__ */ React.createElement(
      "select",
      {
        id: "view-terminale",
        value: view,
        onChange: (event) => setView(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
      },
      /* @__PURE__ */ React.createElement("option", { value: "timeline" }, "Frise chronologique"),
      /* @__PURE__ */ React.createElement("option", { value: "table" }, "Tableau")
    )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "phase-terminale" }, "Phase"), /* @__PURE__ */ React.createElement(
      "select",
      {
        id: "phase-terminale",
        value: selectedPhase,
        onChange: (event) => setSelectedPhase(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
      },
      /* @__PURE__ */ React.createElement("option", { value: "all" }, "Toutes"),
      PHASES_TERMINALE.map((phase) => /* @__PURE__ */ React.createElement("option", { key: phase.key, value: phase.key }, phase.key))
    )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1 sm:col-span-2 xl:col-span-1" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500", htmlFor: "search-terminale" }, "Recherche"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("span", { className: "pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        fillRule: "evenodd",
        d: "M9 3.5a5.5 5.5 0 1 0 3.356 9.9l3.122 3.122a.75.75 0 1 0 1.06-1.06l-3.122-3.123A5.5 5.5 0 0 0 9 3.5Zm-4 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
        clipRule: "evenodd"
      }
    ))), /* @__PURE__ */ React.createElement(
      "input",
      {
        id: "search-terminale",
        type: "search",
        placeholder: "Rechercher une action, une p\xE9riode, un acteur...",
        value: query,
        onChange: (event) => setQuery(event.target.value),
        className: "w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1 sm:col-span-2 xl:col-span-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold uppercase tracking-wide text-slate-500" }, "Export"), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: printPage,
        className: "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
      },
      /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4" }, /* @__PURE__ */ React.createElement("path", { d: "M6 2a2 2 0 0 0-2 2v2h2V4h8v2h2V4a2 2 0 0 0-2-2H6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M4 7a2 2 0 0 0-2 2v4h3v3h10v-3h3V9a2 2 0 0 0-2-2H4Zm10 8H6v-4h8v4Z" })),
      "Imprimer / PDF"
    ))))), /* @__PURE__ */ React.createElement("div", { className: "rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm" }, view === "timeline" ? /* @__PURE__ */ React.createElement(TimelineTerminale, { grouped, phases: PHASES_TERMINALE }) : /* @__PURE__ */ React.createElement(TableViewCompact, { rows: filtered })), /* @__PURE__ */ React.createElement("footer", { className: "text-xs text-slate-500" }, "Donn\xE9es issues du canevas Parcours Avenir Terminale. Derni\xE8re mise \xE0 jour :", " ", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), "."));
  }

  // scripts/app.js
  var { createRoot } = ReactDOM;
  var { createElement } = React;
  document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("film-annuel-root");
    if (rootElement) {
      const root = createRoot(rootElement);
      root.render(createElement(Orientation3e));
    }
    const root2ndeElement = document.getElementById("film-annuel-2nde-root");
    if (root2ndeElement) {
      const root = createRoot(root2ndeElement);
      root.render(createElement(Orientation2nde));
    }
    const root1ereElement = document.getElementById("film-annuel-1ere-root");
    if (root1ereElement) {
      const root = createRoot(root1ereElement);
      root.render(createElement(Orientation1ere));
    }
    const rootTerminaleElement = document.getElementById("film-annuel-terminale-root");
    if (rootTerminaleElement) {
      const root = createRoot(rootTerminaleElement);
      root.render(createElement(OrientationTerminale));
    }
  });
})();
