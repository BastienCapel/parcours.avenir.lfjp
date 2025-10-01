export function Icon({ name, className }) {
  const paths = {
    users: "M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M7 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    "map-pin": "M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    flag: "M4 15V3a1 1 0 0 1 1-1h10l-1 3 4 .5V15l-4-.5-1 3H5a1 1 0 0 1-1-1Z",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name] || paths.flag} />
    </svg>
  );
}
