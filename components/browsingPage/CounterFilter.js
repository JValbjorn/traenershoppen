export default function FilterBar({ count }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 w-full">
      <p className="text-sm text-gray-600">{count} produkter</p>

      <button className="flex items-center gap-2 text-sm font-medium">
        Filtrering og sortering
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="8" y1="12" x2="20" y2="12" />
          <line x1="12" y1="18" x2="20" y2="18" />
        </svg>
      </button>
    </div>
  );
}