export function classNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function normalizeText(value) {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}
