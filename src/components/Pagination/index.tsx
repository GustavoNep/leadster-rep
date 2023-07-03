import styled from "styled-components";

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
  user-select: none;
  span {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-right: 2px;
  }
`;

const PageItem = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 0 1px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      color: #2c83fb;
      font-weight: 700;
      border-color: #2c83fb;
    }
  }
`;

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {

  
  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  return (
    <PageStyle>
      <span>Página</span>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <PageItem
            className={currentPage === index + 1 ? "active" : ""}
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </PageItem>
        ))}
      </div>
    </PageStyle>
  );
}
