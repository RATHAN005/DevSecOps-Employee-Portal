import React from "react";

/**
 * Pagination component
 * @param {object} props
 * @param {number} props.currentPage - 1-based current page
 * @param {number} props.totalPages
 * @param {function} props.onPageChange - (page: number) => void
 * @param {number} props.siblingCount - Pages shown around the current page
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  if (totalPages <= 1) return null;

  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const buildPages = () => {
    const totalNumbers = siblingCount * 2 + 3; // siblings + current + 2 ends
    const totalBlocks = totalNumbers + 2; // with dots

    if (totalPages <= totalBlocks) return range(1, totalPages);

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    if (!showLeftDots && showRightDots) {
      const leftRange = range(1, 3 + siblingCount * 2);
      return [...leftRange, "...", totalPages];
    }
    if (showLeftDots && !showRightDots) {
      const rightRange = range(totalPages - (3 + siblingCount * 2) + 1, totalPages);
      return [1, "...", ...rightRange];
    }
    return [1, "...", ...range(leftSibling, rightSibling), "...", totalPages];
  };

  const pages = buildPages();

  const btnBase =
    "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors";
  const activeBtn = "bg-indigo-600 text-white shadow";
  const inactiveBtn =
    "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700";
  const disabledBtn = "opacity-40 cursor-not-allowed";

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-1"
    >
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${btnBase} ${currentPage === 1 ? disabledBtn : inactiveBtn}`}
        aria-label="Previous page"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`dots-${idx}`} className="px-2 text-gray-400">
            &hellip;
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${btnBase} ${currentPage === page ? activeBtn : inactiveBtn}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${btnBase} ${currentPage === totalPages ? disabledBtn : inactiveBtn}`}
        aria-label="Next page"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
