import { useState } from 'react';

import { PAGE_CHANGER_STEPS, PAGE_LIMIT } from '@constants';

const usePagination = (total: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(PAGE_LIMIT);
  const maxPage = Math.ceil(total / itemsPerPage);
  const pageSizeOptions = PAGE_CHANGER_STEPS;

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  };

  const changeItemsPerPage = (limit: number) => {
    setItemsPerPage(limit);
  };

  return {
    currentPage,
    itemsPerPage,
    pageSizeOptions,
    goToPage,
    changeItemsPerPage,
  };
};

export default usePagination;
