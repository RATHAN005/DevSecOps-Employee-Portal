import { useState, useMemo } from "react";

/**
 * usePagination — client-side pagination helper
 * @param {Array} data - Full data array
 * @param {number} pageSize - Items per page
 * @returns {{ paginatedData, currentPage, totalPages, setPage }}
 */
const usePagination = (data = [], pageSize = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  const setPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return { paginatedData, currentPage, totalPages, setPage };
};

export default usePagination;
