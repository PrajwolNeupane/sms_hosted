import React from "react";
import LeftIcon from "../../assets/icons/LeftIcon";
import RightIcon from "../../assets/icons/RightIcon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const visiblePages = 3;
  const pageNumbers = Array.from(
    { length: visiblePages },
    (_, index) => currentPage - 1 + index
  ).filter((pageNumber) => pageNumber > 0);

  return (
    <div className="flex justify-center mt-6">
      <nav className="inline-flex">
        <button
          className={`px-3 py-2 rounded-full ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-300 text-white"
          }`}
          onClick={() => onPageChange(currentPage - visiblePages)}
          disabled={currentPage <= 1}
        >
          <LeftIcon color="#929CA6" height="20" width="20" />
        </button>

        {pageNumbers.map(
          (pageNumber) =>
            pageNumber <= totalPages && (
              <button
                key={pageNumber}
                className={`px-4 py-2 mx-1 rounded-full ${
                  currentPage === pageNumber
                    ? "bg-primary text-white"
                    : "border border-gray-500 text-gray-700"
                }`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
        )}

        <button
          className={`px-3 py-2 rounded-full ${
            currentPage == totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-300 text-white"
          }`}
          onClick={() => onPageChange(currentPage + visiblePages)}
          disabled={currentPage == totalPages}
        >
          <RightIcon color="#929CA6" height="20" width="20" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
