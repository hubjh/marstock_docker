import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 110rem;
  height: 10rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

const PageButton = styled.button`
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.4);

  &:hover {
    color: var(--mainpurple);
    cursor: pointer;
  }
`;

const ArrowButton = styled.button`
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.4);

  &:hover {
    color: var(--mainpurple);
    cursor: pointer;
  }
`;

const CommunityPagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            color:
              currentPage === page
                ? "var(--mainpurple)"
                : "rgba(255, 255, 255, 0.4)",
          }}
        >
          {page}
        </PageButton>
      ))}
      <ArrowButton onClick={handleNextPage}>▷</ArrowButton>
    </PaginationContainer>
  );
};

export default CommunityPagination;
