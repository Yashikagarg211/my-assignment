interface PaginationProps {
  page: number;
  rowsPerPage: number;
  total: number;
  onPageChange: (page: number) => void;
}

export function TablePagination({ page, rowsPerPage, total, onPageChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / rowsPerPage));
  const canPrev = page > 0;
  const canNext = page + 1 < totalPages;

  return (
    <div className="flex items-center justify-between px-3 py-2 text-sm">
      <span>Page {page + 1} of {totalPages}</span>
      <div className="space-x-2">
        <button
          disabled={!canPrev}
          onClick={() => canPrev && onPageChange(page - 1)}
          className="rounded border px-2 py-1 disabled:opacity-50 dark:border-gray-800"
        >
          Prev
        </button>
        <button
          disabled={!canNext}
          onClick={() => canNext && onPageChange(page + 1)}
          className="rounded border px-2 py-1 disabled:opacity-50 dark:border-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
}
