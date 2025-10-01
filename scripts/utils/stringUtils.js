export function classNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function normalizeText(value) {
  return (value || "")
    .replace(/[\u00A0\u202F]/g, " ")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/[\u2018\u2019\u201B]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/-/g, " ")
    .replace(/\s{2,}/g, " ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}
