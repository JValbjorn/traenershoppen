export default function Pagination({ totalItems, itemsPerPage = 16, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <button
        onClick={() => onPageChange((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="text-gray-400 hover:text-black disabled:opacity-30 text-lg font-bold"
      >
        &lt;
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 text-sm font-semibold ${
            currentPage === page ? "border-b-2 border-black" : "text-gray-400 hover:text-black"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="text-gray-400 hover:text-black disabled:opacity-30 text-lg font-bold"
      >
        &gt;
      </button>
    </div>
  );
}